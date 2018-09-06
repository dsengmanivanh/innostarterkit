import React, { Component } from 'react';
import StackModel from "./StackModel";

class Toolbox extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {language} = this.props;
        let tools = StackModel.TOOLBOX;
        if(language === "java"){
            tools = tools.filter(tool => tool.language.includes("java"))
        }else if(language ==="kotlin"){
            tools = tools.filter(tool => tool.language.includes("kotlin"))
        }else if(language ==="javascript"){
            tools = tools.filter(tool => tool.language.includes("javascript"))
        }

        const whytools = StackModel.WHY_STACK.filter(why => {
            return tools.some(data => {
                return data.label.toLowerCase() === why.label.toLowerCase()
            })
        });

        let key = 0;

        return (
            <h1>r</h1>
        )
    }
}

export default Toolbox;