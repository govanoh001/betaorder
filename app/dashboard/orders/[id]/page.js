"use client"
import { db } from "@/config/firebase.config"
import { TimestampToDate } from "@/utils/timestamp-date"
import { deleteDoc, doc, getDoc } from "firebase/firestore"
import Image from "next/image"
import { notFound, useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { MdDelete } from "react-icons/md";


 export default function Orders ({params}) {
    const {id} = useParams();
    const router = useRouter();
    const [order, setOrder] = useState(null)
     // fetch Order
     useEffect(()=> {
        const fetchOrder = async () =>{
            const orderRef = doc(db, "orders", id);
            const snapShot = await getDoc(orderRef);

            if (!snapShot.exists()){
                router.push("/dashboard/add-order");
                return;
            }
            setOrder({
                id,
                ...snapShot.data(),

            });
        };
        fetchOrder();
     },[id, router])

     //handle delete 
     const handleDelete = async ()=>{
        const confirmDelete = window.confirm("Are you sure you want to delete this order?");
        if(!confirmDelete) return;

        try{
          await deleteDoc(doc(db, "orders", id));
        alert("Order Deleted Successfully");
        router.push("/dashboard/orders");

        }catch(error) {
          console.error("Error deleting order:", error);
          alert("failed to delete order");
        }
     }

    return (
        <main className="min-h-screen bg-gray-50 p-6">
            <div className="flex flex-col justify-center items-center px-16">
                <div>
                <Image
                width={500}
                height={500}
                alt="image"
                src="/chips.webp"
                className="rounded-lg w-[500px] h-[400px]"/>
            </div>
            <div className="">
            <p className="text-2xl font-semibold text-black ">{order?.customername}</p>
            <p className="font-bold text-sm text-gray-800 ">{order?.order}</p>
            <p className="text-sm text-gray-800">{order?.amount}</p>
            <p className="text-sm font-sm text-gray-600">{TimestampToDate(order?.timecreated)}</p>
            <p className=" text-sm font-semibold text-gray-800">{order?.notes}</p>
            </div>
            </div>
            <div 
            onClick={handleDelete}
            className="w-[50px] h-[50px] flex items-center justify-center rounded-full shadow-sm shadow-gray-200 absolute top-20 right-15 hover:shadow-lg shadow-gray-300">
                <MdDelete className="text-red-500 text-3xl"/>
            </div>
        </main>
    )
}
