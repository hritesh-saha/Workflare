import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Button } from "./ui/button";
import {
  SignedIn,
  SignedOut,
  SignIn,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { PenBox } from "lucide-react";
import "../App.css";

const Header = () => {
 const [showSignIn, setShowSignIn]=useState(false);
 const [search, setSearch]= useSearchParams();

useEffect(()=>{
  if(search.get('sign-in')){
    setShowSignIn(true);
  }
}, [search]);

const handleOverlayClick = (e)=>{
  if(e.target === e.currentTarget){
    setShowSignIn(false);
    setSearch({});
  }
}

  return (
    <>
      <nav className="py-4 flex justify-between items-center mr-20 ml-2">
        <Link>
          <img src="/logo2.png" alt="Logo" className="h-20 cursor-pointer" />
        </Link>

        <div className="flex gap-8">
          <SignedOut className="cursor-pointer">
            <Button variant="outline" onClick={() => setShowSignIn(true)}>
              Login
            </Button>
          </SignedOut>
          <SignedIn className="cursor-pointer">
            <Link to="/post-job">
            {/* add condition as recruiter here */}
            <Button variant="destructive" className="rounded-full">
              <PenBox size={20} className="mr-1"/>
              Post a Job</Button>
            </Link>
            <UserButton />
          </SignedIn>
        </div>
      </nav>

      {showSignIn && <div className="modal-overlay"
      onClick={handleOverlayClick}>
        <SignIn signUpForceRedirectUrl="/onboarding" signUpFallbackRedirectUrl="/onboarding"/>
        </div>}
    </>
  );
};

export default Header;
