import React from 'react'

const PromtsCard = ({title,body}) => {
  return (
    <div className='border border-gray-600 rounded-lg p-3 text-primary'>
        <div className='text-md'>
            {title}
        </div>
        <div className='opacity-50'>
            {body}
        </div>
    </div>
  )
}

export default PromtsCard