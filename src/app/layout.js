import React from 'react'
import { FirebaseAuthProvider } from '@/contexts/firebaseAuthContext'
import 'swiper/swiper-bundle.css' // Make sure to import swiper CSS

export const metadata = {
  title: 'Main root of the Project',
  description: 'Main root description of the Project',
}

export default function AppLayout({ children }) {
  return (
    <html lang="en" className={`bg-white`}>
      <body className="flex flex-col">
        <FirebaseAuthProvider>{children}</FirebaseAuthProvider>
      </body>
    </html>
  )
}
