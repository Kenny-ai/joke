import React, { useEffect, useState } from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import "./Body.css";
import axios from 'axios';

const Body = () => {
  const colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857'];

  const generateRand = () => {
    let rand = colors[(Math.random() * colors.length) | 0];
    return rand;
  }

  const [color, setColor] = useState(generateRand());

  const [jokes, setJokes] = useState("");

  const getJoke = () => {
    axios.get("https://icanhazdadjoke.com/",
      {
        headers: {
          "Accept": "application/json"
        }
      }
    ).then((response) => {
      // console.log(response);
      setJokes(response.data.joke)
    });
    setColor(generateRand());
    console.log(generateRand());
  };

  useEffect(() => {
    getJoke();
  }, []);

  const buttonStyles = {
    // transitionProperty: "backgroundColor",
    backgroundColor: color,
    // transition: "0.8s ease-in"
  }

  return (
    <div className="body"
      style={
        {
          backgroundColor: color,
          transition: "0.8s ease-in"
        }
      }
    >
      <div className="header">
        <h1>Random Jokes</h1>
      </div>

      <div className="body-container">
        <div
          className="quote-box well"
          style={{
            color: color,
            transition: "0.8s ease-in"
          }}
        >
          <p className='joke'>{jokes ? jokes : "Oops! No internet connection" /*"I've got an addiction to brake fluids...I can stop whenever I want"*/}</p>
          <div className="bottom">
            <div className="contact">
              <div className="icons">
                <GitHubIcon fontSize="large" />
              </div>
              <div className="icons">
                <LinkedInIcon fontSize="large" />
              </div>
              <div className="icons">
                <TwitterIcon fontSize="large" />
              </div>

            </div>
            <button className="get-joke btn-default"
              onClick={getJoke}
              style={buttonStyles}>
              New joke
            </button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Body;


