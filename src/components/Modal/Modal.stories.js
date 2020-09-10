import React from 'react';
import Modal from './Modal';

export default {
    title: 'Example/Modal',
    component: Modal,
};

export const loserModal = () => <Modal />;
export const winnerModal = () => <Modal winner />;
