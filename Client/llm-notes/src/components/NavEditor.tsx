"use client";

import { redirect } from "next/navigation";

export default function NavEditor() {
  const redirectToHome = () => {
    redirect("/");
  };
  const redirectToAccount = () => {
    redirect("/account");
  };
  return (
    <div className="fixed right-0 left-[50%] top-[7%] translate-[-50%] bg-[#282828] flex justify-center gap-5 w-[80%] p-5 rounded-4xl text-white">
      <button
        onClick={redirectToHome}
        className="border-2 border-[#575757] p-2 rounded-2xl cursor-pointer">
        Home
      </button>
      <button className="border-2 border-[#575757] p-2 rounded-2xl cursor-pointer">
        Save Note
      </button>
      <button
        onClick={redirectToAccount}
        className="border-2 border-[#575757] p-2 rounded-2xl cursor-pointer">
        Account
      </button>
    </div>
  );
}
