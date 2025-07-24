import Link from "next/link"
import { BsLinkedin } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
export default function Footer (){
    const year = new Date().getFullYear
    return (
        <footer className="grid grid-cols-1 md:px-8 md:grid-cols-2 lg:grid-cols-3 lg:py-4 lg:px-5 lg:gap-0 bg-black w-full h[30vh]">
       <div>
            <p className="text-3xl text-blue-500 font-bold">BetaOrder</p>
            <p className="text-xs text-gray-600">@Order Management System</p>
        </div> 
        <div>
            <p className="text-md text-grey-700">Headquaters</p>
            <p  className="text-md text-grey-700">Microsoft Street, Dallas, Texas</p>
        </div>
        <div className="">
            <ul className="flex lg:justify-end items-center gap-7">
                <li><Link href="#"><BsLinkedin className="text-blue-500 text-2xl "/></Link></li>
                <li><Link href="#"><FaTwitter className="text-blue-500 text-2xl"/></Link></li>
               <li><Link href="#"><FaFacebookF className="text-blue-500 text-2xl"/></Link></li>
            </ul>
            <ul className="flex lg:justify-end items-center gap-4">
                <li> <Link href="#" className="text-sm text-gray-600">Glossary</Link></li>
                <li> <Link href="#" className="text-sm text-gray-600">FAQ</Link></li>
                <li> <Link href="#" className="text-sm text-gray-600">Privacy Policy</Link></li>
            </ul>
        </div>
        </footer>)
}
