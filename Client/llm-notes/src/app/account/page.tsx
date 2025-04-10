import { auth } from "@/auth";

export default async function Account() {
  const session = await auth();
  const user = session?.user;
  return (
    <div className="text-white">
      <h1>Hello {user?.name}</h1>
      <p>Account Configuration</p>
    </div>
  );
}
