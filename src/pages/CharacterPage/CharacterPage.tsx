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

  return (
    <div className="charPage">
      <img src={character?.imageUrl} alt={character?.name} className="charPage__img" />
      <div className="charPage__wrapper">
        {character?.name && <p className="charPage__wrapper__title">Name: {character?.name}</p>}
        {character?.films.length ? <ListView items={character?.films} className="films" title="Films" /> : null}
        {character?.tvShows.length ? <ListView items={character?.tvShows} className="shows" title="TV Shows" /> : null}
        {character?.videoGames.length ? (
          <ListView items={character?.videoGames} className="games" title="Games" />
        ) : null}
      </div>
    </div>
  )
}

const ListView: FC<CharacterPageProps> = ({ items, className, title }) => (
  <div>
    <p>{title}:</p>
    <ul className={`charPage__wrapper__${className}`}>
      {items.map((film, index) => (
        <li key={index}>{film}</li>
      ))}
    </ul>
  </div>
)
