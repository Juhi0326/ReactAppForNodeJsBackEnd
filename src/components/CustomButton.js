import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types'

const CustomButton = ({ styleClass, value, onClick, btnSize }) => {
    return (
        <Button
            variant={styleClass}
            size={btnSize}
            onClick={(event) => onClick(event)}>
            {value}
        </Button>

    );
}
CustomButton.propTypes = {
    styleClass: PropTypes.string,
    value: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

CustomButton.defaultProps = {
    styleClass: 'primary',
    btnSize:''
}

export default CustomButton;