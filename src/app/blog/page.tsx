import { useRouter } from 'next/navigation'

export default function BlogPage(){
    const router = useRouter();


    return (
        <>
         <h1> Post não enconrado  </h1>

         <button onClick={() => router.push('./')}> Back </button>
        </>  
    )
}