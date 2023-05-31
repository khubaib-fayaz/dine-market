import {  UserDetails2 } from '@/components'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
  return ( <>
    <UserDetails2/>
    {children}
  </>
  )
}

export default layout