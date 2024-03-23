import React ,{useState}from 'react'

export default function TextHome(props) {
    const [text, settext] = useState("")

    const arrange = (str)=>{
        let str2 = str.split(" ")
        let counter=0 
        for(let i=0;i<str2.length;i++){
          if(str2[i]!==''){
            ++counter
        }
      }
      return counter
      }
    const handlechange = (e)=>{
        settext(e.target.value)
    }
    const handleupper = ()=>{
    settext(text.toUpperCase())

    }
    const handlelower = ()=>{
        settext(text.toLowerCase())
        
    }
    const handlebold = ()=>{
                
        document.getElementById('exampleFormControlTextarea1').style.fontWeight='bold'
         document.getElementById('exampleFormControlTextarea1').style.color = 'green'
         
         settext(text)
        
    }
    const handleclear = ()=>{
        settext("")
    }
  return (
    <>
    
    <div className={`container text-${props.mode?'light':'dark'}`}>
    <div className="mb-3">
    <h1>{props.heading}</h1>
  <textarea className={`form-control bg-${props.mode?'dark':'light'} text-${props.mode?'light':'dark'}`} value={text} onChange={handlechange} id="exampleFormControlTextarea1" rows="6" ></textarea>
</div>
<input className="btn btn-primary mx-2" type="button" value="ToUppercase" onClick={handleupper}/>
<input className="btn btn-primary mx-2" type="button" value="ToLowercase" onClick={handlelower}/>
<input className="btn btn-primary mx-2" type="button" value="Change Color and make bold" onClick={handlebold}/>
<input className="btn btn-primary mx-2" type="button" value="Clear" onClick={handleclear}/>

    </div>
    <div className={`container text-${props.mode?'light':'dark'}`}>
        <h1>Your text summary</h1>
        <p>{arrange(text)} words and {text.length} characters</p>
        <p>{text?(0.008 * (text.split(' ')).length):0} minutes Read</p>
        <h2>Text Preview</h2>
        <p>{text?text:'Enter text to evaluate'}</p>
    </div>
    </>
  )
}
