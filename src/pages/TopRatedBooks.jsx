import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { topRatedBooks } from '../features/booksThunk'

const TopRatedBooks = () => {
    const dispatch = useDispatch()
    const state = useSelector((state)=>state)

    useEffect(()=>{
        dispatch(topRatedBooks())
    },[dispatch])
    
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 px-6 max-w-6xl mx-auto">
      {
        state.book.bookdata.map((book)=>(
            <div 
            key={book.id}
            className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
        >
            {/* Book Name */}
            <h3 className="text-xl font-semibold mb-2">{book.name}</h3>

            {/* Category & Author */}
            <p className="text-sm text-gray-400">
                <span className="font-medium text-yellow-400">{book.category}</span> - {book.author}
            </p>

            {/* Price & Rating */}
            <div className="mt-4 flex justify-between items-center">
                <span className="text-lg font-semibold text-green-400">${book.price}</span>
                <span className="bg-yellow-500 text-black px-3 py-1 text-xs font-bold rounded-lg">
                    ⭐ {book.rating}
                </span>
            </div>
        </div>
        ))
      }
    </div>
  )
}

export default TopRatedBooks
