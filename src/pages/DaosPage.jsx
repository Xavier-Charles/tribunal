import React from 'react'
import DaosContainer from '../containers/DaosContainer'
import TribunalsContextProvider from '../context/TribunalsContext'

const DaosPage = ({type}) => {
  return (
    <TribunalsContextProvider>
      <DaosContainer type={type} />
    </TribunalsContextProvider>
  );
}

export default DaosPage