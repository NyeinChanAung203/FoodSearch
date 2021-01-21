import React from 'react'

function Receipe({title,calories,image,ingredients}) {
    return (
    <div className="col mb-4">
        <div className="card shadow p-3 bg-white">
            <img src={image} className="card-img-top rounded" alt={title}/>
            <div className="card-body">
                <h3 className="card-title font-weight-bold">{title}</h3>
                <ol>
                    {ingredients.map( (i,index)=> <li key={index}>{i.text}</li>)}
                </ol>
                <strong><p className="card-text">&#8658; {calories.toFixed(2)} calories</p></strong>
            </div>
        </div>
    </div>
    )
}

export default Receipe;
