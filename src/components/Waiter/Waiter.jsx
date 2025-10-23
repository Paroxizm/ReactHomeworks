import PropTypes from 'prop-types'
import  "./Waiter.css"

function Waiter({ visible }) {
    
    return (
        <div className={"waiter"} style={{ display: visible ? "block" : "none" }}>
            
        </div>
    )
}

Waiter.propTypes = {
    visible: PropTypes.bool.isRequired
};

export default Waiter