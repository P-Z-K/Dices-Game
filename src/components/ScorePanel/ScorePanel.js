import styled from 'styled-components';
import PropTypes from 'prop-types';
import React from 'react';

const ScorePanel = styled.div`
    width: 114px;
    height: 63px;
    background: ${({ secondary }) =>
        secondary
            ? 'linear-gradient(180deg, #FF5757 0%, #470707 100%)'
            : 'linear-gradient(180deg, #89EB71 4.17%, #103108 95.31%)'};
    border-bottom-right-radius: 60px;
    text-align: left;
    position: relative;
`;

const ScoreInfo = styled.h1`
    margin: 0;
    display: block;
    width: 41px;
    font-size: 24px;
    font-weight: normal;
    position: absolute;
    text-align: right;
    top: 50%;
    left: 22%;
    transform: translateY(-50%);
`;

const ScoreWrapper = ({ secondary, points }) => {
    return (
        <ScorePanel secondary={secondary}>
            <ScoreInfo>{points}</ScoreInfo>
        </ScorePanel>
    );
};

ScoreWrapper.propTypes = {
    secondary: PropTypes.bool,
    points: PropTypes.number.isRequired,
};

ScoreWrapper.defaultProps = {
    secondary: null,
};
export default ScoreWrapper;
