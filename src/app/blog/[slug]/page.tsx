
'use client'
export const dynamic = 'force-dynamic';
import { useRouter } from "next/navigation";

export default function BlogSlug({ params }: { params: { slug: string } }){
    const router = useRouter();

    return(
    <main className='main'>
       <h1> Page Blog Slug Id </h1>
       <p> ID === {params.slug}</p>
       <button onClick={() => router.push('/')}> Back </button>
     </main>
    )
}