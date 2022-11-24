import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'

export default function Home() {
    const sidebarShowEnabled = useSelector((state) => state.genralReducer.sidebarShow);

    console.log("state", sidebarShowEnabled)
    return (
        <div className='overflow-hidden'> 
            <div style={{ height: '7.5vh' }}>
                <Navbar />
            </div>
            <div style={{ height: '92.5vh' }}>
                {
                    sidebarShowEnabled ? <Sidebar /> : ""
                }
               
            </div>
        </div>
    )
}
