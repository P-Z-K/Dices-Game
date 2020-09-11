import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import GlobalStyles from 'themes/GlobalStyles';
import Dice from 'components/Dice/Dice';
import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import ScoreWrapper from 'components/ScorePanel/ScorePanel';

const getRandomNumber = () => Math.floor(Math.random() * 6) + 1; // Return number from 1 to 6

const StyledWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    position: relative;
    background: linear-gradient(66.78deg, #fbab7e 0%, #f7ce68 81.63%);
`;

const StyledButtonsWrapper = styled.div`
    position: absolute;
    left: 50%;
    margin-top: 120px;
    transform: translateX(-50%);
    display: flex;

    ${({ disable }) =>
        disable &&
        css`
            pointer-events: none;
        `}
`;

const StyledPlayerSide = styled.div`
    width: 100%;
    height: 50vh;
    position: relative;
    transition: background-color 0.7s ease;

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

const StyledMiddleLine = styled.div`
    height: 4px;
    background-color: hsla(0, 9%, 14%, 54%);
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

    nextTurn = () => this.setState({ isPlayerOneTurn: !this.state.isPlayerOneTurn });

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

    handleHoldClick = (name) => {
        this.updateGlobalScore(name);
        this.resetCurrScore(name);
        this.nextTurn();
        this.isWinner();
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
                    <Dice whichDiceNumber={diceNumber} />

                    <StyledPlayerSide rotateSide inactive={isPlayerOneTurn}>
                        <StyledButtonsWrapper disable={isPlayerOneTurn}>
                            <Button onClick={() => this.handleRollClick(playerTwo.name)}>click me</Button>
                            <Button hold onClick={() => this.handleHoldClick(playerTwo.name)}>
                                hold
                            </Button>
                        </StyledButtonsWrapper>
                        <ScoreWrapper secondary points={playerTwo.currentScore} />
                        <ScoreWrapper secondary points={playerTwo.globalScore} />
                        {winner.is && <Modal winner={this.checkWinnerName(playerTwo.name)} />}
                    </StyledPlayerSide>

                    <StyledMiddleLine />

                    <StyledPlayerSide inactive={!isPlayerOneTurn}>
                        <StyledButtonsWrapper disable={!isPlayerOneTurn}>
                            <Button onClick={() => this.handleRollClick(playerOne.name)}>click me</Button>
                            <Button hold onClick={() => this.handleHoldClick(playerOne.name)}>
                                hold
                            </Button>
                        </StyledButtonsWrapper>
                        <ScoreWrapper points={playerOne.currentScore} />
                        <ScoreWrapper points={playerOne.globalScore} />
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
