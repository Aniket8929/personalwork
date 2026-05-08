import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/ui/Navbar'
import Footer from '../components/ui/Footer'

function MainLayout() {
    return (
        <div className='bg-primary pt-1'>
            <Navbar />

            <main>
                <Outlet />
            </main>

            <Footer />
        </div>
    )
}

export default MainLayout