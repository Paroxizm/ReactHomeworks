import PropTypes from 'prop-types'
import {Box, Group, Text} from "@mantine/core";
import {IconCat} from "@tabler/icons-react";

export interface FactItemProps{
    fact: string;
}

function FactItem({ fact } : FactItemProps) {
    
    return (
        
        <Group wrap={"nowrap"} mb={15}>
            <Box w={24}>
            <IconCat size={24} min={24} width={26} />
            </Box>
            <Text>{fact}</Text>
            
        </Group>
        
        // <span className="fact-item">
        //     <div className="fact-item-logo" />
        //     <div className="fact-item-text">{fact}</div>
        // </span>
    );
    
}

FactItem.propTypes = {
    fact: PropTypes.string.isRequired
};

export default FactItem