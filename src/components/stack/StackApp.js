import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class StackApp extends Component {
    render() {
        return (
            <div>
                Welcome to React!
            </div>
        )
    }
}

const wrapper = document.getElementById("reactapp");
wrapper ? ReactDOM.render(<StackApp />, wrapper) : false;
