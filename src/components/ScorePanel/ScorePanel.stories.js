import React from 'react';
import ScorePanel from './ScorePanel';

export default {
    title: 'Example/ScoreBar',
    component: ScorePanel,
};

export const ScoreBarGreen = () => <ScorePanel />;
export const ScoreBarRed = () => <ScorePanel secondary />;
