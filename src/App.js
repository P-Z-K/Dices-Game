import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import GlobalStyles from 'themes/GlobalStyles';
import Dice from 'components/Dice/Dice';
import { RestartButton } from 'components/Button/Button';
import Authors from 'components/Authors/Authors';
import PlayerSide from 'components/PlayerSide/PlayerSide';
import InstructionModal from 'components/Modals/InstructionModal';

const getRandomNumber = () => Math.floor(Math.random() * 6) + 1; // Return number from 1 to 6

const StyledWrapper = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    position: relative;
    background: linear-gradient(66.78deg, #fbab7e 0%, #f7ce68 81.63%);

    ${({ blur }) =>
        blur &&
        css`
            filter: blur(2px);
        `}
`;

const StyledMiddleLine = styled.div`
    width: 2px;
    height: 100%;
    background-color: ${({ changeColour }) => (changeColour ? 'hsla(11, 0%, 46%)' : 'hsla(0, 9%, 14%, 54%)')};
`;

class App extends Component {
    state = {
        playerOne: {
            name: 'playerOne',
            currentScore: 0,
            globalScore: 0,
        },

        playerTwo: {
            name: 'playerTwo',
            currentScore: 0,
            globalScore: 0,
        },

        diceNumber: 1,
        isPlayerOneTurn: true,
        winner: {
            name: '',
            is: false,
        },
        winningScore: 100,
        isInstructionModalOpen: true,
    };
    checkWinnerName = (playerName) => {
        return this.state.winner.name === playerName ? true : false;
    };

    isWinner = () => {
        setTimeout(() => {
            const arr = [this.state.playerOne, this.state.playerTwo];

            const winner = arr.find((item) => item.globalScore >= this.state.winningScore);

            if (winner !== undefined) {
                this.setState({
                    winner: {
                        name: winner.name,
                        is: true,
                    },
                });
            }
            return null;
        }, 1);
    };

    nextTurn = () => this.setState((prevState) => ({ isPlayerOneTurn: !prevState.isPlayerOneTurn }));

    resetCurrScore = (playerName) => {
        this.setState((prevState) => ({
            [playerName]: {
                ...prevState[playerName],
                currentScore: 0,
            },
        }));
    };

    updateCurrScore = (playerName, value) => {
        const playerTemp = { ...this.state[playerName] };

        if (value === 1) {
            this.resetCurrScore(playerName);
            this.nextTurn();
        } else {
            this.setState((prevState) => ({
                [playerName]: {
                    ...prevState[playerTemp.name],
                    currentScore: playerTemp.currentScore + value,
                },
            }));
        }
    };

    updateGlobalScore = (playerName) => {
        const playerTemp = { ...this.state[playerName] };

        this.setState((prevState) => ({
            [playerName]: {
                ...prevState[playerTemp.name],
                globalScore: playerTemp.globalScore + playerTemp.currentScore,
            },
        }));
    };

    exitModal = () => {
        this.setState({
            isInstructionModalOpen: false,
        });
    };

    restartGame = () => {
        this.setState((prevState) => ({
            playerOne: {
                name: 'playerOne',
                currentScore: 0,
                globalScore: 0,
            },

            playerTwo: {
                name: 'playerTwo',
                currentScore: 0,
                globalScore: 0,
            },

            diceNumber: 1,
            isPlayerOneTurn: prevState.isPlayerOneTurn,
            winner: {
                name: '',
                is: false,
            },
            winningScore: 100,
        }));
    };

    handleHoldClick = (playerName) => {
        this.updateGlobalScore(playerName);
        this.resetCurrScore(playerName);
        this.isWinner();
        this.nextTurn();
    };

    handleRollClick = (playerName) => {
        const number = getRandomNumber();
        this.setState({ diceNumber: number });

        this.updateCurrScore(playerName, number);
    };

    render() {
        const { winner, playerOne, playerTwo, isPlayerOneTurn, diceNumber, isInstructionModalOpen } = this.state;
        return (
            <>
                {isInstructionModalOpen && <InstructionModal exitModalFn={this.exitModal} />}
                <GlobalStyles />
                <StyledWrapper blur={isInstructionModalOpen}>
                    <Authors />

                    {winner.is ? (
                        <RestartButton onClick={() => this.restartGame()} />
                    ) : (
                        <Dice whichDiceNumber={diceNumber} />
                    )}

                    <PlayerSide
                        inactive={isPlayerOneTurn}
                        player={playerTwo}
                        isWinner={winner.is}
                        holdFn={this.handleHoldClick}
                        rollFn={this.handleRollClick}
                        checkWinnerNameFn={this.checkWinnerName}
                    />

                    <StyledMiddleLine changeColour={winner.is} />

                    <PlayerSide
                        inactive={!isPlayerOneTurn}
                        player={playerOne}
                        isWinner={winner.is}
                        holdFn={this.handleHoldClick}
                        rollFn={this.handleRollClick}
                        checkWinnerNameFn={this.checkWinnerName}
                    />
                </StyledWrapper>
            </>
        );
    }
}

export default App;

/* 
    @todo Need to implement restart button
    @body Now, users in order to restart game have to reload website

    @todo Need to improve UI for the mobiles

    @todo Need to adapt UI for the desktops
*/
