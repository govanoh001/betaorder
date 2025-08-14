import { auth, signIn } from "@/auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FcGoogle } from "react-icons/fc";


  export default async function SignIn (){
    const session = await auth ();
    console.log(session)
    if(session){
      redirect("/dashboard/add-order");
    }
  return (
    <main className="min-h-screen flex justify-center bg-gray-100 py-8 px-2">
      <article>
        <div className="w-full md:w-[30em] rounded-md bg-white p-4 shadow shadow-gray-500 ">
          <h1 className="text-2xl mb-2">Sign into BetaOrder</h1>
          <p  className="">Sign in using...</p>
          <form action={async()=>{
              "use server"
            await signIn("google")
          }}
           className="mb-2">
            <button className="w-full h-[3.2em] bg-black border-b-2 border-blue-300 rounded-md flex justify-center items-center gap-2">
              <FcGoogle className="text-3xl "/>
              <span className="text-white font-semibold">Google Account</span>
            </button>
          </form>
          <p className="text-gray-800 text-xs">By clicking on the sign in button, you confirm you have agreed to our {""}
            <Link href="#" className="text-gray-800 underline">Terms of use</Link>{""} and {""}
            <Link href="#" className="text-gray-800 underline">Terms of use</Link>
          </p>
        </div>
      </article>
    </main>
  )
}
  