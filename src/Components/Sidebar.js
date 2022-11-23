import React from 'react';
import { UilEstate, UilFilter, UilHourglass, UilDataSharing } from '@iconscout/react-unicons'
import { Link } from 'react-router-dom';

export default function Sidebar() {

    const mainLinks = [
        {
            icon: <UilEstate size={30} />,
            name: "Home",
        },
        {
            icon: <UilHourglass className="text-xl" />,
            name: "Explore",
        },
        {
            icon: <UilFilter  className="text-xl" />,
            name: "Shorts",
        },
        {
            icon: <UilDataSharing className="text-xl" />,
            name: "Subscriptions",
        },
    ];

    // const secondaryLinks = [
    //     {
    //         icon: <MdOutlineVideoLibrary className="text-xl" />,
    //         name: "Library",
    //     },
    //     {
    //         icon: <MdHistory className="text-xl" />,
    //         name: "History",
    //     },
    //     {
    //         icon: <MdOutlineSmartDisplay className="text-xl" />,
    //         name: "Your Videos",
    //     },
    //     {
    //         icon: <MdOutlineWatchLater className="text-xl" />,
    //         name: "Watch Later",
    //     },
    //     {
    //         icon: <MdThumbUpOffAlt className="text-xl" />,
    //         name: "Liked Videos",
    //     },
    // ];

    // const subscriptionLinks = [
    //     {
    //         icon: <TbMusic className="text-xl" />,
    //         name: "Music",
    //     },
    //     {
    //         icon: <MdOutlineSportsVolleyball className="text-xl" />,
    //         name: "Sport",
    //     },
    //     {
    //         icon: <TbDeviceGamepad2 className="text-xl" />,
    //         name: "Gaming",
    //     },
    //     {
    //         icon: <GiFilmStrip className="text-xl" />,
    //         name: "Films",
    //     },
    // ];

    // const helpLinks = [
    //     {
    //         icon: <MdSettings className="text-xl" />,
    //         name: "Settings",
    //     },
    //     {
    //         icon: <MdOutlinedFlag className="text-xl" />,
    //         name: "Report history",
    //     },
    //     {
    //         icon: <MdOutlineHelpOutline className="text-xl" />,
    //         name: "Help",
    //     },
    //     {
    //         icon: <MdOutlineFeedback className="text-xl" />,
    //         name: "Send feedback",
    //     },
    // ];

    // const textLinks = [
    //     [
    //         "About",
    //         "Press",
    //         "Copyright",
    //         "Contact us",
    //         "Creator",
    //         "Advertise",
    //         "Developers",
    //     ],
    //     [
    //         "Terms",
    //         "Privacy",
    //         "Policy & Safety",
    //         "How YouTube works",
    //         "Test new features",
    //     ],
    // ];

  return (
      <div className='d-flex justify-content-center overflow-auto  border' style={{ width: '240px', backgroundColor: '#212121'}}>
          <ul className='d-flex flex-column border-bottom border-2 border-success list-unstyled gap-3'>
              {mainLinks.map(({name, icon}) => {
                return(
                    <li key={name} className={`${name === "Home" ? "border-danger border-4" : ""}`}>
                        <Link to="#" className='d-flex align-items-center text-decoration-none gap-4'>
                        {icon}
                        <span>{name}</span>
                        </Link>
                    </li>
                )
              })}
          </ul>
    </div>
  )
}
