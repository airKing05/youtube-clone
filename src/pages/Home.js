import React from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'

export default function Home() {
    return (
        <div className='overflow-hidden'> 
            <div style={{ height: '7.5vh' }}>
                <Navbar />
            </div>
            <div style={{ height: '92.5vh' }}>
                <Sidebar />
            </div>
        </div>
    )
}
