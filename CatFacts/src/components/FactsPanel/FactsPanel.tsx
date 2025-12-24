import ErrorBox from "../ErrorBox/ErrorBox.tsx";
import FactList from "../FactList/FactList.tsx";
import FetchButton from "../FetchButton/FetchButton.tsx";
import React from "react";
import "./FactsPanel.css"
import type {Fact} from "../Fact.ts";

export type FactsPanelProps = {
    url: string,
    timeout: number
}

const FactsPanel = ({ url, timeout } : FactsPanelProps) => {
    const [facts, setFacts] = React.useState<Array<Fact>>([]);
    const [errorMessage, setErrorMessage] = React.useState("");
    const [isError, setIsError] = React.useState(false);
    
    const onFactsLoaded = (facts : Array<Fact>) => setFacts(facts);
    const onFactsLoadError = (isError : boolean, errorMsg : string) => {
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

export default FactsPanel;