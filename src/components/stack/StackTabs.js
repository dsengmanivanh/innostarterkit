import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, CardHeader, CardBody, CardFooter, Row, Col } from 'reactstrap';
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
        if(language === "java"){
            tools = tools.filter(tool => tool.language.includes("java"));
        }else if(language ==="kotlin"){
            stacks = StackModel.KOTLIN_STACK;
            tools = tools.filter(tool => tool.language.includes("kotlin"));
        }else if(language ==="javascript"){
            stacks = StackModel.JAVASCRIPT_STACK;
            tools = tools.filter(tool => tool.language.includes("javascript"));
        }

        if(bdd ==="sql"){
            tools = tools.concat(StackModel.BDD.filter(type => type.bdd ==="sql"));
        }else if(bdd ==="nosql"){
            tools = tools.concat(StackModel.BDD.filter(type => type.bdd ==="nosql"));
        }

        stacks = stacks.filter(stack => stack.key.toLowerCase() === project.toLowerCase() && stack.bdd.toLowerCase() === bdd.toLowerCase());

        const whyStacks = StackModel.WHY_STACK.filter(why => {
            return stacks.some(stack => stack.tech.map(t => t.toLowerCase()).includes(why.label.toLowerCase()))
        });

        const whyTools = StackModel.WHY_STACK.filter(why => {
            return tools.some(data => {
                return data.label.toLowerCase() === why.label.toLowerCase()
            })
        });

        let push = StackModel.PUSH;
        let expose = StackModel.EXPOSE;

        const whyGit = StackModel.WHY_STACK.filter(w => w.label.toLowerCase() === "git")
            .concat(StackModel.TOOLBOX.filter(w => w.label.toLowerCase() === "git"))
            .concat(StackModel.CHEAT_SHEET.filter(w => w.tech.toLowerCase() === "git"));


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
                                                            return <a key={key} className={"btn btn-default"} href={r.link} target="_blank">{r.title}</a>
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
                            <Col sm="12">
                                <Card body className={"card"} >
                                    <CardTitle>Example</CardTitle>
                                    <img id="clone" height='50%' width='100%' src={"media/clone.gif"}/>
                                </Card>
                            </Col>
                            {
                                whyStacks.map((data) => {
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
                    <TabPane tabId="3">
                        <Row>
                            {
                                push.map((data) => {
                                    key = key+1;
                                    if(data.id === "2"){
                                        return (
                                            <Col sm="12">
                                                <Card body className={"card"} >
                                                    <CardTitle>Example</CardTitle>
                                                    <img id="clone" height='50%' width='100%' src={"media/push.gif"}/>
                                                </Card>
                                            </Col>
                                        )
                                    }
                                    return (
                                        <Col sm="12" key={key}>
                                            <Card key={key} body className={"card"} >
                                                <CardHeader>{data.label}</CardHeader>
                                                <CardBody>
                                                {
                                                    data.ref.map(r => {
                                                        key = key+1;
                                                        return <CardText key={key}>{r.title}. {r.cmd}</CardText>
                                                    })
                                                }
                                                </CardBody>
                                            </Card>
                                        </Col>
                                    )
                                })
                            }

                            {
                                whyGit.map((data) => {
                                        key = key+1;
                                        return (
                                            <Col sm="4" key={key}>
                                                <Card key={key} body className={"card"} >
                                                    <CardTitle className={"why"}>{data.label}</CardTitle>
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
                    <TabPane tabId="4">
                        <Row>
                            {
                                expose.map((data,index) => {
                                    key = key+1;
                                    return (
                                        <Col sm="12" key={key}>
                                            <Card key={key} body className={"card"} >
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
                            <Col sm="12">
                                <Card body className={"card"} >
                                    <CardTitle>Example Build and Expose</CardTitle>
                                    <img id="clone" height='50%' width='100%' src={"media/build.gif"}/>
                                </Card>
                            </Col>
                            <Col sm="12">
                                <Card body className={"card"} >
                                    <CardTitle>Example Update and Expose</CardTitle>
                                    <img id="clone" height='50%' width='100%' src={"media/update.gif"}/>
                                </Card>
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>
            </div>
        )
    }
}

export default StackTabs;