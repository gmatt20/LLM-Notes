"use client";

import { redirect } from "next/navigation";

export default function Nav() {
  const redirectNoteEditor = () => {
    redirect("/note-editor");
  };
  const redirectHome = () => {
    redirect("/");
  };
  const redirectAccount = () => {
    redirect("/auth");
  };

  return (
    <div className="fixed right-0 left-[50%] top-[7%] translate-[-50%] bg-[#282828] flex justify-center gap-5 w-[80%] p-5 rounded-4xl text-white">
      <div>
        <button
          onClick={redirectHome}
          className="border-2 border-[#575757] p-2 rounded-2xl cursor-pointer">
          Home
        </button>
      </div>
      <button
        onClick={redirectNoteEditor}
        className="border-2 border-[#575757] p-2 rounded-2xl cursor-pointer">
        New Note
      </button>
      <button
        onClick={redirectAccount}
        className="border-2 border-[#575757] p-2 rounded-2xl cursor-pointer">
        Account
      </button>
    </div>
  );
}
