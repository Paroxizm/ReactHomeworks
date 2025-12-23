import FactItem from '../FactItem/FactItem.jsx'
import "./FactList.css"
import type {Fact} from "../Fact.ts";

export interface FactListProps{
    facts: Array<Fact>
}

function FactList({facts} : FactListProps) {

    return (
        <div className={"fact-list"}>
            <ul>
                {facts.map((fact) =>
                    (
                        <li key={fact.fact}>
                            <FactItem fact={fact.fact}/>
                        </li>
                    ))}
            </ul>
        </div>
    )
}

export default FactList