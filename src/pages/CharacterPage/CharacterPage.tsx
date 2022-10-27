import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export const CharacterPage = () => {
  const { id } = useParams()

  useEffect(() => {
    console.log('now id is', id)
    //   get Character from api
  }, [id])

  return <h1>id: {id}</h1>
}
