import React, { Component } from 'react';

class TopBar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let { language, project,bdd } = this.props;

        if(project === "web"){
            project ="site web"
        }else if(project ==="react"){
            project ="site web réactif"
        }

        if(bdd ==="none"){
            bdd ="rien en plus"
        }else if(bdd ==="sql"){
            bdd ="une base de donnée sql"
        }else if(bdd ==="nosql"){
            bdd ="une base de donnée nosql"
        }

        return (
            <h1 className={"animated fadeInDown"}>Je développe en {language} et je souhaite créer un {project} avec {bdd}</h1>
        )
    }
}

export default TopBar;