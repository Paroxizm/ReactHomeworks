import {useState} from 'react';
import axios from "axios";
import {Button} from "@mantine/core";
import type {Fact} from "../Fact.ts";

export interface FetchButtonProps {
    url: string,
    onFactsLoaded: (facts : Array<Fact>) => void,
    onError: (isError: boolean, errorMessage: string | undefined) => void,
    timeout: number
}

function FetchButton({url, onFactsLoaded, onError, timeout}: FetchButtonProps) {
    const [loading, setLoading] = useState(false);

    const fetchData = () => {
        setLoading(true);
        onFactsLoaded([]);
        onError(false, undefined);

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
                setLoading(false);
            });
    }

    return (
        <Button
            variant="light"    
            loading={loading}            
            onClick={fetchData}>Загрузить данные</Button>
    )
}

export default FetchButton;