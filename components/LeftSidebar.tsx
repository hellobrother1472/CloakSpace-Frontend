import React from 'react'
import NavButton from './NavButton'
import { navButtonType } from '@/types'
import Link from 'next/link'
import ThemeButton from './ThemeButton'

const navbar:navButtonType[] = [
    {path:"/", buttonName:"HOME"},
    {path:"/explore", buttonName:"EXPLORE"},
    {path:"/anonymous", buttonName:"ANONYMOUS"},
    {path:"/bookmarks", buttonName:"BOOKMARKS"},
]

const LeftSidebar = () => {
  return (
    <div className='flex flex-col h-screen w-[25%] pl-20 pt-8 fixed'>
      <h1 className='font-extrabold text-3xl'><Link href="/">CloakSpace</Link></h1>
      <nav className='flex flex-col space-y-10 mt-20 w-full'>
          {navbar.map((item)=>{
            return <NavButton key={item.path} buttonName={item.buttonName} path={item.path} /> 
          })}  
      </nav>
      <ThemeButton/>
    </div>
  )
}

export default LeftSidebar




