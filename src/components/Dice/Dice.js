import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import Dice6 from 'assets/dices/dice-6.png';
import Dice5 from 'assets/dices/dice-5.png';
import Dice4 from 'assets/dices/dice-4.png';
import Dice3 from 'assets/dices/dice-3.png';
import Dice2 from 'assets/dices/dice-2.png';
import Dice1 from 'assets/dices/dice-1.png';

const rotate = keyframes`
    from {
        transform: translate(-50%, -50%) rotate(0);
    }

    to {
        transform: translate(-50%, -50%) rotate(360deg);
    }
`;

const handleDiceChange = (dice) => {
    switch (dice) {
        case 1:
            return Dice1;
        case 2:
            return Dice2;
        case 3:
            return Dice3;
        case 4:
            return Dice4;
        case 5:
            return Dice5;
        case 6:
            return Dice6;
        default:
            return;
    }
};

const Dice = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(0);
    width: 125px;
    height: 125px;
    background-image: url(${({ whichDiceNumber }) => handleDiceChange(whichDiceNumber)});
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
    border: 1px solid hsla(0, 0%, 0%, 35%);
    box-shadow: 4px 0px 4px 1px rgba(0, 0, 0, 0.25);
    animation: ${rotate} 50s infinite linear;
    z-index: 1000;

    @media only screen and (max-width: 1200px) {
        width: 90px;
        height: 90px;
    }
`;

Dice.propTypes = {
    whichDiceNumber: PropTypes.number.isRequired,
};

export default Dice;
