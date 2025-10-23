import {useEffect, useState} from 'react';
import axios from "axios";
import PropTypes from "prop-types";
import "./FetchButton.css"

function FetchButton({url, onFactsLoaded, onError, onLoading, timeout}) {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(false);
    }, [url])

    const fetchData = () => {
        setLoading(true);
        onFactsLoaded([]);
        onError(false, undefined);
        onLoading(true);
        
        axios.get(url, {
            timeout: timeout
        })
            .then((response) => {
                if (response.status >= 400) {
                    throw new Error(`Ошибка: ${response.status}`);
                }
                return response.data;
            })
            .then(response => {
                onFactsLoaded(response.data);
                setLoading(false);
                onLoading(false);
            })
            .catch(error => {
               
                let errorMessage;
                if (error.code === 'ECONNABORTED') {
                    errorMessage = "Упс, не дождались";
                } else if (error.response) {
                    errorMessage = "Сервер вернул ошибку: " + error.response.status;
                } else {
                    errorMessage = "Ошибка получения данных:" + error.message;
                }
                
                onFactsLoaded([]);
                onError(true, errorMessage);
                onLoading(false);                
                setLoading(false);
            });
    }

    return (

        <button className={loading ? "fetch-button-inactive" : "fetch-button-active"} onClick={fetchData} disabled={loading}>
            <div >
                {loading ? "Загрузка..." : "Загрузить данные"}
            </div>
        </button>

    )
}

FetchButton.propTypes = {
    url: PropTypes.string.isRequired,
    onFactsLoaded: PropTypes.func.isRequired,
    onError: PropTypes.func.isRequired,
    onLoading: PropTypes.func.isRequired,
    timeout: PropTypes.number.isRequired
}

export default FetchButton;