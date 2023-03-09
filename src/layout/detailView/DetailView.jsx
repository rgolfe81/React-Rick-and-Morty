import { CardDetail } from '../../components/cardDetail'
import { NavbarExample } from '../../components/navbar'
import { dataArray } from '../../data/data'


export const DetailView = () => {
  return (
    <>
      <NavbarExample/>
      <hr/>
      {/* {dataArray.find(personajeObjeto => <CardDetail key="1" characterProp={personajeObjeto}/>)} */}
      {/* {dataArray[1]} */}
    </>
  )
}

