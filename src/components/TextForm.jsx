import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("Input Your Text");
    // text-variable
    const handleOnChange = (event) =>{
        // console.log("On Change");
        setText(event.target.value);
    }
    const handleUpChange = () =>{
        // console.log("Enter Your Text");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("UpperCase Text", "success");
    }
    const handleLoChange = () =>{
        // consol.log("Btn Click");
        var newText = text.toLowerCase();
        setText(newText);
        props.showAlert("LowerCase Text", "success");
    }
    const handleSpeak = () =>{
        var newText = new SpeechSynthesisUtterance();
        newText.text=text;
        window.speechSynthesis.speak(newText);

    }
    const handleClear = () =>{
        setText(''); 
        props.showAlert("Text Field Empty", "success");   
    }
    const handleCopy = () => {
        // let newText = document.getElementById('exampleFormControlTextarea1');
        // newText.select();
        navigator.clipboard.writeText(text);
        props.showAlert("Copy Text", "success");
    }
    const handleRemoveSpace = () =>{
        let newText = text.split(/[ ] + /);
        setText(newText.join(" "));
        props.showAlert("Remove Extra space", "success")

    }
  return (
    <>
    <div>
    <div className='container my-4'>
      <h1>{props.heading}</h1>
        <textarea className={`form-control bg-${props.mode === 'light' ? 'light' : 'dark'} text-${props.mode === 'light' ? 'dark' : 'light'}`} id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange}></textarea>
        <button className='my-4 mx-2 btn btn-outline-secondary' onClick={handleUpChange} disabled={text.length === 0}>Upper Case Letter</button>
        <button className='my-4 mx-2 btn btn-outline-secondary' onClick={handleLoChange} disabled={text.length === 0}>Lower Case Letter</button>
        <button className='my-4 mx-2 btn btn-outline-secondary' onClick={handleSpeak} disabled={text.length === 0}>Speak</button>
        <button className='my-4 mx-2 btn btn-outline-secondary' onClick={handleClear} disabled={text.length === 0}>Clear</button>
        <button className='my-4 mx-2 btn btn-outline-secondary' onClick={handleCopy} disabled={text.length === 0}>Copy Text</button>
        <button className='my-4 mx-2 btn btn-outline-secondary' onClick={handleRemoveSpace} disabled={text.length === 0}>Remove Extra Space</button>
    </div>
    <div className='container'>
        <h2>Text Summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} Words</p>
        <p>{text.length} Characters</p>
        <h5>{0.005*text.split(" ").filter((element)=>{return element.length !== 0}).length} Reading Time</h5>
        <h3>Priview</h3>
        <p>{text.length>0 ? text : "Nothing to Preview !"}</p>
    </div>
    </div>
    </>
  )
}