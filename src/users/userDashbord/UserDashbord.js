import React from 'react'
import UserCarosel from './userCarosel'
import UserFooter from './userFooter'
import UserHeader from './userHeader'
import UserProductCategory from './userProductCategory'

export default function UserdDashbord() {
  return (
    <div className="bg-white">
      <UserHeader />
      <UserCarosel />
      <UserProductCategory/>
      <UserFooter/>
    </div>
  )
}