import { auth, signIn, signOut } from "@/auth";
import { LoginForm } from "@/components/login-form";

export default async function SignIn() {
  const session = await auth();
  const user = session?.user;

  return user ? (
    <div className="w-screen h-screen flex justify-center items-center flex-col">
      <h1 className="my-5">Welcome {user.name}!</h1>
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
    </div>
  ) : (
    <div className="w-screen h-screen flex justify-center items-center flex-col">
      <LoginForm />
    </div>
    // <div className="w-screen h-screen flex justify-center items-center flex-col">
    //   <form
    //     action={async () => {
    //       "use server";
    //       await signIn("google", { redirectTo: "/secret" });
    //     }}>
    //     <button
    //       className="cursor-pointer p-2 border-2 bg-blue-400 text-black"
    //       type="submit">
    //       Signin with Google
    //     </button>
    //   </form>
    // </div>
  );
}
