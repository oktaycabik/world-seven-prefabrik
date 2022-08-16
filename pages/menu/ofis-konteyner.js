import React from 'react'

import MenuContentBuroContainer from "../../components/MenuComponents/MenuContentBuroContainer"

import MenuContentData from  "../../data/menu/menuContent.json"
import MenuContact from '../../components/MenuComponents/MenuContact'
import Head from "next/head"
const Burocontainer = () => {

  const {burocontainerContent} = MenuContentData 
  
  return (
    <div>
         <Head>
        <title>World Seven Prefabrik | Ofis Konteyner </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
       <MenuContentBuroContainer data={burocontainerContent}></MenuContentBuroContainer> 
       
    </div>
  )
}

export default Burocontainer