
import React from 'react'
import AnimatedCounter from './AnimatedCounter'
import DoughnutChart from './DoughnutChart'

const TotalBalanceBox = ({accounts=[],totalBanks,totalCurrentBalance}:TotlaBalanceBoxProps) => {
  return (
    <section className="total-balance">
        <div className="total-balances-chart">
            <DoughnutChart accounts={accounts}/>
        </div>
<div className='flex flex-col gap-6'>
    <h2 className="header-2">
        BankAccounts:{totalBanks}
    </h2>
<div className="flex flex-col gaps-2">
    <p className="total-balances-label">
        Total Current Balances
    </p>
    <div className="total-balance-amount flex-center gap-2">
        <AnimatedCounter amount={totalCurrentBalance}/>
        
    </div>
</div>
</div>
    </section>
  )
}

export default TotalBalanceBox