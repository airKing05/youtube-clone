import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UilSearch, UilYoutube, UilBars, UilTimes, UilMicrophone, UilVideo, UilBell, UilArrowLeft } from '@iconscout/react-unicons';
import DropdownPopup from './dropdownPopup/DropdownPopup';



export default function Navbar(props) {
    const { setSidebarVisible } = props;
    const [searchQuery, setSearchQuery] = useState('');
    const [isDropdownShow, setIsDropdownShow] = useState(false);
    const [isSearchInputShow, setIsSearchInputShow] = useState(false) 
    const navigate = useNavigate();

    const handleSearch = () => {
        navigate(`/search/${searchQuery}`);
    }
    const handleShowSidebar = () => {
        setSidebarVisible((preState) => !preState);
    }
    return (
        <>
        <nav
            className='position-fixed top-0 navbarBar d-flex justify-content-between align-items-center w-100'
        >
                <div className='d-flex align-items-center desktop-view'>
                <div className='cursor__pointer me-2 ' 
                    onClick={handleShowSidebar}
                    >
                    <UilBars color="#dee2e6" size={30} />
                </div>
                <Link to="/" className='text-decoration-none'>
                    <div className='d-flex  align-items-center '>
                        <UilYoutube color="red" size={30} />
                        <span className='px-1  text-white fs-4 fw-bolder'>YouTube</span>
                    </div>
                </Link>
            </div>
                <div className='d-flex justify-content-center align-items-center gap-2 desktop-view'>
                <div className='d-flex align-items-center p-0' style={{ width: '400px' }}>
                    <div className='d-flex align-items-center pr-4 nav__input'>
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

                <div className='d-flex justify-content-center align-items-center gap-4 desktop-view'>
                <UilVideo />
                <div className='d-flex align-items-center position-relative mx-3'>
                    <UilBell />
                    <span
                        className='position-absolute bg-danger  border rounded-circle notification__count'
                    >9+</span>
                </div>
                <div
                    onClick={() => setIsDropdownShow(!isDropdownShow)}
                    className='border py-2 px-3 rounded-circle '
                    style={{ maxWitdh: '30px' }}>
                    {/* <img src='https://wallpaperaccess.com/full/84977.png'
                      alt='logo'
                      className='w-auto'
                        style={{ widht: '100%' }}
                    /> */}
                    A
                </div>
            </div>
            {
                    !isSearchInputShow ? <div className='d-flex  align-items-center mobile-view'>
                        <UilYoutube color="red" size={30} />
                        <span className='px-1  text-white fs-4 fw-bolder'>YouTube</span>
                    </div> : null
            }
            {
                    !isSearchInputShow ? <div className='search_section mobile-view'>
                        <div className='d-flex align-items-center position-relative mx-3'>
                            <UilBell />
                            <span
                                className='position-absolute bg-danger  border rounded-circle notification__count'
                            >9+</span>
                        </div>
                        <UilSearch className="bg-transparent" onClick={() => setIsSearchInputShow(true)} />
                    </div> : null
            }
               
                

                {
                    isSearchInputShow ? <div className='d-flex mobile-view w-100 gap-3 align-items-center '>
                        <UilArrowLeft onClick={() => setIsSearchInputShow(false)} />
                        <input
                            type="text"
                            className="input-data border rounded-pill py-2 px-3"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            style={{ background:'rgb(40 40 40)'}}
                        />
                        <UilSearch className="bg-transparent" onClick={() => handleSearch()} />
                    </div> : null
                }

                {/* <DropdownPopup /> */}
        </nav>

        {
                isDropdownShow ? 
                <div 
                        className='d-flex justify-content-end position-absolute end-0 bgColor-transparent'
                style={{zIndex: '2', top: '7vh'}}
                >
                    <DropdownPopup />
                </div>
               : null
        }
        </>
    )
}
