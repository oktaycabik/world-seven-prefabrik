import React from 'react'
import MenuBanner from '../../components/MenuComponents/MenuBanner'
import MenuContentWohnContainer from '../../components/MenuComponents/MenuContentWohnContainer'
import MenuContact from '../../components/MenuComponents/MenuContact'
import Head from "next/head"
import MenuBannersData from "../../data/menu/menuBanner.json"
import MenuContentData from "../../data/menu/menuContent.json"
const Wohncontainer = () => {
  const {wohncontainer} = MenuBannersData
  const {wohncontainerContent} = MenuContentData
  return (
    <div>
           <Head>
        <title>World Seven Prefabrik | Yaşam Konteyner </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
     
      <MenuContentWohnContainer data={wohncontainerContent}></MenuContentWohnContainer>
    
    </div>
  )
}

export default Wohncontainer