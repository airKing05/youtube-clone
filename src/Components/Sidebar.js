import React from 'react';
import { UilEstate, UilFilter, UilHourglass, UilDataSharing, UilBook, UilHistory, UilPlay, UilClock, UilThumbsUp, UilMusic, UilVolleyball, UilBasketballHoop, UilFilm, UilSetting, UilFire, UilQuestionCircle, UilCommentAltUpload } from '@iconscout/react-unicons'
import { Link } from 'react-router-dom';

export default function Sidebar() {

    const mainLinks = [
        {
            icon: <UilEstate size={23} color="#dee2e6" />,
            name: "Home",
        },
        {
            icon: <UilHourglass size={23} color="#dee2e6"  />,
            name: "Explore",
        },
        {
            icon: <UilFilter size={23} color="#dee2e6" />,
            name: "Shorts",
        },
        {
            icon: <UilDataSharing size={23} color="#dee2e6" />,
            name: "Subscriptions",
        },
    ];

    const secondaryLinks = [
        {
            icon: <UilBook size={23} color="#dee2e6" />,
            name: "Library",
        },
        {
            icon: <UilHistory size={23} color="#dee2e6" />,
            name: "History",
        },
        {
            icon: <UilPlay size={23} color="#dee2e6" />,
            name: "Your Videos",
        },
        {
            icon: <UilClock size={23} color="#dee2e6" />,
            name: "Watch Later",
        },
        {
            icon: <UilThumbsUp size={23} color="#dee2e6" />,
            name: "Liked Videos",
        },
    ];

    const subscriptionLinks = [
        {
            icon: <UilMusic size={23} color="#dee2e6" />,
            name: "Music",
        },
        {
            icon: <UilVolleyball size={23} color="#dee2e6" />,
            name: "Sports",
        },
        {
            icon: <UilBasketballHoop size={23} color="#dee2e6" />,
            name: "Gaming",
        },
        {
            icon: <UilFilm size={23} color="#dee2e6" />,
            name: "Films",
        },
    ];

    const helpLinks = [
        {
            icon: <UilSetting size={23} color="#dee2e6" />,
            name: "Settings",
        },
        {
            icon: <UilFire size={23} color="#dee2e6" />,
            name: "Report history",
        },
        {
            icon: <UilQuestionCircle size={23} color="#dee2e6" />,
            name: "Help",
        },
        {
            icon: <UilCommentAltUpload size={23} color="#dee2e6" />,
            name: "Send feedback",
        },
    ];

    const textLinks = [
        [
            "About",
            "Press",
            "Copyright",
            "Contact us",
            "Creator",
            "Advertise",
            "Developers",
        ],
        [
            "Terms",
            "Privacy",
            "Policy & Safety",
            "How YouTube works",
            "Test new features",
        ],
    ];

  return (
      <div className='d-flex flex-column justify-content-center position-sticky px-4' style={{ width: '240px'}}>
          <ul className='d-flex flex-column mx-2 py-2 list-unstyled gap-3'>
              {mainLinks.map(({name, icon}) => {
                return(
                    <li key={name} style={{ backgroundColor: `${name == 'Home' ? 'red' : ''}`}}>
                        <Link to="#" className='d-flex align-items-center text-decoration-none gap-4' >
                        {icon}
                            <span className='fw-lighter mx-2'>{name}</span>
                        </Link>
                    </li>
                )
              })}
          </ul>
          <div className='d-flex border-bottom border-1 mb-2 border-success border-opacity-50'>
          </div>
          <ul className='d-flex flex-column mx-2  py-2 list-unstyled gap-3'>
              {secondaryLinks.map(({ name, icon }) => {
                  return (
                      <li key={name} >
                          <Link to="#" className='d-flex align-items-center text-decoration-none gap-4' >
                              {icon}
                               <span className='fw-lighter mx-2'>{name}</span>
                          </Link>
                      </li>
                  )
              })}
          </ul>
          <div className='d-flex border-bottom border-1 mb-2 border-success border-opacity-50'>
          </div>
          <ul className='d-flex flex-column mx-2 py-2 list-unstyled gap-3'>
              {subscriptionLinks.map(({ name, icon }) => {
                  return (
                      <li key={name} >
                          <Link to="#" className='d-flex align-items-center text-decoration-none gap-4' >
                              {icon}
                               <span className='fw-lighter mx-2'>{name}</span>
                          </Link>
                      </li>
                  )
              })}
          </ul>
          <div className='d-flex border-bottom border-1 mb-2 border-success border-opacity-50'>
          </div>
          <ul className='d-flex flex-column mx-2 py-2 list-unstyled gap-3'>
              {helpLinks.map(({ name, icon }) => {
                  return (
                      <li >
                          <Link to="#" className='d-flex align-items-center text-decoration-none gap-4' >
                              {icon}
                               <span className='fw-lighter mx-2'>{name}</span>
                          </Link>
                      </li>
                  )
              })}
          </ul>
          <div className='d-flex border-bottom border-1 mb-2 border-success border-opacity-50'>
          </div>
          <ul className='d-flex flex-wrap mx-2 py-2 list-unstyled gap-3'>
              {textLinks[0].map((name) => {
                  return (
                      <li key={name} >
                            <span className='fw-lighter mx-2'>{name}</span>
                      </li>
                  )
              })}
          </ul>
          <ul className='d-flex flex-wrap mx-2 py-2 list-unstyled gap-3'>
              {textLinks[0].map((name) => {
                  return (
                      <li key={name} >
                          <span className='fw-lighter mx-2'>{name}</span>
                      </li>
                  )
              })}
          </ul>
          <div className='d-flex text-success'>
            @2022 Google LLC
          </div>
    </div>
  )
}
