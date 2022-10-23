import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import PropTypes from 'prop-types'

const dropDown = ({ styleClass, data, onChange, dropDownTitle }) => {

    const handleChange = (event) => {
        onChange(event);
    };

    return (
        <DropdownButton
            title={dropDownTitle}
            onSelect={handleChange}

        >
            {data?.map((item, key) => (
                <Dropdown.Item eventKey={item.name} value={item.name}>{item.name} </Dropdown.Item>
            ))}
        </DropdownButton>

    );
}
dropDown.propTypes = {
    styleClass: PropTypes.string,
    value: PropTypes.string,
    data: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
    dropDownTitle:PropTypes.string.isRequired

}

dropDown.defaultProps = {
    styleClass: 'success',

}

export default dropDown;