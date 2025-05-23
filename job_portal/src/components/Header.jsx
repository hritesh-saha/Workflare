import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Button } from "./ui/button";
import {
  SignedIn,
  SignedOut,
  SignIn,
  UserButton,
  useUser,
} from "@clerk/clerk-react";
import { BriefcaseBusiness, Heart, PenBox } from "lucide-react";
import "../App.css";

const Header = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [search, setSearch] = useSearchParams();

  const { user }=useUser();

  useEffect(() => {
    if (search.get("sign-in")) {
      setShowSignIn(true);
    }
  }, [search]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setShowSignIn(false);
      setSearch({});
    }
  };

  return (
    <>
      <nav className="py-3 flex justify-between items-center mr-10 ml-2">
        <Link>
          <img src="/logo2.png" alt="Logo" className="h-24 cursor-pointer" />
        </Link>

        <div className="flex gap-8">
          <SignedOut className="cursor-pointer">
            <Button variant="outline" onClick={() => setShowSignIn(true)}>
              Login
            </Button>
          </SignedOut>
          <SignedIn className="cursor-pointer">
            { user?.unsafeMetadata?.role === "recruiter"&& (
              <Link to="/post-job">
              {/* add condition as recruiter here */}
              <Button variant="destructive" className="rounded-full">
                <PenBox size={20} className="mr-1" />
                Post a Job
              </Button>
            </Link>
            )}
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                },
              }}
            >
              <UserButton.MenuItems>
                <UserButton.Link
                  label="My Jobs"
                  labelIcon={<BriefcaseBusiness size={15} />}
                  href="/my-jobs"
                />
                <UserButton.Link
                  label="Saved Jobs"
                  labelIcon={<Heart size={15} />}
                  href="/saved-jobs"
                />
                <UserButton.Action label="manageAccount" />
              </UserButton.MenuItems>
             
            </UserButton>
          </SignedIn>
        </div>
      </nav>

      {showSignIn && (
        <div className="modal-overlay" onClick={handleOverlayClick}>
          <SignIn
            signUpForceRedirectUrl="/onboarding"
            signUpFallbackRedirectUrl="/onboarding"
          />
        </div>
      )}
    </>
  );
};

export default Header;
