'use client'
export const dynamic = 'force-dynamic'
import { useRouter } from 'next/navigation'

export default function BlogId({ params }: { params: { blogId: string } }){
    const router = useRouter();

    const idUser = params.blogId;

    return (
        <main className='main'> 
         <h1> Page Blog Id </h1>
         <p> User Get Id == <span className='id'> {idUser} </span> </p>
         <button onClick={() => router.push('/')}> Back </button>
        </main>  
    )
}