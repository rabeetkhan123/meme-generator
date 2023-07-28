import React from 'react'
import logo from '../images/Troll Face.png'

export default function Header() {
    return (
        <nav className='nav'>
            <div className='nav-1'>
                <img src={logo} width="50px" alt="" />
                <span className='memeGenerator'>Meme Generator</span>
            </div>
            <div className='reactCourse-Project4'>
                Meme it up, quick!
            </div>
        </nav>
    )
}
