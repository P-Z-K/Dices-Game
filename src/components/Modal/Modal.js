import styled from 'styled-components';
import PropTypes from 'prop-types';
import React from 'react';

const Modal = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: ${({ makeGreen }) =>
        makeGreen
            ? 'linear-gradient(0deg, rgba(0,0,0,1) 73%, rgba(137,235,113,0.7) 100%)'
            : 'linear-gradient(0, rgba(0, 0, 0, 1) 73%, rgba(214, 40, 40, 0.7) 100%)'};
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;

const Message = styled.h1`
    display: block;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-size: 5rem;
    -webkit-background: ${({ makeGreen }) =>
        makeGreen
            ? 'linear-gradient(90deg, rgba(14, 79, 13, 1) 0%, rgba(137, 235, 113, 1) 100%)'
            : 'linear-gradient(90deg, rgba(103,6,24,1) 0%, rgba(214,40,40,1) 100%)'};
    background: ${({ makeGreen }) =>
        makeGreen
            ? 'linear-gradient(90deg, rgba(14, 79, 13, 1) 0%, rgba(137, 235, 113, 1) 100%)'
            : 'linear-gradient(90deg, rgba(103,6,24,1) 0%, rgba(214,40,40,1) 100%)'};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

const ModalWrapper = ({ winner }) => (
    <Modal makeGreen={winner}>
        <Message makeGreen={winner}>{winner ? 'Winner' : 'Defeated'}</Message>
    </Modal>
);

ModalWrapper.propTypes = {
    winner: PropTypes.bool.isRequired,
};

export default ModalWrapper;
