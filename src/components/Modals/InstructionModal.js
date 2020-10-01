import styled from 'styled-components';
import PropTypes from 'prop-types';
import React from 'react';

const StyledWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const InnerWrapper = styled.div`
    width: 95vw;
    max-width: 1250px;
    padding: 25px 55px;
    height: 65vh;
    border-radius: 10px;
    background-color: #404040;
    position: relative;

    @media screen and (max-width: 1000px) {
        height: 70vh;
    }

    @media screen and (max-width: 600px) {
        height: 85vh;
        padding: 20px 45px;
    }

    @media screen and (max-width: 450px) {
        height: 95vh;
    }
`;

const Heading = styled.h1`
    color: #efefef;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 50px;
    font-size: 3.5rem;
    font-weight: 500;

    @media screen and (max-width: 800px) {
        font-size: 3rem;
    }

    @media screen and (max-width: 500px) {
        font-size: 2.7rem;
    }

    @media screen and (max-width: 400px) {
        font-size: 2.3rem;
    }
`;

const Description = styled.p`
    color: #efefef;
`;

const DescriptionHeading = styled.h2`
    margin-bottom: 45px;
    text-align: center;
    font-weight: 500;

    @media screen and (max-width: 800px) {
        font-size: 2rem;
    }

    @media screen and (max-width: 400px) {
        font-size: 1.8rem;
    }
`;

const List = styled.ul`
    text-align: center;
    list-style: none;
`;

const ListItem = styled.li`
    font-weight: 500;
    padding-bottom: 35px;
    text-transform: uppercase;
    text-decoration: underline;
    font-size: 2rem;

    @media screen and (max-width: 800px) {
        font-size: 1.7rem;
    }

    @media screen and (max-width: 400px) {
        font-size: 1.6rem;
    }
`;

const ExitButton = styled.button`
    position: absolute;
    color: #efefef;
    width: 37px;
    height: 37px;
    top: 8px;
    right: 8px;
    border-radius: 50%;
    border: 1px solid #fbab7e;
    background-color: transparent;
    padding: 16px;

    &:hover {
        background-color: #fbab7e;
    }

    ::before,
    ::after {
        content: '';
        width: 75%;
        height: 2px;
        display: inline-block;
        position: absolute;
        top: 50%;
        left: 50%;
        background-color: #efefef;
        transform: translate(-50%, -50%);
        transition: transform 0.7s ease;
    }

    :hover::before,
    :hover::after {
        background-color: #171717;
    }

    ::after {
        transform: translate(-50%, -50%) rotate(-45deg);
    }

    ::before {
        transform: translate(-50%, -50%) rotate(45deg);
    }

    :hover::after {
        transform: translate(-50%, -50%) rotate(135deg);
    }

    :hover::before {
        transform: translate(-50%, -50%) rotate(225deg);
    }

    @media screen and (max-width: 600px) {
        width: 25px;
        height: 25px;
    }
`;

const InstructionModal = ({ exitModalFn }) => (
    <StyledWrapper>
        <InnerWrapper>
            <ExitButton onClick={exitModalFn} />
            <Heading>Witam Cię w grze "DICES-GAME"</Heading>
            <Description>
                <DescriptionHeading>Rozgrywka opiera sie na tym aby uzyskać 100 punktów globalnych.</DescriptionHeading>
                <List>
                    <ListItem>Przyciskiem "ROLL" rzucasz kostką, uzyskując wynik pomiędzy 1-6 punktów.</ListItem>
                    <ListItem>Przyciskiem "HOLD" zamieniasz swoje dotychczasowe punkty "current" na "global".</ListItem>
                    <ListItem>
                        Po wyrzuceniu kostki z jednym oczkiem tracisz swoje dotychczasowe punkty i następuję zmiana
                        tury.
                    </ListItem>
                    <ListItem>Punktów globalnych nie da się stracić.</ListItem>
                </List>
            </Description>
        </InnerWrapper>
    </StyledWrapper>
);

export default InstructionModal;
