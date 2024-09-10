import React, { useState } from 'react';
import logotenniscourt from './assets/images/tenniscourt.jpg';
import logotenniscourt2 from './assets/images/tenniscourt2.jpg';
import logotenniscourt3 from './assets/images/tenniscourt3.jpg';
import SimpleImageSlider from "react-simple-image-slider";
import './App.css';

const images = [
  { url: logotenniscourt },
  { url: logotenniscourt2 },
  { url: logotenniscourt3 }
];
interface Player {
  id: number;
  name: string;
}

const App: React.FC = () => {
  const [players] = useState<Player[]>([
    { id: 1, name: 'Roger Federer' },
    { id: 2, name: 'Serena Williams' },
    { id: 3, name: 'Rafael Nadal' },
  ]);
  const [showPlayers, setShowPlayers] = useState(false);

  const handleViewPlayers = () => {
    setShowPlayers(!showPlayers);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Charlotte Tennis League</h1>

      <div className="App-div">
            <SimpleImageSlider
                width={400}
                height={400}
                images={images}
                showBullets={true}
                showNavs={true}
                autoPlay={true}          // Enable auto play
                autoPlayDelay={3.0}      // Set delay time in seconds
            />
      </div>

      <p style={styles.paragraph}>Welcome to the Charlotte Tennis League app!</p>
      <p>Participate in our league by registering below.</p>
      <a href="/register" style={styles.link}>
        Register Here
      </a>
      <button onClick={handleViewPlayers} style={styles.button}>
        {showPlayers ? 'Hide Players' : 'View Players'}
      </button>
      {showPlayers && (
        <ul style={styles.list}>
          {players.map(player => (
            <li key={player.id} style={styles.listItem}>{player.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    maxWidth: '600px',
    margin: '0 auto',
  },
  header: {
    fontSize: '2em',
    textAlign: 'center' as 'center',
  },
  paragraph: {
    fontSize: '1em',
    textAlign: 'center' as 'center',
  },
  link: {
    display: 'block',
    margin: '20px 0',
    color: 'blue',
    textAlign: 'center' as 'center',
    textDecoration: 'none',
  },
  button: {
    padding: '10px 20px',
    cursor: 'pointer',
    display: 'block',
    margin: '0 auto',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
  },
  list: {
    marginTop: '20px',
    padding: '0',
    listStyleType: 'none',
  },
  listItem: {
    padding: '10px',
    borderBottom: '1px solid #ccc',
    textAlign: 'center' as 'center',
  },
  '@media (max-width: 600px)': {
    container: {
      padding: '10px',
    },
    header: {
      fontSize: '1.5em',
    },
    paragraph: {
      fontSize: '0.9em',
    },
    button: {
      width: '100%',
      padding: '15px',
    },
    listItem: {
      padding: '15px',
    },
  },
};

export default App;
