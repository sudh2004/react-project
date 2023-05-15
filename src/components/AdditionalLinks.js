import React from "react";
import { Link } from 'react-router-dom'
import '../App.css'

function AdditionalLinks() {
  return (
    <div>
        <h2>
          CLICK THE LINKS BELOW TO DOWNLOAD MORE HOLY VIBES TO YOUR BRAIN:{" "}
        </h2>
      <nav className="navigation">
       <Link to="/finding" className="nav">🙏🏼  Finding Faith</Link>
        <Link to="/good" className="nav"> 🐇  God Vibes Everlasting</Link>
       <Link to="/endorsement"className="nav">✅ Endorsements</Link>
        <Link to="/top"className="nav">✌️ Top V<sup>'</sup>s</Link>
      </nav>
    </div>
  );
}

export default AdditionalLinks;
