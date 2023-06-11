'use client'
// export const dynamic = 'force-dynamic'

import { useRouter } from 'next/navigation'

// export default function User({searchParams}: {searchParams: { id: string}}){
//     const router = useRouter();

//     const idUser = searchParams.id;
//     console.log(idUser);

//     return (
//          <main className='main'>
//          <h1> Page User </h1>
//          <p> User Get Id == <span className='id'> {idUser} </span> </p>
//          <button onClick={() => router.push('./')}> Back </button>
//        </main>
//     )
// }


export default function User(){
  const router = useRouter();

  return (
       <main className='main'>
       <h1> Page User </h1>
       <p> not found </p>
       <button onClick={() => router.push('./')}> Back </button>
     </main>
  )
}