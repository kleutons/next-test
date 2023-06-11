
'use client'

import { useRouter } from "next/navigation";

export default function BlogSlug(){
    const router = useRouter();

    return(
    <main className='main'>
       <h1> Page Blog Slug Id </h1>
       <p> ID === </p>
       <button onClick={() => router.push('/')}> Back </button>
     </main>
    )
}