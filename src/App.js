import './App.css';
import React, {useState} from 'react';

function Square(props) {
    return (
        <div
            className="square"
            style={{ backgroundColor: props.color }}
            onClick={props.onClick}
        ></div>
    );
}

function App() {
    const [colors, setColors] = useState({ square1: 'red', square2: 'blue' });

    function handleClick() {
        setColors({
            square1: colors.square2,
            square2: colors.square1,
        });
    }

    return (
        <div>
            <Square color={colors.square1} onClick={handleClick} />
            <Square color={colors.square2} onClick={handleClick} />
        </div>
    );
}

export default App;
