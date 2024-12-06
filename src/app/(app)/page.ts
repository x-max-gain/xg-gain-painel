// import { getServerSession } from "next-auth"
// import { options } from "../api/auth/[...nextauth]/options"
import { redirect } from "next/navigation"

export default async function Page() {
  const session = 'logged in user session'

  if (!session) {
    redirect('/sign-in')
  }
}