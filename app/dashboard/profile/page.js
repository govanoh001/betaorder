import { auth } from "@/auth"
import { Button } from "@mui/material"
import Image from "next/image"


export default async function Profile (){
   const session = await auth()
    return (
        <main className="min-h-screen flex justify-center py-4 md:py-6 md:px lg:py-8 lg: py-16 bg-gray-100">
          <div className="w-full md:w-[380px] flex flex-col gap-4 border border-gray-300 rounded-md bg-gray-50 p-6">
             <div className="flex justify-center">
                <Image
                src="/bg2.jpg"
                width={80}
                height={80}
                
                alt="profile-images"
                className="w-[80px] h-[80px] rounded-full"/>
             </div>
             <p className="text-center py-3 font-semibold border-b border-gray-500 text-gray-700">{session?.user.name.toLocaleUpperCase()}</p>
             <p className="text-center py-3  font-semibold border-b border-gray-500 text-gray-700">{session?.user.email}</p>
             <p className="text-center py-3  font-semibold border-b border-gray-500 text-gray-700">User {session?.user.id}</p>
             <form>
                <Button className="w-full" variant="contained" type="submit">Log Out</Button>
             </form>
          </div>
        </main>
    )
}