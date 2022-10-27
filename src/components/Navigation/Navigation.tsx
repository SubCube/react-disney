import { Link } from 'react-router-dom'
import './navigation.scss'

export const Navigation = () => {
  return (
    <nav className="navigation">
      <Link to="/">Main</Link>

      <span>
        <Link to="/characters">Characters</Link>
        <Link to="/about">About</Link>
      </span>
    </nav>
  )
}
