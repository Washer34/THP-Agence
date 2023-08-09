import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Projects from '../../data/Projects'
import Card from 'react-bootstrap/Card';

const Works = () => {
  const [format, setFormat] = useState(true)

  const toggleFormat = () => {
    setFormat(!format)
  }
  return (
    <div>
      <button onClick={toggleFormat}>LIST</button>
      <h1>Au fil des années, nous avons pu accompagner les meilleurs.</h1>
      <ul>
        {format ? (
          Projects.map((projet, index) => (
            <li key={index}>
              <Link to={`/works/${projet.slug}`}>{projet.title}</Link>
            </li>
          ))
        ) : (
          Projects.map((projet, index) => (
            <li key={index}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>{projet.title}</Card.Title>
                  <Card.Text>
                    <Link to={`/works/${projet.slug}`}>{projet.title}</Link>
                  </Card.Text>
                </Card.Body>
              </Card>
            </li>
          ))
        )}
      </ul>
      <p>Découvrez pas à pas comment nous avons été présents pour lancer vos marques préférées.</p>
    </div>
  );
};

export default Works;