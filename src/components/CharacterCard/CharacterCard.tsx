import { Link } from 'react-router-dom'
import { DisneyCharacter } from '../../models/disney'
import './character-card.scss'

export const CharacterCard = ({ character }: { character: DisneyCharacter }) => {
  return (
    <Link className="character" to={`/character/${character._id}`}>
      <span className="character__name">{character.name}</span>
      <img src={character.imageUrl} alt={character.name} className="character__img" />
      <span className="character__url">{character.url}</span>
    </Link>
  )
}
