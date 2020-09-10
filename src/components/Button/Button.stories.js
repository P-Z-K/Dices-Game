import React from 'react';
import Button from './Button';

export default {
    title: 'Example/Button',
    component: Button,
};

export const RollBtn = () => <Button>ROLL DICE</Button>;
export const HoldBtn = () => <Button hold>HOLD</Button>;
