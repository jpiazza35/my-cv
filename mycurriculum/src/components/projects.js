import React, { Component } from 'react';
import { Tabs, Tab,Grid, Cell, Card, CardTitle, CardActions, CardMenu, IconButton, Button, CardText } from 'react-mdl';


class Projects  extends Component {
    
    constructor(props){
        super(props);
        this.state = {activeTab: 0};       
     }
    
    toogleCategories() {
        if(this.state.activeTab === 0){
            return(
                <div className="projects-grid">
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #1</CardTitle>
                    <CardText>
                        Gauchito player is a app that allows you to create your own List of songs
                    </CardText>
                        <CardActions border>
                            <Button colored>GitLab</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                </Card>

                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #2</CardTitle>
                    <CardText>
                        This is my Personal CV
                    </CardText>
                        <CardActions border>
                            <Button colored>GitLab</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                </Card>
            
            
            </div>
            )}else if(this.state.activeTab === 1){
                return(
                    <div><h1>Tis is Linux</h1></div>
                )}else if(this.state.activeTab === 2){
                    return(<div><h1>this is Cloud</h1></div>
                        )}else if(this.state.activeTab === 3){
                            return(<div><h1>this is Automation</h1></div>
                           )}
                            }
    render() {
        return (
            <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
            <Tab>Front-End</Tab>
            <Tab>Linux</Tab>
            <Tab>Cloud</Tab>
            <Tab>Automation</Tab>
        </Tabs>


            <Grid>
                <Cell col={12}>
                <div className="content">{this.toogleCategories()}</div>
                </Cell>
            </Grid>
           
       
    </div>
        )
    }
}


export default Projects;