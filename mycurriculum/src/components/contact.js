import React, { Component } from 'react';
import { Grid, Cell,List, ListItem,ListItemContent } from 'react-mdl';
import avatar from './avatar.jpg'

class Contact  extends Component {
    render (){
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                       <h2>José Ignacio Piazza</h2>
                       <img
                         className="myimage-resume"
                         src={avatar}
                         alt="avatar"
                         style={{height: '200px'}}
                         />
                         <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>
                         Experience in software engineering principles,  
                         at automation and orchestration, specifically around server deployment and  Configuration/customization. 
                         </p>
                         
                        </Cell>
               <Cell col={6}>
                     <h2>Contact Me </h2>
                     <hr/>
                 <div className="contac-list">
                     <List>
                        <ListItem>
                            <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                               <i className="fa fa-phone-square" aria-hidden="true"/>
                                +54-9-351-7194240 
                            </ListItemContent>
                        </ListItem>

                        <ListItem>
                            <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                               <i className="fa fa-envelope" aria-hidden="true"/>
                               piazzajignacio@gmail.com
                            </ListItemContent>
                        </ListItem>

                        <ListItem>
                            <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                               <i className="fa fa-skype" aria-hidden="true"/>
                               felipao09
                            </ListItemContent>
                        </ListItem>
                        
                    </List>
                 </div>
               </Cell>
              </Grid>
            </div>
            
        )
    }
}

export default Contact;