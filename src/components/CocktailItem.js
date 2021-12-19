import React from 'react'
import { Link } from 'react-router-dom'
import './cocktailitem.css'
export default function CocktailItem({id,name,alcohol,glass,img}) {
    return (
        <div className='cocktail-item col-md-3 mt-5 mx-2'>
            <div className="cocktail-item__img">
                <img src={img} alt="" className='img-fluid'/>
            </div>
            <div className="description py-3 px-1">
                <h1>{name}</h1>
                <h4>{glass}</h4>
                <span className="text-muted d-block mb-3">{alcohol}</span>
                <Link to={'details/'+id} className="btn btn-success">Details</Link>
            </div>
        </div>
    )
}
