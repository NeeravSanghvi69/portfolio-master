import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Hi Everyone, I am <span className="purple">Neerav Sanghvi </span>
            from <span className="purple"> Pune, India.</span>
            <br />
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp;I am a Computer Science major at Vishwakarma University
            
            <br />
            <br /><br></br>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
              Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <b><ImPointRight /> Playing Games</b>
            </li>
            <li className="about-activity">
              <b><ImPointRight /> Watching F1 Races</b>
            </li>
            <li className="about-activity">
              <b><ImPointRight /> Travelling and exploring other places</b>
            </li>
          </ul>
           <br></br>
          <p style={{ color: "rgb(155 126 172)" }}>
            "The best error message is the one that never shows up!"{" "}
          </p>
          <footer className="blockquote-footer">Thomas Fuchs</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
