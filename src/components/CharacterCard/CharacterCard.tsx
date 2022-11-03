import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useActions, useAppSelector } from '../../hooks/redux'
import { DisneyCharacter } from '../../models/disney'
import './character-card.scss'

export const CharacterCard = ({ character }: { character: DisneyCharacter }) => {
  const { favorites } = useAppSelector(state => state.favorites)
  const { addToFavorite, removeFromFavorite } = useActions()
  const [isFav, setIsFav] = useState(favorites.includes(character))

  function add() {
    addToFavorite(character)
    setIsFav(true)
  }

  function remove() {
    removeFromFavorite(character._id)
    setIsFav(false)
  }

  return (
    <>
      <Link className="character" to={`/character/${character._id}`}>
        <span className="character__name">{character.name}</span>
        <img src={character.imageUrl} alt={character.name} className="character__img" />
        <span className="character__url">{character.url}</span>
      </Link>
      {isFav && <button onClick={remove}>Delete</button>}
      {!isFav && <button onClick={add}>Add</button>}
    </>
  )
}
