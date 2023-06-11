import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Blog',
}

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