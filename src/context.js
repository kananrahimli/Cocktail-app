import React, { useContext, useEffect, useState } from 'react'

const AppContext=React.createContext()
const url='https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppProvider=({children})=>{
    const [loading,setLoading]=useState(false);
    const [search,setSearch]=useState('');
    const [cocktails,setCocktails]=useState([])

    const fetchData=async ()=>{
        try {
            setLoading(true)
            const res=await fetch(`${url}${search}`)
            const data=await res.json();
            const {drinks}=data;
            if(drinks){
                
                const newCocktail=drinks.map((drink)=>{
                    
                    const {idDrink,strDrink,strAlcoholic,strGlass,strDrinkThumb}=drink
    
                    return {id:idDrink,name:strDrink,alcohol:strAlcoholic,glass:strGlass,img:strDrinkThumb}
                })
                
                setCocktails(newCocktail)
                
            }else{
                setCocktails([])
            }
            setLoading(false)
           
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
        
    }
    useEffect(()=>{
        fetchData()
    },[search])

    return <AppContext.Provider value={{loading,setLoading,setSearch,cocktails}}>
        {children}
    </AppContext.Provider>
}

const useGolbalContext=()=>{
    return useContext(AppContext)
}

export {AppProvider,useGolbalContext}
