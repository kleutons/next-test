'use client'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter();

  return (
    <main className='main'>
      <h1> Home </h1>
      <p> Test Next </p>
      <button onClick={() => router.push('/user?id=01')}> Click Page User 01 </button>
      <button onClick={() => router.push('/user?id=02')}> Click Page User 02 </button>
      <button onClick={() => router.push('/user?id=03')}> Click Page User 03 </button>
      <button onClick={() => router.push('/user?id=04')}> Click Page User 04 </button>
      <button onClick={() => router.push('/user?id=xxxx')}> Click Page User xxxx </button>
    </main>
  )
}
