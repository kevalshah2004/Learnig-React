import React from 'react'

function Card(props){

    
    return (
        <div className = 'bg-green-400 text-3xl font-bold underline'>
            Card, {props.username}, {props.btnText} 
        </div>
    )
}

export default Card