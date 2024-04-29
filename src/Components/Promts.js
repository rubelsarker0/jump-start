import React from 'react'
import PromtsCard from './PromtsCard'

const Promts = () => {
  return (
    <div className='grid grid-cols-2 gap-4 '>
        <PromtsCard title='Plan a itinerary' body='To experience the wildlife'/>
        <PromtsCard title='Plan a trip' body='for photography expedition in Ireland'/>
        <PromtsCard title='Write a spreadsheet formula' body='to convert a data to the weekday'/>
        <PromtsCard title='Top 10 high Vulnerabilities ' body='Give me hight priority vulnerabilities'/>
    </div>
  )
}

export default Promts