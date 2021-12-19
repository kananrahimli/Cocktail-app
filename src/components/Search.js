import React, { useEffect, useRef } from 'react'
import { useGolbalContext } from '../context'
import './search.css'

export default function Search() {
    const {setSearch}=useGolbalContext()
    const inputValue=useRef('')
    useEffect(()=>{
        inputValue.current.focus();
    })
    const searchTerm=()=>{
        setSearch(inputValue.current.value)
    }
    const submit =(e)=>{
        e.preventDefault();
    }
    return (
        <div className='search w-50 mb-5 p-4'>
            <form action="" onSubmit={e=>submit(e)} className='d-flex flex-column'>
                <label htmlFor="search" className='text-center mb-1'>Search</label>
                <input type="text" name="" id="" onChange={searchTerm} ref={inputValue} className='w-100' />
            </form>
        </div>
    )
}
