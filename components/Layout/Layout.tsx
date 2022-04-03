import React from 'react'
import Navbar from 'components/Navbar'

const Layout: React.FC = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
            <footer> this is a footer </footer>
        </div>
    )
}

export default Layout