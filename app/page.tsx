'use client'
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Main from "./Main";
import Dashboard from "./dashboard/page";

export default function Page() {
  return (
  <>
    <SignedOut>
      <Main />
    </SignedOut>
    <SignedIn>
      <Dashboard />
    </SignedIn>
  </>
  );
}
