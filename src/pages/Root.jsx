import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Root() {
  return (
    <div className='h-dvh bg-background pb-10'>
        <Outlet/>
    </div>
  )
}
