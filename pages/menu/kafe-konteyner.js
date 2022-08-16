import React from 'react'
import MenuBanner from '../../components/MenuComponents/MenuBanner'
import MenuBannersData from "../../data/menu/menuBanner.json"
import MenuContentData from  "../../data/menu/menuContent.json"
import MenuContentCafeContaineir from '../../components/MenuComponents/MenuContentCafeContaineir'
import MenuContact from '../../components/MenuComponents/MenuContact'
import Head from "next/head"
const Cafecontainer = () => {
  const {cafecontainer} = MenuBannersData
  const {cafecontainerContent} = MenuContentData

  return (
    <div>
            <Head>
        <title>World Seven Prefabrik | Kafe Konteyner </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

   <MenuContentCafeContaineir data={cafecontainerContent}></MenuContentCafeContaineir>
  
    </div>
  )
}

export default Cafecontainer