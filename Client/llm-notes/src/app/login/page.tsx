import { auth, signIn, signOut } from "@/auth";

export default async function SignIn() {
  const session = await auth();
  console.log(session);
  const user = session?.user;

  return user ? (
    <>
      <h1>Welcome {user.name}</h1>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}>
        <button
          className="cursor-pointer p-2 border-2 bg-blue-400 text-black"
          type="submit">
          Sign Out
        </button>
      </form>
    </>
  ) : (
    <form
      action={async () => {
        "use server";
        await signIn("google", { redirectTo: "/secret" });
      }}>
      <button
        className="cursor-pointer p-2 border-2 bg-blue-400 text-black"
        type="submit">
        Signin with Google
      </button>
    </form>
  );
}
