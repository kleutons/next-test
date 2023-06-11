'use client'
export const dynamic = 'force-dynamic'

export default function BlogLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <main className='main'>      
      {children}
    </main>
  )
}