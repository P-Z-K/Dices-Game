import styled from 'styled-components';
import PropTypes from 'prop-types';
import Dice from 'components/Dice/Dice';
import RestartIcon from 'assets/icons/restart.svg';

const Button = styled.button`
    width: 100%;
    max-width: 240px;
    border: none;
    background-color: transparent;
    font-weight: 500;
    font-size: 5rem;
    letter-spacing: 1px;
    color: #171717;
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

    @media screen and (max-width: 600px) {
        font-size: 3rem;
    }

    @media screen and (orientation: landscape) and (max-width: 940px){
        font-size: 2.5rem;
        padding: 7px 0;
    }

`;

const RestartButton = styled(Dice).attrs({
    as: 'button',
})`
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
