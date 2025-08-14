import { auth } from "@/auth"
import { AuthorizationCheck } from "@/config/authorization-check"
import AddOrder from "./add-order"

export default async function Page() {
 const session = await auth();
 
  return (
    <><AuthorizationCheck/>
      <AddOrder  userid={session?.user?.id}/> </>
  )
}