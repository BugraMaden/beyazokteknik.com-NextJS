import React from 'react'
import '../app/globals.css'
import Footer from './footer';
import Navbar from './components/Navbar';

const Layout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <Navbar/>
            {children}
            <Footer/>
        </body>
    </html>
  )
}

export default Layout
