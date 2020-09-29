import styled, { css } from 'styled-components';
import React from 'react';
import ScorePanel from 'components/ScorePanel/ScorePanel';
import { Button } from 'components/Button/Button';
import Modal from 'components/Modal/Modal';

const StyledPointsWrapper = styled.div`
    margin: 0 15px;
    grid-column: 2 / 8;
    grid-row: 6;
    display: flex;
    justify-content: center;
    column-gap: 45px;

    @media screen and (max-width: 940px) {
        flex-direction: column;
        row-gap: 30px;
        align-items: center;
    }
`;

const StyledWrapper = styled.div`
    width: 50%;
    height: 100vh;
    position: relative;
    transition: background-color 0.7s ease;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(12, 1fr);
    grid-auto-rows: minmax(75px, auto);

    ${({ inactive }) =>
        inactive &&
        css`
            background-color: hsla(0, 0%, 0%, 0.35);
        `}
`;

const StyledButtonsWrapper = styled.div`
    margin: 0 15px;
    grid-column: 2 / 8;
    column-gap: 45px;
    grid-row: 10;
    display: flex;
    justify-content: center;

    ${({ disable }) =>
        disable &&
        css`
            pointer-events: none;
        `}

    @media screen and (max-width: 940px) {
        flex-direction: column;
        row-gap: 50px;
        align-items: center;
    }

    @media screen and (orientation: landscape) and (max-width: 940px) {
        row-gap: 25px;
        flex-direction: column;
        align-items: center;
    }

`;

const PlayerSide = ({ inactive, player, isWinner, holdFn, rollFn, checkWinnerNameFn }) => {
    return (
        <StyledWrapper inactive={inactive}>
            <StyledButtonsWrapper disable={inactive}>
                <Button onClick={() => rollFn(player.name)}>Roll</Button>
                <Button hold onClick={() => holdFn(player.name)}>
                    hold
                </Button>
            </StyledButtonsWrapper>

            <StyledPointsWrapper>
                <ScorePanel current points={player.currentScore} />
                <ScorePanel points={player.globalScore} />
            </StyledPointsWrapper>

            {isWinner && <Modal winner={checkWinnerNameFn(player.name)} />}
        </StyledWrapper>
    );
};

export default PlayerSide;
