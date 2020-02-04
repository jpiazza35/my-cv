import React, { Component,Fragment} from 'react';
import { Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import hp from './hp.png';
import xerox from './xerox.png';
import ibm from './ibm.jpg';
import atos from './atos.jpg'
import avatar from './avatar.jpg'





class Resume extends Component {
    render (){
        return(
            <div>
                <Grid>
                 <Cell col={4}>
                    <div style={{textAlign: 'center'}}>
                        <img
                            className="myimage-resume"
                            src={avatar}
                            alt="avatar"
                            style={{height: '200px'}}
                         />
                    </div>
                    <h2 style={{paddingTop: '3em'}}>José Ignacio Piazza</h2>
                    <h4 style={{color: 'grey'}}>Devop</h4>
                    <hr style={{borderTop: '3px solid #033fb2', width: '50%'}}/>
                    <p>Experience in software engineering principles, at automation and orchestration,specifically around server deployment and  Configuration/customization. 
                       10 years of experience in UNIX field specializing in AIX, Linux RHEL and Windows operating, I am comfortable working autonomously where required, though endeavour to contribute as much as possible in a team environment and actively dedicate time for technical mentoring and collaboration activities amongst my peers. Beyond my immediate team.
                       I liaise closely with project management staff and also provide technical representation to the end customer .I strive when given an opportunity to learn new technologies.
                    </p>
                    <hr style={{borderTop: '3px solid #033fb2', width: '50%' }}/>
                    <h5>Address</h5>
                    <p>Blas Pascal 5348, Córdoba City, Argentina</p>
                    <h5>Phone</h5>
                    <p>+5493517194240</p>
                    <h5>Email</h5>
                    <p>piazzajignacio@gmail.com</p>
                    <h5>Linkedin profile</h5>
                    <p>https://www.linkedin.com/in/joseipiazza</p>
                    <hr style={{borderTop: '3px solid #033fb2', width: '50%' }}/>
                 </Cell>

                  <Cell className="resume-right-column" col={8}>
                      <h2>Education</h2>

                      <Education
                       startYear={2019}
                       endYear={"Current"}
                       schoolName={"Courses Currently Taken"}
                       schoolDescription={
                            <ul>
                                <li>Front-End Developer Course Given by Codecademy (ReactJs, Javascript, HTML5, CSS)</li>
                                <li>EX407 Red Hat Certified specialist in Ansible Automation</li>
                                                                                        
                            </ul>}
                            />
                      <Education
                       startYear={2015}
                       endYear={2019}
                       schoolName={"Cloud Courses"}
                       schoolDescription={
                            <ul>
                                <li>GCP Essential Cloud Infrastructure: Core Services</li>
                                <li>GCP Elastic Cloud Infrastructure: Scaling and Automation</li>
                                <li>GCP Elastic Cloud Infrastructure: Containers and Services</li>
                                <li>GCP Reliable Cloud Infrastructure: Design and Process</li>
                                <li>AZ-100 Microsoft Azure Infrastructure and Deployment</li>
                            
                            </ul>}
                       />
                      
                      <Education
                       startYear={2007}
                       endYear={2011}
                       schoolName={"In-Company Training Course (IBM)"}
                       schoolDescription={
                            <ul>
                                <li>Q1316 AIX 5L Administration II,Problems Determination</li>
                                <li>AN31 Power Systems for AIX</li>
                                <li>QV140 HACMP Problems Determination</li>
                            </ul>}
                       />
                      <Education
                       startYear={2000}
                       endYear={2006}
                       schoolName={"National University of Villa Maria City"}
                       schoolDescription={"Graduated in Systems"}
                       />
                        <Education
                       startYear={2000}
                       endYear={2002}
                       schoolName={"National University of Córdoba "}
                       schoolDescription={"Graduated in Systems"}
                       />
                     <hr style={{borderTop: '3px solid #e22947'}}/>
                        <h2>Experience</h2>
                       
                        <img className="imagen-company" src={atos}  alt="atos"/>
                        <Experience 
                        startYear={2011}
                        endYear={2015}
                        jobName={"ATOS"}
                        jobDescription={
                        <Fragment>
                        <p>"Infrastructure Management Senior Principal at Atos"</p>
                        <ul>
                                <li>Management of virtual environment shaped by VMware and redhat Linux servers for US company</li>
                                <li>Knowledge in Javascript , CSS , HTML, and nodeJs</li>
                                <li>AWS(EBS, EC2,S3)</li>
                                <li>Customize and implement the IaaS Orchestration Tool like Ansible to automate apps and infrastructure quickly</li>
                                <li>Deployment a DR solution for customer which involve AZURE and VMWARE</li>
                                <li>Insights Red Hat</li>

                        </ul>
                        </Fragment>}
                        />

                   <img className="imagen-company" src={xerox}  alt="xerox"/> 

                        <Experience 
                        startYear={2011}
                        endYear={2015}
                        jobName={"XEROX"}
                        jobDescription={
                        <Fragment>
                        <p>"Infrastructure Management Senior Analyst at XEROX"</p>
                        <ul>
                                <li>VMWARE vSphere 5  fundamental.</li>
                                <li>Linux RHEL v5/6/7 installation, upgrade and administration
                                    Linux RHEL v7 performance tuning</li>
                                <li>Working in transition period of new customer, building and configuration servers from scratch. 
                                    Focal Point of clients like meadwestvaco, DCPM and Calpine.</li>
                                <li>High Availability Clusters PowerHA/HACMP: Installation, Configuration, Management, Troubleshooting, Cluster Tests Exercises, Monitoring and Health Checking</li>
                                <li>Chef, Docker Admisnitration.</li>
                                <li>Ansible Creation of playbooks</li>

                        </ul>
                        </Fragment>}
                        />
                        <img className="imagen-company" src={ibm}  alt="xerox"/>

                        <Experience 
                        startYear={2008}
                        endYear={2011}
                        jobName={"IBM"}
                        jobDescription={
                        <Fragment>
                        <p>"Unix System Administrator At IBM Cordoba Argentina"</p>
                        <ul>
                            <li>Administration of unix systems for Novartis customer worldwide.Big environment of 1200+ servers.</li>
                            <li>Incident and change management.Logical Volume Manager (LVM) management, administration and configuration.
                                Hardware Management Console (HMC) administration and configuration.
                                Network Installation Manager (NIM) configuration.
                                Virtual I/O servers and Lpar management, installation and configuration.
                            </li>
                            <li>Linux migration project from v4 to v5 – Major project with 300 Linux servers involved.</li>
                        </ul>
                        </Fragment>}
                        />
                    
                     <img className="imagen-company" src={hp}  alt="hp"/> 

                        <Experience
                        startYear={2007}
                        endYear={2008}                                               
                        jobName={"EDS-HP"}

                        jobDescription={
                        <Fragment>
                            <p>"Networking Security Services"</p>
                        <ul>
                            <li>In charge of administrate ISA servers 2004 version for the LAN Company.
                                Access management of users accounts , on platform Windows 2003 and Linux/Unix.
                                Administration of files shares.</li>
                            <li>Create/Modify and control access to groups on Systems (Linux /Unix/Windows)
Problem solving related to Security in both Linux and Windows</li>
                            
                        </ul>
                        </Fragment>}
                                />
                  </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;