import React from 'react';
import './About.css';
import {Link} from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import avatar5 from '../../Images/avatar5.png';
import githubL from "../img/github.svg"
import linkedinL from "../img/linkedin.svg"
import instagramL from "../img/instagram.svg"
import dhruv from "../img/dhruv.jpg"
import yashkumar from "../img/yashkumar.jpg"
import sidd from "../img/siddhant.jpg"

function About() {
  return (
    <div ClassName='container'>
      <div className='container2'>
      <div className="phone d-flex justify-content-evenly">
        <ContactCard col-md-4 
          Img={avatar5} 
          Title='Dr. Kavita Bathe'  />
        <div ClassName='contact-card'>
          <Card style={{ width: '20rem', display: 'inline-block', flexDirection: 'column' }}>
            <Card.Img ClassName='image' variant="top" height={200} src={dhruv} style={{ width: '20rem',padding: "0.25rem"}}/>
            <Card.Body>
              <hr></hr>
              <Card.Title ClassName='title'>Dhruv Chheda</Card.Title>
              
              <div className='d-div'>
                <Link className="button" to="https://github.com/chhedadhruv" target="_blank"><img src={githubL} className="icon"></img></Link>
                <Link className="button" to="https://www.linkedin.com/in/dhruv-chheda-52637522a" target="_blank"><img src={linkedinL} className="icon"></img></Link>
                <Link className="button" to="https://instagram.com/chheda.dhruv3?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D" target="_blank"><img src={instagramL} className="icon"></img></Link>
              </div>
              <strong>Mail</strong>:chhedadhruv1234@gmail.com
            </Card.Body>
          </Card>
        </div>
        <div ClassName='contact-card'>
          <Card style={{ width: '20rem',  display: 'inline-block', flexDirection: 'column' }}>
            <Card.Img ClassName='image' variant="top" height={200} src={yashkumar} style={{ width: '20rem',padding: "0.25rem"}}/>
            <Card.Body>
              <hr></hr>
              <Card.Title ClassName='title'>Yashkumar Dubey</Card.Title>
         
              <div className='d-div'>
                <Link className="button" to="https://github.com/YashAPro1" target="_blank"><img src={githubL} className="icon"></img></Link>
                <Link className="button" to="https://www.linkedin.com/in/yashkumar-dubey-716933222" target="_blank"><img src={linkedinL} className="icon"></img></Link>
                <Link className="button" to="https://www.instagram.com/dubeyyash758/" target="_blank"><img src={instagramL} className="icon"></img></Link>
              </div>
              <strong>Mail</strong>:yashkumar.d@somaiya.edu
            </Card.Body>
          </Card>
        </div>
        <div ClassName='contact-card'>
          <Card style={{ width: '20rem',  display: 'inline-block', flexDirection: 'column' }}>
            <Card.Img ClassName='image' variant="top" height={200} src={sidd} style={{ width: '20rem',padding: "0.25rem"}} />
            <Card.Body>
              <hr></hr>
              <Card.Title ClassName='title'>Siddhant Shah</Card.Title>
             
              <div className='d-div'>
                <Link className="button" to="https://github.com/SiddhanthShah100" target="_blank"><img src={githubL} className="icon"></img></Link>
                <Link className="button" to="https://www.linkedin.com/in/siddhanth-shah-a06a15252" target="_blank"><img src={linkedinL} className="icon"></img></Link>
                <Link className="button" to="#" target="_blank"><img src={instagramL} className="icon"></img></Link>
              </div>
              <strong>Mail</strong>:Siddhanth.shah@somaiya.edu
            </Card.Body>
          </Card>
        </div>
        
      </div>
      </div>
    </div>
  )
}

export default About;

function ContactCard(props) {
  return (
    <div ClassName='contact-card'>
      <Card style={{ width: '20rem', display: 'inline-block', flexDirection: 'column' }}>
        <Card.Img ClassName='image' variant="top" height={200} src={props.Img} style={{ width: '20rem',padding: "0.25rem"}}/>
        <Card.Body>
          <hr></hr>
          <Card.Title ClassName='title'>{props.Title}</Card.Title>
          <Card.Text ClassName='text'>{props.Text}</Card.Text>
          <div className='d-div'>
            <Link className="button" to="www.google.com" target="_blank"><img src={githubL} className="icon"></img></Link>
            
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

