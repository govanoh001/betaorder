import { auth } from "@/auth"
import { AuthorizationCheck } from "@/config/authorization-check"
import Orders from "./orders";


export default async function OrderPage() {
 const session = await auth();
 
  return (
    <><AuthorizationCheck/>
      <Orders  userid={session?.user?.id}/> </>
  )
}