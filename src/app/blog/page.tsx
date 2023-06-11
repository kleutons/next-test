'use client'
export const dynamic = 'force-dynamic'

import { Metadata } from 'next';
import { useRouter } from 'next/navigation'


export const metadata: Metadata = {
    title: 'Blog222',
  }

  
export default function BlogPage(){
    const router = useRouter();


    return (
        <>
         <h1> Post não enconrado  </h1>

         <button onClick={() => router.push('./')}> Back </button>
        </>  
    )
}