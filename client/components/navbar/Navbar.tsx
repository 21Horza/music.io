import { useRouter } from 'next/router'
import React from 'react'
import cl from './Navbar.module.scss'

const menuItems = [
    {text: 'Main', href: '/'},
    {text: 'Playlist', href: '/tracks'},
    {text: 'Albums', href: '/albums'}
]

const Navbar = () => {
    const router = useRouter()

  return (
        <div className={cl.navContainer}>
            {menuItems.map(({text, href}) => (
                <div className={cl.link} 
                    onClick={() => router.push(href)} key={href}>
                    {text}
                </div>
            ))}
        </div>
  )
}

export default Navbar