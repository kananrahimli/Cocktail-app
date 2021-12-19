import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
const url='https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='
export default function Details() {
    const {id}=useParams();
    const [loading,setLoading]=useState(false)
    const [cocktail,setCocktail]=useState([])

    const getCocktail= async ()=>{
        setLoading(true)
        try {
            const res =await fetch(`${url}${id}`);
            const data=await res.json();
            const {drinks}=data
            if(drinks){
                const {
                    strDrink:name,
                    strCategory:category,
                    strAlcoholic:alcohol,
                    strGlass:glass,
                    strDrinkThumb:img,
                    strInstructions:instructions,
                    strIngredient1,
                    strIngredient2,
                    strIngredient3,
                    strIngredient4,
                    strIngredient5
                }=drinks[0]

                const ingredients=[
                    strIngredient1,
                    strIngredient2,
                    strIngredient3,
                    strIngredient4,
                    strIngredient5
                ]

                const newCocktail={name,category,alcohol,glass,img,instructions,ingredients}
                setCocktail(newCocktail)
                setLoading(false)
            }
        } catch (error) {
            setCocktail(null)
            setLoading(false)
        }
       
    }
    
    useEffect(()=>{
        getCocktail()
    },[id])

    if(loading){
        return (
            <h1 className='text-center'>LOADING</h1>
        )
    }

    const {name,category,alcohol,glass,img,instructions,ingredients}=cocktail

    

    return (
        <div className='details py-3 d-flex flex-column align-items-center'>
           <Link className='btn btn-secondary' to='/'>Back Home</Link>
           <h1 className="text-center my-3">{name}</h1>
           <div className="single-cocktail row w-100 container mt-4">
                <div className="col-md-4">
                    <img src={img} alt="" className="img-fluid" />
                </div>

                <div className="col-md-8 pl-5 d-flex flex-column justify-content-around">
                    <h5 className='info'><span>Name</span>: {name}</h5>
                    <h5 className='info'><span>Category</span>: {category}</h5>
                    <h5 className='info'><span>Info</span>: {alcohol}</h5>
                    <h5 className='info'><span>Glass</span>: {glass}</h5>
                    <h5 className='info'><span>Instruction</span>: {instructions}</h5>
                    {/* <h5><span>Name</span>:{name}</h5> */}
                </div>
           </div>
        </div>
    )
}
