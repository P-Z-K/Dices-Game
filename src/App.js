import React, { Component } from 'react';
import GlobalStyles from 'themes/GlobalStyles';
import Dice from 'components/Dice/Dice';
import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import ScoreWrapper from 'components/ScorePanel/ScorePanel';

class App extends Component {
    render() {
        return (
            <>
                <GlobalStyles />
                <ScoreWrapper points={100} />
                <ScoreWrapper secondary points={89} />
            </>
        );
    }
}

export default App;
