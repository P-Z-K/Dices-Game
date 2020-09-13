import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import GlobalStyles from 'themes/GlobalStyles';
import Dice from 'components/Dice/Dice';
import { Button, RestartButton } from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import ScoreWrapper from 'components/ScorePanel/ScorePanel';
import Authors from 'components/Authors/Authors';

const getRandomNumber = () => Math.floor(Math.random() * 6) + 1; // Return number from 1 to 6

const StyledWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    position: relative;
    background: linear-gradient(66.78deg, #fbab7e 0%, #f7ce68 81.63%);
`;

const StyledButtonsWrapper = styled.div`
    width: 50vw;
    height: 75px;
    position: absolute;
    left: 50%;
    top: 80%;
    transform: translateX(-50%);
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    ${({ disable }) =>
        disable &&
        css`
            pointer-events: none;
        `}

    @media only screen and (max-width: 1026px) {
        flex-direction: column;
        justify-content: space-between;
        height: 120px;
    }
`;

const StyledPlayerSide = styled.div`
    width: 50%;
    height: 100vh;
    position: relative;
    transition: background-color 0.7s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    ${({ rotateSide }) =>
        rotateSide &&
        css`
            transform: rotate(180deg);
        `}

    ${({ inactive }) =>
        inactive &&
        css`
            background-color: hsla(0, 0%, 0%, 0.35);
        `}
`;

const StyledPointsWrapper = styled.div`
    margin: 30px 0;
`;

const StyledMiddleLine = styled.div`
    width: 2px;
    height: 100%;
    background-color: ${({ changeColour }) => (changeColour ? 'hsla(50, 84%, 51%, 1)' : 'hsla(0, 9%, 14%, 54%)')};
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
        winningScore: 10,
    };
    checkWinnerName(name) {
        return this.state.winner.name === name ? true : false;
    }

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

    resetCurrScore = (player) => {
        this.setState((prevState) => ({
            [player]: {
                ...prevState[player],
                currentScore: 0,
            },
        }));
    };

    updateCurrScore = (player, value) => {
        const playerTemp = { ...this.state[player] };

        if (value === 1) {
            this.resetCurrScore(player);
            this.nextTurn();
        } else {
            this.setState((prevState) => ({
                [player]: {
                    ...prevState[playerTemp.name],
                    currentScore: playerTemp.currentScore + value,
                },
            }));
        }
    };

    updateGlobalScore = (player) => {
        const playerTemp = { ...this.state[player] };

        this.setState((prevState) => ({
            [player]: {
                ...prevState[playerTemp.name],
                globalScore: playerTemp.globalScore + playerTemp.currentScore,
            },
        }));
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
            winningScore: 10,
        }));
    };

    handleHoldClick = (name) => {
        this.updateGlobalScore(name);
        this.resetCurrScore(name);
        this.isWinner();
        this.nextTurn();
    };

    handleRollClick = (name) => {
        const number = getRandomNumber();
        this.setState({ diceNumber: number });

        this.updateCurrScore(name, number);
    };

    render() {
        const { winner, playerOne, playerTwo, isPlayerOneTurn, diceNumber } = this.state;
        return (
            <>
                <GlobalStyles />
                <StyledWrapper>
                    <Authors />
                    {winner.is ? (
                        <RestartButton onClick={() => this.restartGame()} />
                    ) : (
                        <Dice whichDiceNumber={diceNumber} />
                    )}

                    <StyledPlayerSide inactive={isPlayerOneTurn}>
                        <StyledButtonsWrapper disable={isPlayerOneTurn}>
                            <Button onClick={() => this.handleRollClick(playerTwo.name)}>Roll</Button>
                            <Button hold onClick={() => this.handleHoldClick(playerTwo.name)}>
                                hold
                            </Button>
                        </StyledButtonsWrapper>
                        <StyledPointsWrapper current>
                            <ScoreWrapper current points={playerTwo.currentScore} />
                        </StyledPointsWrapper>

                        <StyledPointsWrapper>
                            <ScoreWrapper points={playerTwo.globalScore} />
                        </StyledPointsWrapper>

                        {winner.is && <Modal winner={this.checkWinnerName(playerTwo.name)} />}
                    </StyledPlayerSide>

                    <StyledMiddleLine changeColour={winner.is} />

                    <StyledPlayerSide inactive={!isPlayerOneTurn}>
                        <StyledButtonsWrapper disable={!isPlayerOneTurn}>
                            <Button onClick={() => this.handleRollClick(playerOne.name)}>Roll</Button>
                            <Button hold onClick={() => this.handleHoldClick(playerOne.name)}>
                                hold
                            </Button>
                        </StyledButtonsWrapper>
                        <StyledPointsWrapper current>
                            <ScoreWrapper current points={playerOne.currentScore} />
                        </StyledPointsWrapper>

                        <StyledPointsWrapper>
                            <ScoreWrapper points={playerOne.globalScore} />
                        </StyledPointsWrapper>
                        {winner.is && <Modal winner={this.checkWinnerName(playerOne.name)} />}
                    </StyledPlayerSide>
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
