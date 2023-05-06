import React from 'react'
import PieChart from '../features/chart/components/pieChart'
import BarChart from '../features/chart/components/BarChart'


const Chart = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>Overview</li>
          <li>By Month</li>
          <li>Advance</li>
        </ul>
      </nav>
      <main className='d-flex'>
        <div className='pie'>
        <PieChart/>
        </div>
        <div className='bar'>
        <BarChart/>
        </div>
      </main>

    </div>
  )
}

export default Chart


