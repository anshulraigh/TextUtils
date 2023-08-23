import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Upper Case!", "success");
    }

    const handleDownClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lower Case!", "success");
    }

    const handleCapitilizedClick = () => {
        let newText = text
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');
        setText(newText);
        props.showAlert("Capitalized the Text!", "success");
    }

    const handleCopyClick = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard!", "success");
    }

    const hadleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText)
        props.showAlert("Text is cleared now.", "success");
    }


    const handleDownloadClick = () => {
        const element = document.createElement('a');
        const file = new Blob([text], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = 'downloaded_text.txt';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState('');
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1 className='md-4'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} placeholder='Paste your text here.' style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : '#F8E1F4', color: props.mode === 'dark' ? 'white' : 'black'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="d-flex flex-wrap justify-content-center" >
                                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>UPPER CASE</button>
                                <button disabled={text.length===0} className="btn btn-warning mx-1 my-1" onClick={handleDownClick}>lower case</button>
                                <button disabled={text.length===0} className="btn btn-success mx-1 my-1" onClick={handleCapitilizedClick}>Capitilize Case</button>
                                <button disabled={text.length===0} className="btn btn-info mx-1 my-1" onClick={handleCopyClick}>Copy Text</button>
                                <button disabled={text.length===0} className="btn btn-dark mx-1 my-1" onClick={hadleExtraSpaces}>Remove Extra Spaces</button>
                                <button disabled={text.length===0} className="btn btn-danger mx-1 my-1" onClick={handleClearClick}>Clear All</button>
                                <button disabled={text.length===0} className="btn btn-secondary mx-1 my-1" onClick={handleDownloadClick}>Download Text</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Your text summary</h1>
                {/* <p>To get right values, remove the extra spaces using button <b>"Remove Extra Spaces"</b></p> */}
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.replace(/\s/g, '').length} characters.</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read </p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : 'Nothing to preview.'}</p>
            </div>
        </>
    )
}