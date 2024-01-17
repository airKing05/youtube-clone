import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UilSearch, UilYoutube, UilBars, UilTimes, UilMicrophone, UilVideo, UilBell } from '@iconscout/react-unicons';



export default function Navbar() {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        navigate(`/search/${searchQuery}`);
    }
    return (
        <nav
            className='position-fixed top-0 navbarBar d-flex justify-content-between align-items-center w-100'
        >
            <div className='d-flex align-items-center'>
                <div className='cursor__pointer'>
                    <UilBars color="#dee2e6" size={30} />
                </div>
                <Link to="/" className='text-decoration-none'>
                    <div className='d-flex mx-4  align-items-center '>
                        <UilYoutube color="red" size={30} />
                        <span className='px-1  text-white fs-4 fw-bolder'>YouTube</span>
                    </div>
                </Link>
            </div>
            <div className='d-flex justify-content-center align-items-center gap-2'>
                <div className='d-flex align-items-center p-0' style={{ width: '400px' }}>
                    <div className='d-flex align-items-center pr-4 nav__input'>
                        {/* <div >
                            <UilSearch/>
                        </div> */}
                        <input
                            type="text"
                            className="border-0 input-data"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        {
                            searchQuery.length ?
                                <UilTimes
                                    onClick={() => { setSearchQuery('') }}
                                /> : null
                        }
                    </div>
                    <button
                        className='d-flex justify-content-center align-items-center py-2 px-3 nav__search__btn'
                        onClick={handleSearch}
                    >
                        <UilSearch className="bg-transparent" />
                    </button>
                </div>
                <div className='bg-dark bg-gradient p-2 m-0 rounded-circle'>
                    <UilMicrophone style={{ backgroundColor: 'transparent' }} />
                </div>
            </div>

            <div className='d-flex justify-content-center align-items-center gap-4'>
                <UilVideo />
                <div className='d-flex align-items-center position-relative mx-3'>
                    <UilBell />
                    <span
                        className='position-absolute bg-danger  border rounded-circle notification__count'
                    >9+</span>
                </div>
                <div className='border py-2 px-3 rounded-circle ' style={{ maxWidht: '30px' }}>
                    {/* <img src='https://wallpaperaccess.com/full/84977.png'
                      alt='logo'
                      className='w-auto'
                        style={{ widht: '100%' }}
                    /> */}
                    A
                </div>
            </div>
        </nav>

    )
}
