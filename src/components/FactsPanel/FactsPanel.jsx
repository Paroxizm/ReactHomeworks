import ErrorBox from "../ErrorBox/ErrorBox.jsx";
import FactList from "../FactList/FactList.jsx";
import FetchButton from "../FetchButton/FetchButton.jsx";
import PropTypes from "prop-types";
import React from "react";
import "./FactsPanel.css"

function FactsPanel({ url, timeout }) {
    const [facts, setFacts] = React.useState([]);
    const [errorMessage, setErrorMessage] = React.useState("");
    const [isError, setIsError] = React.useState(false);
    
    const onFactsLoaded = (facts) => setFacts(facts);
    const onFactsLoadError = (isError, errorMsg) => {
        setErrorMessage(errorMsg);
        setIsError(isError);
    };        
    
    return (
        <div className="facts-panel">
            <FetchButton url={url} timeout={timeout}
                       onFactsLoaded={onFactsLoaded}
                       onError={onFactsLoadError} />
            <ErrorBox isError={isError} message={errorMessage} />
            <FactList facts={facts} />
        </div>
    )
}

FactsPanel.propTypes = {
    url: PropTypes.string.isRequired,
    timeout: PropTypes.number.isRequired,
}

export default FactsPanel;