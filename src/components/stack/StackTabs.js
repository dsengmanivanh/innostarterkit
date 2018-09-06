import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
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
            <div>
                <Nav tabs>
                    {
                        StackModel.NAV.map((data,index) => {
                            index = index+1;
                            return (
                                <NavLink key={data} className={classnames({ active: this.state.activeTab === index.toString() },"navlink")} onClick={() => { this.toggle(index.toString()); }}>
                                    {data}
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
                        </Row>
                        <Row>
                            {
                                whytools.map((data) => {
                                        key = key+1;
                                        return (
                                            <Col sm="4" key={key}>
                                                <Card key={key} body className={"card"} >
                                                    <CardTitle>Why {data.label} ?</CardTitle>
                                                    <CardText>{data.description}</CardText>
                                                    {
                                                        data.links.map(r => {
                                                            key = key+1;
                                                            return <a key={key} className={"btn btn-default"} href={r} target="_blank">link</a>
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
                            <Col sm="12">
                                <h4>Tab 1 Contents</h4>
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>
            </div>
        )
    }
}

export default StackTabs;