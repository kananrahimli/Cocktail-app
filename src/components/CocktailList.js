import React from 'react'
import { useGolbalContext } from '../context'
import CocktailItem from './CocktailItem'

export default function CocktailList() {
    const {cocktails,loading}=useGolbalContext()

    if(loading){
        return(
            <h1 className="text-center my-5">LOADING...</h1>
        )
    }

    if(cocktails.length<1){
        return (
            <h1>Not found</h1>
        )
    }
    return (
        <div className='cocktails-list'>
            <h1 className='text-center'>Cocktails</h1>
            <div className='row no-gutters container justify-content-center'>
                {cocktails.map(cocktail=>{
                    return <CocktailItem key={cocktail.id} {...cocktail}></CocktailItem>
                })}
            </div>
           
            
        </div>
    )
}
