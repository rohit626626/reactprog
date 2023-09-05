import React, {useState} from 'react'

export default function TextForm(props) {
const handleUpClick=()=>{
let newText=text.toUpperCase();
setText(newText)
props.showAlert("Converted to Upper case","success")
}

const handleClearClick=()=>{
    let newText="";
    setText(newText)
    props.showAlert("Text has been Clear","success")
}

const handleLoClick=()=>{
    let newText=text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to Lower case","success")
}
const handleOnChange=(event)=>{
    setText(event.target.value)
}

const handleCopy=()=>{
    navigator.clipboard.writeText(text);
    props.showAlert("Copy to Clipbord","success")
}

const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra space remove","success")

}

const [text, setText] = useState("")

    return (
        <>
        <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#929292':'white', color:props.mode==='dark'?'white':'black'}} id="myBox" rows="4"></textarea>
            </div>
            <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy text</button>
            <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove spaces</button>
            <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
        </div>
        <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read </p>

            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter some text here"}</p>
        </div>
        </>
    )
}
