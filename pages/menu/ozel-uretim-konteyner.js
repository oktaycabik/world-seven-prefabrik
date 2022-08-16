import React from 'react'
import MenuBanner from '../../components/MenuComponents/MenuBanner'
import MenuContentSpecial from '../../components/MenuComponents/MenuContentSpecial'
import MenuContact from '../../components/MenuComponents/MenuContact'
import Head from "next/head"
import MenuBannersData from "../../data/menu/menuBanner.json"
import MenuContentData from "../../data/menu/menuContent.json"
const Specialcontainer = () => {
  const {specialcontainerContent} = MenuContentData
  const {special} = MenuBannersData
  return (
    <div>
                <Head>
        <title>World Seven Prefabrik | Özel Üretim Konteyner </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
     
      <MenuContentSpecial data={specialcontainerContent}></MenuContentSpecial>
     
    </div>
  )
}

export default Specialcontainer