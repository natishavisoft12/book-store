import React from 'react'

import { useNavigate } from 'react-router-dom'

const Btn = ({text,click}) => {
  const navigate = useNavigate()
  return (
    <button className=' bg-violet-600 text-white rounded-md h-10 w-20 items-center' onClick={()=>navigate(`/${click}`)}>
        {text}
    </button>
  )
}

export default Btn
