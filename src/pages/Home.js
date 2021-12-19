import React from 'react'
import CocktailList from '../components/CocktailList'
import Search from '../components/Search'


export default function Home() {


    return (
        <div className='home container py-5 d-flex flex-column align-items-center'>
            <Search></Search>
            <CocktailList></CocktailList>
        </div>
    )
}
