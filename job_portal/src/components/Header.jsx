import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'

const Header = () => {
  return (
    <>
    <nav className='py-4 flex justify-between items-center mr-20 ml-2'>
        <Link>
        <img src="/logo2.png" alt="Logo" className='h-20 cursor-pointer' />
        </Link>

        <Button variant="outline" className="cursor-pointer">Login</Button>
      {/* <SignedOut className="cursor-pointer">
        <SignInButton />
      </SignedOut>
      <SignedIn className="cursor-pointer">
        <UserButton />
      </SignedIn> */}
    </nav>
    </>
  )
}

export default Header