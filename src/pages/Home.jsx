import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';



function Home() {
  const navigate = useNavigate();
  return (
    <div className="home">

      <div className="video-container">

        <video className="bg-video" autoPlay muted loop>
          <source src="/images/bgVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="overlay">
          <h1>Welcome to Travel Recommender</h1>
          <button onClick={() => navigate('/form')}>
            Get Started
          </button>
        </div>

      </div>

    </div>

  );
}

export default Home;

