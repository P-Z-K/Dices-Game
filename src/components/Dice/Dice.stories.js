import React from 'react';
import Dice from './Dice';

export default {
    title: 'Example/Dice',
    component: Dice,
};

export const Dice6 = () => <Dice whichDiceNumber={6} />;
