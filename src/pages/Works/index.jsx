import { Link } from 'react-router-dom'
import Projects from '../../data/Projects'

const Works = () => {
  return (
    <div>
      <h1>Au fil des années, nous avons pu accompagner les meilleurs.</h1>
        <ul>
      {Projects.map((projet, index) => {
        return (
          <li key={index}>
          <Link to={`/works/${projet.slug}`}> {projet.title}</Link>
          </li>
        )
      })}
        </ul>
      <p>Découvrez pas à pas comment nous avons été présents pour lancer vos marques préférées.</p>
    </div>
  )
}

export default Works;