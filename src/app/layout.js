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
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-512x512.png"></link>
        <meta name="theme-color" content="#000" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
