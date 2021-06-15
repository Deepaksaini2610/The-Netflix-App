import React from 'react';
// import netflixdata from './tt';
// import './tt'

function Cards(props){
    return (
    <div className = 'card'>
    <div>
    <div>
    <img src = {props.imgscr}/>
    </div>
    <title >{props.tit}</title>
    <p>{props.series}</p>
    <a href ={props.linkn}><button>Start Now</button></a>
    
    </div>
    </div>
);
    }
export default Cards;