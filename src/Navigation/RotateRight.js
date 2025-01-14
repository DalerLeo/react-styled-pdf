import React from 'react';
import PropTypes from 'prop-types';
import RotateRightIcon from '../icons/RotateRight'
const RotateRight = ({ css, rotationAngle, handleRotateRight }) => {
    const rotateRightClass = `
    ${css ? css : 'btn btn-sm btn-link text-white pl-2'}
    ${rotationAngle === 90 ? ' disabled' : ''}
  `;

    return (
        <button
            type="button"
            className={rotateRightClass}
            onClick={handleRotateRight}>
            <RotateRightIcon/>
        </button>
    );
};
RotateRight.propTypes = {
    css: PropTypes.string,
    rotationAngle: PropTypes.number.isRequired,
    handleRotateRight: PropTypes.func.isRequired
};

export default RotateRight;
