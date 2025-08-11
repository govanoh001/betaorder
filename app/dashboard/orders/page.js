"use client"
import { db } from "@/config/firebase.config";
import { TimestampToDate } from "@/utils/timestamp-date";
import { collection, getDocs, orderBy, query, where, } from "firebase/firestore";
import { useSession } from "next-auth/react";
import Image from "next/image"
import Link from "next/link";
import React from "react";



export default function Orders (){
    const [orders, setOrders]= React.useState([])
    const {data : session} = useSession();

    React.useEffect(()=>{
        const fetchOrders = async ()=> {
            try{
                const q = query(collection(db, "orders"));
                const onSnap = await getDocs(q,
             where("user","===", session?.user?.id),
            orderBy("timecreated", "desc") )
             //send the fetch data into an array
             const compileOrders = [];
             onSnap.docs.forEach(doc =>{
                compileOrders.push({
                    id: doc.id,
                    data: doc.data(),
                })
             }) 
             setOrders(compileOrders); 
             console.log(compileOrders)
            } catch (error){
            console.log("an error occured while fetching orders:" ,error)
            }
        }
        if (session) {
            fetchOrders();
        };

    },[session])
    return (
        <main className="min-h-screen ">
         <h1 className="text-center font-bold text-blue-500 text-5xl">My Orders</h1>
         <p className="text-center text-gray-500 text-sm mt-3">Collection of All Orders Placed</p>
         <div className="grid grid-cols-1 md:grid grid-cols-2 lg:grid grid-cols-4  lg:gap-12 px-8">
          {orders.map(orders => <Link href={`/dashboard/orders/${orders.id}`} key={orders.id}>
            <div className="w-[300px] h-[480px] bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow ">
                <Image
                src="/chips.webp"
                alt="chips"
                width={300}
                height={300}
                className="rounded-t-xl"/>
                <div className="p-3">
                 <span className="block font-semibold text-gray-800">{orders.data.customername}</span>
                 <span className="block font-bold text-gray-800">{orders.data.order}</span>
                 <span className="block font-semibold text-gray-800">{orders.data.amount}</span>
                  <span className="block text-sm font-sm text-gray-600">{TimestampToDate(orders.data.timecreated)}</span>
                 <span className="block text-sm font-semibold text-gray-800">{orders.data.notes}</span>
                </div>
            </div>
            </Link>
            )}
         </div>
        </main>
    )
}