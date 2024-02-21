import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Geovanny Paez - Portfolio',
  description: 'portfolio of Geovanny Paez, a software engineer based in New York City. I specialize in building high-quality websites and applications. I am passionate about creating beautiful and functional user experiences. I am also a lifelong learner and enjoy learning new technologies and frameworks. I am currently looking for new opportunities to work on exciting projects. Feel free to reach out to me if you have any questions or would like to work together.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
