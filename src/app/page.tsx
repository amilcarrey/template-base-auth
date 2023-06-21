import { getServerSession } from 'next-auth'

export default async function Home() {
  const session = await getServerSession()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl text-cyan-700">
        Hi {session?.user?.name ? session.user.name : 'There'} 👋🏻
      </h1>
    </main>
  )
}
