import { Card1 } from '../../components/cards'
import { NavbarExample } from '../../components/navbar'
import { dataArray } from '../../data/data'


export const List = () => {
  return (
    <>
        <NavbarExample/>
        <hr/>
        {dataArray.map(personajeObjeto => <Card1 key={personajeObjeto.id} characterProp={personajeObjeto}/>)}
    </>
  )
}