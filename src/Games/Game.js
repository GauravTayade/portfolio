import React from 'react';

const Game =(props)=>{

    return(
    <div className="card shadow-lg m-3" style={{width:"18rem"}}>
        <div className="card-header bg-white">
            <h5 className="card-title text-center font-weight-light">{props.title}</h5>
        </div>
        <img className="card-img-top img-fluid" src={props.image} alt="Card image cap"/>
        <div className="card-body p-0 m-0">

        </div>
        <div className="card-footer">
            <p className="card-text">{props.category}</p>
        </div>
    </div>
    )
}

export default Game;
