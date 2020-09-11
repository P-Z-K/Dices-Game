import styled from 'styled-components';
import RollIcon from 'assets/icons/rollDice.svg';
import PropTypes from 'prop-types';
import HoldIcon from 'assets/icons/hold.svg';

const Button = styled.button`
    width: 160px;
    height: 50px;
    border: none;
    background-color: transparent;
    font-weight: 500;
    font-size: 1.9rem;
    margin: 0 12px;
    letter-spacing: 1px;
    padding-left: ${({ hold }) => (hold ? '17px' : '50px')};
    color: #000;
    background-image: url(${({ hold }) => (hold ? HoldIcon : RollIcon)});
    background-repeat: no-repeat;
    background-position: 8px 50%;
    background-size: 20%;
    text-transform: uppercase;
    border-radius: 10px;
    overflow: hidden;

    &:focus {
        outline: none;
        box-shadow: 0px 0px 15px -8px rgba(0, 0, 0, 0.75);
    }
`;

Button.propTypes = {
    hold: PropTypes.bool,
};

Button.defaultProps = {
    hold: null,
};

export default Button;
