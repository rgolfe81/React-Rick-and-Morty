import { Card1 } from '../../components/cards'
import { dataArray } from '../../data/data'


export const List = () => {
  return (
    <>
        {dataArray.map(personajeObjeto => <Card1 key={personajeObjeto.id} characterProp={personajeObjeto}/>)}
    </>
  )
}