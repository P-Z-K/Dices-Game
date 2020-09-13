import styled, { css } from 'styled-components';
import React from 'react';
import ScorePanel from 'components/ScorePanel/ScorePanel';
import { Button } from 'components/Button/Button';
import Modal from 'components/Modal/Modal';

const StyledPointsWrapper = styled.div`
    margin: 30px 0;
`;

const StyledWrapper = styled.div`
    width: 50%;
    height: 100vh;
    position: relative;
    transition: background-color 0.7s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    ${({ inactive }) =>
        inactive &&
        css`
            background-color: hsla(0, 0%, 0%, 0.35);
        `}
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

    @media only screen and (max-width: 1400px) {
        flex-direction: column;
        justify-content: space-between;
        height: 120px;
    }
`;

const PlayerSide = ({ inactive, name, currentPoints, globalPoints, isWinner, holdFn, rollFn, checkWinnerNameFn }) => {
    return (
        <StyledWrapper inactive={inactive}>
            <StyledButtonsWrapper disable={inactive}>
                <Button onClick={() => rollFn(name)}>Roll</Button>
                <Button hold onClick={() => holdFn(name)}>
                    hold
                </Button>
            </StyledButtonsWrapper>

            <StyledPointsWrapper current>
                <ScorePanel current points={currentPoints} />
            </StyledPointsWrapper>

            <StyledPointsWrapper>
                <ScorePanel points={globalPoints} />
            </StyledPointsWrapper>

            {isWinner && <Modal winner={checkWinnerNameFn(name)} />}
        </StyledWrapper>
    );
};

export default PlayerSide;
