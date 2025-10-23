import PropTypes from 'prop-types'
import './FactItem.css'

function FactItem({ fact }) {
    
    return (
        
        <span className="fact-item">
            <div className="fact-item-logo" />
            <div className="fact-item-text">{fact}</div>
        </span>
    );
    
}

FactItem.propTypes = {
    fact: PropTypes.string.isRequired
};

export default FactItem