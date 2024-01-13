import { Tiro_Bangla } from 'next/font/google'
import './globals.css'

const tiro = Tiro_Bangla({ subsets: ['latin'], weight: "400" })

export const metadata = {
  title: 'Good Morning Aid',
  description: 'Good Morning Aid a Trusted Medical Shop',
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>   <link rel="icon" href="https://i.postimg.cc/PJ8b3Msv/gmfav.png" /></head>
      <body className={tiro.className}>{children}</body>
    </html>
  )
}
