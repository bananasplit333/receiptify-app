'use client'
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/nextjs";
import Main from "./Main";

export default function Page() {
  return (
  <>
    <SignedOut>
      <Main />
    </SignedOut>
    <SignedIn>
    </SignedIn>
  </>
  );
}
