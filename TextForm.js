import React, {useState} from 'react'


export default function TextForm(props) {
  const handleUpClick = ()=> { 
    let newText = text.toUpperCase();
    setText(newText)
  }

  const handleLowClick = ()=> {
    let newText = text.toLowerCase();
    setText(newText)
  }

  const handleOnChange = (event)=>{
    setText(event.target.value);
  }
  const resetText = ()=>{
    let newText = "";
    setText(newText);
  }
  const [text, setText] = useState("Enter text here");
  return (
    <div>
      <>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value= {text} onChange= {handleOnChange} id="myBox" rows="8"></textarea>
      </div>
      <button className='btn btn-primary mx-2'onClick={handleUpClick} >Convert to uppercase</button>
      <button className='btn btn-primary mx-2'onClick={handleLowClick} >Convert to lowercase</button>
      <button className='btn btn-primary mx-2'onClick={resetText} >Reset</button>
      <div className='container my-4'>
        <h1>Your Text Summery</h1>
        <p>Words {text.split(" ").length} Characters {text.length}</p>
      </div>
      </>
    </div>

  )
}
