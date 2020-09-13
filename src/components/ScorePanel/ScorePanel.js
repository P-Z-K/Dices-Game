import styled from 'styled-components';
import PropTypes from 'prop-types';
import React from 'react';

const StyledWrapper = styled.div`
    min-height: 5vw;
    min-width: 15vw;
    padding: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    background-color: hsla(223, 0%, 14%, 1);
    border-radius: 10px;
    color: #efefef;
`;

const ScoreInfo = styled.h1`
    font-size: 24px;
`;

const ScoreType = styled.h2`
    font-size: 17px;
`;

const ScorePanel = ({ points, current }) => {
    return (
        <StyledWrapper>
            <ScoreInfo>{points}</ScoreInfo>
            <ScoreType>{current ? 'current' : 'global'}</ScoreType>
        </StyledWrapper>
    );
};

ScorePanel.propTypes = {
    points: PropTypes.number.isRequired,
};

export default ScorePanel;
