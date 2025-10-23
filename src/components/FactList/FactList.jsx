import PropTypes from 'prop-types'
import FactItem from '../FactItem/FactItem.jsx'
import "./FactList.css"

function FactList({facts}) {
    
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

FactList.propTypes = {
    facts: PropTypes.arrayOf(PropTypes.shape({
        fact: PropTypes.string,
        length: PropTypes.number
    })).isRequired
};

export default FactList