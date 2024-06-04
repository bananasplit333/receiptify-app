import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-200">
        <SignIn routing="path" path="/sign-in" />
    </div>
  );
}