import React, { useState } from 'react';

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!", "success")
    }
    
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!", "success")
    }
    
    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Field has been cleared!", "success")
    }
    
    const handleCopyClick = () => {
        navigator.clipboard.writeText(text).then(() => {
            alert("Text copied to clipboard!");
        }).catch(err => {
            console.error("Failed to copy text: ", err);
        });
        props.showAlert("Copied to Clickboard!", "success")
    }
    
    const handleRemoveSpacesClick = () => {
        let newText = text.replace(/\s+/g, ' ').trim();
        setText(newText);
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    
    const [text, setText] = useState('');

    return (
        <>
            <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white',
                        color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="10"></textarea>
                </div>
                <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleCopyClick}>Copy to Clipboard</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleRemoveSpacesClick}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h1>Your text summary</h1>
                <p>{text.split(" ").filter(word => word.length > 0).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter(word => word.length > 0).length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter text to preview"}</p>
            </div>
        </>
    )
}

