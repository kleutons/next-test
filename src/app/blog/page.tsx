'use client'
import { useRouter } from 'next/navigation'

export default function Blog(){
  const router = useRouter();
  return (
       <main className='main'>
       <h1> Page Blog </h1>
       <p> not found </p>
       <button onClick={() => router.push('/blog/01')}> id 01 </button>
       <button onClick={() => router.push('/blog/02')}> id 02 </button>
       <button onClick={() => router.push('/')}> Back </button>
     </main>
  )
}