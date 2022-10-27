import { CharacterCard } from '../../components/CharacterCard/CharacterCard'
import { useDisneyItemsQuery } from '../../store/disney.api'
import './characters-page.scss'

export const CharactersPage = () => {
  const { isError, isLoading, data: disneyServerResponse } = useDisneyItemsQuery()
  console.log('data', disneyServerResponse)

  if (isError) return <p>Error</p>
  if (isLoading) return <p>Loading...</p>

  return (
    <div className="characters">
      <h1>Characters Page</h1>
      <div className="characters__wrapper">
        {disneyServerResponse?.data.map(item => (
          <CharacterCard character={item} key={item._id} />
        ))}
      </div>
    </div>
  )
}
