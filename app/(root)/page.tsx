import HeaderBox from '@/components/ui/HeaderBox'
import RightSidbar from '@/components/ui/RightSidbar'
import TotalBalanceBox from '@/components/ui/TotalBalanceBox'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const Home = () => {
    const loggedIn ={firstName:"Surafel",lastName:"fikre", email:"surakira2017@gmail.com"}
  return (
    
   
    <section className='home'>
    <div className="home-content">
      <header className="home-header">
        <HeaderBox
        type= "greeting"
        title="Wellcome"
        user={loggedIn?.firstName || 'Gust'}
        subtext ="Access and managed your account and transaction effciently"
        />
   <TotalBalanceBox
      accounts={[]}
      totalBanks={1}
      totalCurrentBalance={1250.00}  
   />
      </header>
      recent transaction
    </div>
    <RightSidbar user={loggedIn}
    transactions={[]}
    banks={[{currentBalance:1250.50},{currentBalance:1430.50}]}
    
    />
    </section> 
    
    
  )
}

export default Home