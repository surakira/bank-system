'use client'
import CountUp from 'react-countup'
const AnimatedCounter = ({amount}:{amount:number}) => {
  return (
    <div className='w-full'>
        $<CountUp end={amount}
        decimals={2}
        decimal=','
        prefix=' ETB'
        />
    </div>
  )
} 

export default AnimatedCounter