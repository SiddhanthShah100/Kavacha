import React from 'react';
import './About.css';
import {Link} from "react-router-dom";
import Card from 'react-bootstrap/Card';
import githubL from "../img/github.svg";
import linkedinL from "../img/linkedin.svg";
import instagramL from "../img/instagram.svg";
import dhruv from "../img/dhruv.jpg";
import sidd from "../img/siddhant.jpg";
import yashkumar from "../img/yashkumar.jpg";
import maam from "../img/DR Kavita Maam.jpg";
import mail from "../img/mail.png";


function About() {
  return (
    <div className='container'>
      <div className='container2'>
      <div className="phone d-flex justify-content-evenly">
      <div className='cc'>
          <Card style={{  display: 'flex', flexDirection: 'column' }}>
            <Card.Img className='image' alt='/' variant="top" height={200} src={maam} style={{ width: 'fit-content',padding: "0.25rem",alignItems:"ceter"}}/>
            <Card.Body>
              <hr></hr>
              <Card.Title className='title'>Dr. Kavita Bathe</Card.Title>
              
              <div className='d-div'>
                <Link className="button" to="/" target="_blank"><img src={githubL} className="icon" alt='/'></img></Link>
                <Link className="button" to="/" target="_blank"><img src={linkedinL} className="icon" alt='/'></img></Link>
                <Link className="button" to="/" target="_blank"><img src={instagramL} className="icon" alt='/'></img></Link>
                <a className="button" href="mailto:kavitag@somaiya.edu" target="_blank"><img src={mail} className="icon" alt='/'></img></a>
                {/* <a href="https://kavitag.@somaiya.edu/" target="_blank" class="button">
                    <img src={gmail} class="icon" alt="Gmail Icon"/>
                  </a> */}
              </div>
              {/* <strong>Mail</strong>:kavitag.@somaiya.edu */}
            </Card.Body>
          </Card>
        </div>
        <div className='cc'>
          <Card style={{  display: 'flex', flexDirection: 'column' }}>
            <Card.Img className='image' alt='/' variant="top" height={200} src={dhruv} style={{ width:'fit-content',padding: "0.25rem",alignItems:"ceter"}}/>
            <Card.Body>
              <hr></hr>
              <Card.Title className='title'>Dhruv Chheda</Card.Title>
              
              <div className='d-div'>
                <Link className="button" to="https://github.com/chhedadhruv" target="_blank"><img src={githubL} alt='/' className="icon"></img></Link>
                <Link className="button" to="https://www.linkedin.com/in/dhruv-chheda-52637522a" target="_blank"><img src={linkedinL} alt='/' className="icon"></img></Link>
                <Link className="button" to="https://instagram.com/chheda.dhruv3?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D" target="_blank"><img src={instagramL} alt='/' className="icon"></img></Link>
                <a className="button" href="mailto:chhedadhruv1234@gmail.com" target="_blank"><img src={mail} alt='/' className="icon"></img></a>
              </div>
            </Card.Body>
          </Card>
        </div>

        <div className='cc'>
          <Card style={{   display: 'flex', flexDirection: 'column' }}>
            <Card.Img className='image' alt='/' variant="top" height={200} src={sidd} style={{ width: 'fit-content',padding: "0.25rem"}} />
            <Card.Body>
              <hr></hr>
              <Card.Title className='title'>Siddhanth Shah</Card.Title>
             
              <div className='d-div'>
                <Link className="button" to="https://github.com/SiddhanthShah100" target="_blank"><img src={githubL} alt='/' className="icon"></img></Link>
                <Link className="button" to="https://www.linkedin.com/in/siddhanth-shah-a06a15252" target="_blank"><img src={linkedinL} alt='/' className="icon"></img></Link>
                <Link className="button" to="#" target="_blank"><img src={instagramL} alt='/' className="icon"></img></Link>
                <a className="button" href="mailto:siddhanth.shah@somaiya.edu" target="_blank"><img src={mail} alt='/' className="icon"></img></a>
              </div>
            
            </Card.Body>
          </Card>
        </div>
        <div className='cc'>
          <Card style={{   display: 'flex', flexDirection: 'column' }}>
            <Card.Img className='image' alt='/' variant="top" height={200} src={yashkumar} style={{ width:'fit-content',padding: "0.25rem"}}/>
            <Card.Body>
              <hr></hr>
              <Card.Title className='title'>Yashkumar Dubey</Card.Title>
         
              <div className='d-div'>
                <Link className="button" to="https://github.com/YashAPro1" target="_blank"><img src={githubL} alt='/' className="icon"></img></Link>
                <Link className="button" to="https://www.linkedin.com/in/yashkumar-dubey-716933222" target="_blank"><img src={linkedinL} alt='/' className="icon"></img></Link>
                <Link className="button" to="https://www.instagram.com/dubeyyash758/" target="_blank"><img src={instagramL} alt='/' className="icon"></img></Link>
                <a className="button" href="mailto:yashkumar.d@somaiya.edu" target="_blank"><img src={mail} alt='/' className="icon"></img></a>
              </div>
             
            </Card.Body>
          </Card>
        </div>
        <div className='cc'>
          <Card style={{   display: 'flex', flexDirection: 'column' }}>
            <Card.Img className='image' alt='/' variant="top" height={200}  style={{ width:'fit-content',padding: "0.25rem"}}/>
            <Card.Body>
              <hr></hr>
              <Card.Title className='title'>Soham Pingale</Card.Title>
         
              <div className='d-div'>
                <Link className="button" to="/" target="_blank"><img src={githubL} alt='/' className="icon"></img></Link>
                <Link className="button" to="/" target="_blank"><img src={linkedinL} alt='/' className="icon"></img></Link>
                <Link className="button" to="/" target="_blank"><img src={instagramL} alt='/' className="icon"></img></Link>
                <a className="button" href="/" target="_blank"><img src={mail} alt='/' className="icon"></img></a>
              </div>
             
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
    <div className='contact-card'>
      <Card style={{ width: '20rem', display: 'inline-block', flexDirection: 'column' }}>
        <Card.Img className='image' alt='/' variant="top" height={200} src={props.Img} style={{ width: '20rem',padding: "0.25rem"}}/>
        <Card.Body>
          <hr></hr>
          <Card.Title className='title'>{props.Title}</Card.Title>
          <Card.Text className='text'>{props.Text}</Card.Text>
          <div className='d-div'>
            <Link className="button" to="www.google.com" target="_blank"><img src={githubL} alt='/' className="icon"></img></Link>
            
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

