'use client'

import React from 'react'
import { signOut } from 'next-auth/react'

import { Button } from '@/components/ui/button'
import { Icons } from '@/components/icons'

const LogoutButton = () => {
  return (
    <Button
      variant={'ghost'}
      size={'sm'}
      onClick={() => {
        signOut({ redirect: true, callbackUrl: '/' })
      }}
    >
      <Icons.logout className="h-5 w-5 fill-current" />
      <span className="sr-only">Sign out</span>
    </Button>
  )
}

export default LogoutButton
