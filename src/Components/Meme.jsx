import React, { useState } from 'react'
import memeData from './MemeData'
import DraggableElement from './DraggableElement'

export default function Meme() {

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        thirdText: "",
        fourthText: "",
        url: ""
    })

    // function handleClick() {
    //     let memesArray = memeData.data.memes
    //     let randomNumber = Math.floor(Math.random() * memesArray.length)
    //     let url = memesArray[randomNumber].url
    //     setMeme(prevMeme => {
    //         return ({ ...prevMeme, url: `${url}` })
    //     })
    // }

    function handleChange(e) {
        // const { name, value } = e.target
        setMeme((prev) => {
            return ({
                ...prev, [e.target.name]: e.target.value
            })
        })
    }

    let memeArray = memeData.data.memes
    let allMemeImages = memeArray.map((value) => {
        return (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <img style={{ margin: "2px" }} width="125px" height="150px" src={value.url} alt="" key={value.id} />
                <span onClick={() => { useTemplateClick(value.id) }} style={{ cursor: "pointer", fontSize: '10px', backgroundColor: "purple", color: "white", fontFamily: 'Inter', padding: "5px 10px", borderRadius: "5px" }} >Use this template</span>
            </div>

        )
    })

    const [newUrl, setNewUrl] = useState("https://i.imgflip.com/1g8my4.jpg")

    function useTemplateClick(id) {
        for (let i = 0; i < memeArray.length; i++) {
            if (memeArray[i].id == id) {
                setNewUrl(memeArray[i].url)
            }
        }
    }

    return (
        <div>
            <h2 className='selectTemplate'>Select Template</h2>
            <div className='imageList'>
                {allMemeImages}
            </div>
            <div action="" className='form'>
                <div className="form-1">
                    <input value={meme.topText} name='topText' onChange={handleChange} type="text" placeholder='First Text' className='form-input' />
                    <input value={meme.bottomText} name='bottomText' onChange={handleChange} type="text" placeholder='Second Text' className='form-input' />
                    <input value={meme.thirdText} name='thirdText' onChange={handleChange} type="text" placeholder='Third Text' className='form-input' />
                    <input value={meme.fourthText} name='fourthText' onChange={handleChange} type="text" placeholder='Fourth Text' className='form-input' />
                </div>
                {/* <button className='form-button' onClick={handleClick}>Get a new meme image  🖼</button> */}
            </div>
            <div className='imgDiv'>
                {/* <DraggableElement pic={meme.url} topText={meme.topText} bottomText={meme.bottomText} /> */}
                <DraggableElement pic={newUrl} topText={meme.topText} bottomText={meme.bottomText} thirdText={meme.thirdText} fourthText={meme.fourthText} />
            </div>

        </div>
    )
}
