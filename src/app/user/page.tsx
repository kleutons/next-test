'use client'
import { useRouter } from 'next/navigation'

export default function User(){
  const router = useRouter();
  return (
       <main className='main'>
       <h1> Page User </h1>
       <p> not found </p>
       <button onClick={() => router.push('/')}> Back </button>
     </main>
  )
}