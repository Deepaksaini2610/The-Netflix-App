import React from "react";
import ReactDom from 'react-dom';
import Cards from './cards';
import "./index.css";
import sdata from './sdata';
const ncards = (val) =>{
    console.log(val);
   return (
       <Cards
        linkn = {val.lname}
        imgscr = {val.imgsrc}
        series = {val.sname}
        tit = {val.title}

       />
   )

}
// console.log(netflixdata.lname[0]);
ReactDom.render(
<>
<h1 className = 'hello'>Top 5 netflix Series</h1>
{sdata.map(ncards)    }
</>    ,document.getElementById('root'));