import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import avatar from './avatar.jpg';



class Landingpage  extends Component {
    render (){
        return (
            <div style={{width: '100%', margin:'auto' }}>
             <Grid className="landing-grid">
                 <Cell col={12}>
                     <img src={avatar}
                        alt="avatar"
                        className="avatar-img"
                         />

                         <div className="banner-text">
                             <h1>Devops/Front-End Developer</h1>
                             <hr/>
                             <p>HTML/CSS |Linux|AIX|VMWARE|AZURE|GCP|AWS|Ansible|ReactJS|NodeJS|Javascript</p>
                             <div className="social-links">

                                   
                                 <a href="www.linkedin.com/in/joseIpiazza" rel="noopener noreferrer" target="_blank">
                                     <i class="fa fa-linkedin" aria-hidden="true"></i>
                                 </a>

                                  
                                 <a href="https://github.com/jpiazza35" rel="noopener noreferrer" target="_blank">
                                     <i class="fa fa-github" aria-hidden="true"></i>
                                 </a>

                                  
                                 <a href="https://gitlab.com/piazzajignacio" rel="noopener noreferrer" target="_blank">
                                     <i class="fa fa-gitlab" aria-hidden="true"></i>
                                 </a>

                                 

                             </div>
                          </div>                
                 </Cell>
             </Grid>
            </div>
        )
    }
}

export default Landingpage;