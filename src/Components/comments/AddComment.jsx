import React from 'react'

export default function AddComment() {
    return (
        <div className='d-flex flex-column '>
            <div className='row '>
                <div className='col-1 d-flex justify-content-end align-items-center p-1 '  >
                    <img src="https://yt3.ggpht.com/ytc/AMLnZu-Jn0nVA90AGZbhKR3YGsrrDHWZpp5FhIcUFsbCBA=s48-c-k-c0x00ffffff-no-rj" alt="logo"
                        className='img-fluid rounded-circle' 
                        style={{width: '100%'}}
                    />
                </div>
                <div className='col-11'>
                    <input placeholder='Add a comment...' className='border-bottom-2 border-bottom-white my-3 input-data fs-5 p-0' />
                </div>
            </div>

            <div className='d-flex justify-content-end my-0' style={{ fontSize: '12px' }}>
                <span className='border bg-dark py-1 px-2 rounded-pill fw-bold'>Cancel</span> &nbsp; &nbsp;
                <span className='border bg-dark py-1 px-2 rounded-pill fw-bold text-dark bg-white'>Comment</span>
            </div>
        </div>
    )
}
