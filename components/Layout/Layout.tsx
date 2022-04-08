import React from 'react'
import Navbar from 'components/Navbar'
import Infobar from 'components/Infobar'

const Layout: React.FC = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
            <Infobar />
        </div>
    )
}

export default Layout