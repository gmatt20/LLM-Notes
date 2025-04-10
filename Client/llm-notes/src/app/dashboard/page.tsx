import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default async function Dashboard() {
  const session = await auth();
  if (!session) {
    return redirect("/login");
  }
  const user = session.user;
  console.log(user?.image);
  return (
    <div className="flex items-center justify-center h-screen w-screen gap-5">
      <Avatar>
        <AvatarImage src={user?.image} />
        <AvatarFallback>Your Profile Pic</AvatarFallback>
      </Avatar>
      <h1 className="text-white">Welcome {user?.name}</h1>
    </div>
  );
}
