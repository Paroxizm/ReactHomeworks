import ErrorBox from "../ErrorBox/ErrorBox.jsx";
import FactList from "../FactList/FactList.jsx";
import FetchButton from "../FetchButton/FetchButton.jsx";
import PropTypes from "prop-types";
import React from "react";
import "./FactsPanel.css"
import Waiter from "../Waiter/Waiter.jsx";

function FactsPanel({ url, timeout }) {
    const [facts, setFacts] = React.useState([]);
    const [errorMessage, setErrorMessage] = React.useState("");
    const [isError, setIsError] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);
    
    const onFactsLoaded = (facts) => setFacts(facts);
    const onFactsLoading = (isLoading) => setIsLoading(isLoading);
    const onFactsLoadError = (isError, errorMsg) => {
        setErrorMessage(errorMsg);
        setIsError(isError);
    };        
    
    return (
        <div className="facts-panel">
            <FetchButton url={url} timeout={timeout}
                       onLoading={onFactsLoading}
                       onFactsLoaded={onFactsLoaded}
                       onError={onFactsLoadError} />
            <ErrorBox isError={isError} message={errorMessage} />
            <FactList facts={facts} />
            <Waiter visible={isLoading} />
        </div>
    )
}

FactsPanel.propTypes = {
    url: PropTypes.string.isRequired,
    timeout: PropTypes.number.isRequired,
}

export default FactsPanel;