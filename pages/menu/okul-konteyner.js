import React from 'react'
import MenuBanner from '../../components/MenuComponents/MenuBanner'
import MenuContentSchulcontainerContainer from '../../components/MenuComponents/MenuContentSchulcontainerContainer'
import MenuContact from '../../components/MenuComponents/MenuContact'
import Head from "next/head"
import MenuBannersData from "../../data/menu/menuBanner.json"
import MenuContentData from "../../data/menu/menuContent.json"
const Schulcontainer = () => {
    const {schulcontainer} = MenuBannersData
    const {schulcontainerContent} = MenuContentData
  return (
    <div>
         <Head>
        <title>World Seven Prefabrik | Okul Konteyner </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
    
      <MenuContentSchulcontainerContainer data={schulcontainerContent}></MenuContentSchulcontainerContainer>
  
    </div>
  )
}

export default Schulcontainer