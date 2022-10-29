import { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { CharacterPageProps } from '../../models/pages'
import { useLazyCharacterQuery } from '../../store/disney.api'
import './character-page.scss'

export const CharacterPage = () => {
  const { id } = useParams()

  const [fetchCharacter, { isError, isSuccess, data: character }] = useLazyCharacterQuery()

  useEffect(() => {
    fetchCharacter(Number(id))
  }, [id])

  if (isError) return <p>Error</p>
  if (!isSuccess) return <p>Loading</p>

  const name = character?.name ? <p className="charPage__wrapper__title">Name: {character?.name}</p> : null

  const films = character?.films.length ? <ListView items={character?.films} className="films" title="Films" /> : null

  const shows = character?.tvShows.length ? (
    <ListView items={character?.tvShows} className="shows" title="TV Shows" />
  ) : null

  const games = character?.videoGames.length ? (
    <ListView items={character?.videoGames} className="games" title="Games" />
  ) : null

  return (
    <div className="charPage">
      <img src={character?.imageUrl} alt={character?.name} className="charPage__img" />
      <div className="charPage__wrapper">
        {name}
        {films}
        {shows}
        {games}
      </div>
    </div>
  )
}

const ListView: FC<CharacterPageProps> = ({ items, className, title }) => (
  <div className="charPage__wrapper__text">
    <p>{title}:</p>
    <ul className={`charPage__wrapper__text__${className}`}>
      {items.map((film, index) => (
        <li key={index}>{film}</li>
      ))}
    </ul>
  </div>
)
