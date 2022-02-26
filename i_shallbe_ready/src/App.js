import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Amwaiting from './Amwaiting.js'
import React, {useEffect,useState} from 'react'


const  Lyricsdisp = ({atext}) => {
return (
<div > {atext} </div>

)

}

const App = () =>  {
  const [lyricsText,setLyrics] = useState("wonderful world of Music ");
  const [loading,setLoading]= useState(true);
  const lyricsFunction = async () =>{
   try {
     
      const data =  await axios
      .get(`https://api.lyrics.ovh/v1/Coldplay/Adventure of a Lifetime'
      `)
      .then( res => {setLyrics(res.data.lyrics);console.log('data received:'+res.data.lyrics );setTimeout(() => {
        console.log("waiting ..");setLoading(false)
      }, 3000); ;}
      
      );
  
    
                  
   } 
   catch(e){console.log(e)}
  
  }
  useEffect(() => {lyricsFunction();},[])
  return (
    (loading?<Amwaiting/>:<Lyricsdisp atext={lyricsText}/>)
      
    
   
  );
}

export default App;
