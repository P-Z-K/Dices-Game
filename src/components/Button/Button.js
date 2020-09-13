import styled from 'styled-components';
import RollIcon from 'assets/icons/rollDice.svg';
import PropTypes from 'prop-types';
import HoldIcon from 'assets/icons/hold.svg';
import Dice from 'components/Dice/Dice';
import RestartIcon from 'assets/icons/restart.svg';

const Button = styled.button`
    width: 40%;
    border: none;
    background-color: transparent;
    font-weight: 500;
    font-size: 5rem;
    letter-spacing: 1px;
    color: #171717;
    background-image: url(${({ hold }) => (hold ? HoldIcon : RollIcon)});
    background-repeat: no-repeat;
    background-position: 10px 50%;
    background-size: 50px;

    text-transform: uppercase;
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;

    &:focus {
        outline: none;
        box-shadow: 0px 0px 15px -8px rgba(0, 0, 0, 0.75);
    }
    &:hover {
        box-shadow: 0px 0px 15px -8px rgba(0, 0, 0, 0.75);
    }

    @media only screen and (max-width: 1400px) {
        font-size: 3rem;
        padding-left: 40px;
        background-size: 40px;
    }
`;

const RestartButton = styled(Dice).attrs({
    as: 'button',
})`
    width: 150px;
    height: 150px;
    background-image: url(${RestartIcon});
    background-size: cover;
    background-color: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    cursor: pointer;
`;

Button.propTypes = {
    hold: PropTypes.bool,
    restart: PropTypes.bool,
};

Button.defaultProps = {
    hold: null,
    restart: null,
};

export { Button, RestartButton };
