import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { toPng } from "html-to-image"
import download from 'downloadjs';

export default function DraggableElement(props) {

    const [fontColor, setfontColor] = useState('black')
    const [fontSize, setFontSize] = useState(24)

    function setColor(color) {
        setfontColor(color)
    }
    function setSize(size) {
        if (size === "increase") {
            setFontSize(fontSize + 1)
        }
        if (size === "decrease") {
            setFontSize(fontSize - 1)
        }

    }

    function downloadImage() {
        toPng(downloadable)
            .then(dataURL => {
                download(dataURL, "meme.png")
            })
            .catch(() => console.log("Error"))
    }

    return (
        <>
            <div className='colors'>
                <span>Choose Color</span>
                <div onClick={() => { setColor("black") }} className='color color-1'></div>
                <div onClick={() => { setColor("white") }} className='color color-2'></div>
                <div onClick={() => { setColor("red") }} className='color color-3'></div>
                <div onClick={() => { setColor("yellow") }} className='color color-4'></div>
                <div onClick={() => { setColor("orange") }} className='color color-5'></div>
                <div onClick={() => { setColor("green") }} className='color color-6'></div>
                <div onClick={() => { setColor("blue") }} className='color color-7'></div>
            </div>
            <div className='fontSize'>
                <div>Font Size</div>
                <span style={{ cursor: "pointer" }} onClick={() => { setSize("increase") }}>+</span>
                <span style={{ cursor: "pointer" }} onClick={() => { setSize("decrease") }}>-</span>
            </div>
            <div id='downloadable' className="container">
                <img src={props.pic} style={{ marginBottom: "0px" }} width="100%" alt="" srcSet="" />
                <Draggable bounds="parent">
                    <div className="draggable-element" style={{ color: fontColor, fontSize: `${fontSize}px` }}>
                        {props.topText}
                    </div>
                </Draggable>
                <Draggable bounds="parent">
                    <div className="draggable-element" style={{ color: fontColor, fontSize: `${fontSize}px` }}>
                        {props.bottomText}
                    </div>
                </Draggable>
                <Draggable bounds="parent">
                    <div className="draggable-element" style={{ color: fontColor, fontSize: `${fontSize}px` }}>
                        {props.thirdText}
                    </div>
                </Draggable>
                <Draggable bounds="parent">
                    <div className="draggable-element" style={{ color: fontColor, fontSize: `${fontSize}px` }}>
                        {props.fourthText}
                    </div>
                </Draggable>
            </div>
            <div className='downloadBtnDiv'>
                <button className='downloadBtn' type="button" onClick={downloadImage}>Download Meme</button>
            </div>
        </>
    );
}



