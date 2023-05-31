import { UserDetails } from '@/components'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
  return ( <>
    <UserDetails />
    {children}
  </>
  )
}

export default layout