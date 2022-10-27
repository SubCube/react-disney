import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useLazyCharacterQuery } from '../../store/disney.api'

export const CharacterPage = () => {
  const { id } = useParams()

  const [fetchCharacter, { isError, isSuccess, data: character }] = useLazyCharacterQuery()

  useEffect(() => {
    fetchCharacter(Number(id))
  }, [id])

  if (isError) return <p>Error</p>
  if (!isSuccess) return <p>Loading</p>

  return (
    <div>
      <p>{character?._id}</p>
      <p>{character?.films}</p>
      <p>{character?.imageUrl}</p>
      <p>{character?.name}</p>
      <p>{character?.parkAttractions}</p>
      <p>{character?.shortFilms}</p>
      <p>{character?.tvShows}</p>
      <p>{character?.url}</p>
      <p>{character?.videoGames}</p>
    </div>
  )
}
