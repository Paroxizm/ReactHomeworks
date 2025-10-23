import {useEffect, useState} from "react";
import PropTypes from "prop-types";
import "./ErrorBox.css";

function ErrorBox({isError, message}) {
    
    const [style, setStyle] = useState({ 
        display: 'none'        
    });
    
    useEffect(() => {
        setStyle(() => ({ display: isError ? 'block' : 'none' }));        
    }, [isError]);
    
    return (
        <div className={"error-box"} style={style}>
            {message}
        </div>
    )
}

ErrorBox.propTypes = {
    isError: PropTypes.bool.isRequired,
    message: PropTypes.string.isRequired,
}

export default ErrorBox