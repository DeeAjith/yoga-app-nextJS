import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import manifest from '../../public/manifest.json';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: manifest.name,
  description: manifest.description,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
