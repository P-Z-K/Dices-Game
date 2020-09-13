import React from 'react';
import StyledWrapper from './Modal';

export default {
    title: 'Example/Modal',
    component: StyledWrapper,
};

export const loserModal = () => <StyledWrapper />;
export const winnerModal = () => <StyledWrapper winner />;
