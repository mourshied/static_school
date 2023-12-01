import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Flex } from "@chakra-ui/react";
import Navbar from '../common/navbar'
import Header from '../common/header'
import Footer from '../common/footer'

const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: ' গিধাঊষা হাসন আলী উচ্চ বিদ্যালয়',
//   description: 'TODO:  গিধাঊষা হাসন আলী উচ্চ বিদ্যালয়, গৌরীপুর, ময়মনসিংহ',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // <html lang="en">
    //   <body className={inter.className}>{children}</body>
    // </html>

    <Flex
    direction="column"
    align="center"
    maxW={{ xl: "1200px" }}
    m="0 auto">
    <Header/>
    <Navbar />
    <main>{children}</main>
    <Footer />
  </Flex>
  )
}
