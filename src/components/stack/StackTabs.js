import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, CardHeader, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import StackModel from './StackModel';

class StackTabs extends Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render() {
        const {language, project, bdd} = this.props;
        let tools = StackModel.TOOLBOX;
        let stacks = StackModel.JAVA_STACK;
        let dockerFile = StackModel.DOCKER_FILE;
        if(language === "java"){
            tools = tools.filter(tool => tool.language.includes("java"));
            dockerFile = dockerFile.filter(d => d.language === "java");
        }else if(language ==="kotlin"){
            stacks = StackModel.KOTLIN_STACK;
            tools = tools.filter(tool => tool.language.includes("kotlin"));
            dockerFile = dockerFile.filter(d => d.language === "kotlin");
        }else if(language ==="javascript"){
            stacks = StackModel.JAVASCRIPT_STACK;
            tools = tools.filter(tool => tool.language.includes("javascript"));
            dockerFile = dockerFile.filter(d => d.language === "javascript");
        }
        dockerFile = dockerFile.filter(d => d.project.toLowerCase() === project.toLowerCase() && d.bdd.toLowerCase() === bdd.toLowerCase());
        stacks = stacks.filter(stack => stack.project.toLowerCase() === project.toLowerCase() && stack.bdd.toLowerCase() === bdd.toLowerCase());

        const whyStacks = StackModel.WHY_STACK.filter(why => {
            return stacks.some(stack => stack.tech.map(t => t.toLowerCase()).includes(why.label.toLowerCase()))
        });

        stacks = stacks.concat(dockerFile);

        console.log("whyStacks=",whyStacks);

        const whyTools = StackModel.WHY_STACK.filter(why => {
            return tools.some(data => {
                return data.label.toLowerCase() === why.label.toLowerCase()
            })
        });



        let key = 0;
        return (
            <div>
                <Nav tabs>
                    {
                        StackModel.NAV.map((data,index) => {
                            index = index+1;
                            return (
                                <NavLink key={data} className={classnames({ active: this.state.activeTab === index.toString() },"navlink")} onClick={() => { this.toggle(index.toString()); }}>
                                    <span className={"tab"}>{data}</span>
                                </NavLink>
                            )
                        })
                    }
                </Nav>
                <TabContent activeTab={this.state.activeTab} className={"navbar"}>
                    <TabPane tabId="1">
                        <Row>
                            {
                                tools.map((data) => {
                                        key = key+1;
                                        return (
                                            <Col sm="4" key={key}>
                                                <Card key={key} body className={"card"} >
                                                    <CardTitle>{data.label}</CardTitle>
                                                    <CardText>{data.description}</CardText>
                                                    {
                                                        data.ref.map(r => {
                                                            key = key+1;
                                                            return <a key={key} className={"btn btn-default"} href={data.ref.filter(d => d.title === r.title)[0].link} target="_blank">{r.title}</a>
                                                        })
                                                    }
                                                </Card>
                                            </Col>
                                        )
                                    }

                                )
                            }
                            {
                                whyTools.map((data) => {
                                        key = key+1;
                                        return (
                                            <Col sm="4" key={key}>
                                                <Card key={key} body className={"card"} >
                                                    <CardTitle className={"why"}>Why {data.label} ?</CardTitle>
                                                    <CardText>{data.description}</CardText>
                                                    {
                                                        data.ref.map(r => {
                                                            key = key+1;
                                                            return <a key={key} className={"btn btn-default"} href={r.link} target="_blank">{r.title}</a>
                                                        })
                                                    }
                                                </Card>
                                            </Col>
                                        )
                                    }

                                )
                            }
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        <Row>
                            {
                                stacks.map((data,index) => {
                                    key = key+1;
                                    return (
                                        <Col sm="12" key={key}>
                                            <Card key={key} body className={"card"} >
                                                <CardTitle>Step {index}</CardTitle>
                                                <CardTitle>{data.label}</CardTitle>
                                                <CardText>{data.description}</CardText>
                                                {
                                                    data.ref.map(r => {
                                                        key = key+1;
                                                        return <a key={key} className={"btn btn-default"} href={r.link} target="_blank">{r.title}</a>
                                                    })
                                                }
                                            </Card>
                                        </Col>
                                    )
                                })
                            }
                            {
                                whyStacks.map((data,index) => {
                                    key = key+1;
                                    return (
                                        <Col sm="12" key={key}>
                                            <Card key={key} body className={"card"} >
                                                <CardTitle className={"why"}>What is {data.label} ?</CardTitle>
                                                <CardText>{data.description}</CardText>
                                                {
                                                    data.ref.map(r => {
                                                        key = key+1;
                                                        return <a key={key} className={"btn btn-default"} href={r.link} target="_blank">{r.title}</a>
                                                    })
                                                }
                                            </Card>
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    </TabPane>
                </TabContent>
            </div>
        )
    }
}

export default StackTabs;