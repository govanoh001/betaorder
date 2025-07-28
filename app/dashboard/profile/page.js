import { Button } from "@mui/material"
import Image from "next/image"


export default function Profile (){
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
             <p className="text-center py-3 font-semibold border-b border-gray-500 text-gray-700">UserName</p>
             <p className="text-center py-3  font-semibold border-b border-gray-500 text-gray-700">Email</p>
             <p className="text-center py-3  font-semibold border-b border-gray-500 text-gray-700">User ID</p>
             <form>
                <Button className="w-full" variant="contained" type="submit">Log Out</Button>
             </form>
          </div>
        </main>
    )
}