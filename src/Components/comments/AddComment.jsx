import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { CREATE_COMMENT_REQUEST_OF_SELECTED_VIDEO } from '../../redux/constants/constants';
import { getAccessTokenFromWebStorage } from '../../utils/methods/getAccessTokenFromWebStorage.js'

export default function AddComment(props) {
    const {videoId} = props;

    const [inputText, setInputText] = useState('');
    const [isCommentButtonVisible, setIsCommentButtonVisible] = useState(false)

    const dispatch = useDispatch();


    const handleChangeInput = (e) => {
        setInputText(e.target.value)
    }
    const handleClearInput = () => {
        setIsCommentButtonVisible(false)
        setInputText('');
    }
    const handleAddComment = () => {
        const dataToSend = {
            videoId: videoId,
            commentText: inputText,
            accessToken: getAccessTokenFromWebStorage()
        }
        dispatch({
            type: CREATE_COMMENT_REQUEST_OF_SELECTED_VIDEO,
            payload: dataToSend
        })
        setInputText('');
    }

    return (
        <div className='d-flex flex-column '>
            <div className='row '>
                <div className='col-1 d-flex justify-content-end align-items-center p-1 '  >
                    <img src="https://yt3.ggpht.com/ytc/AMLnZu-Jn0nVA90AGZbhKR3YGsrrDHWZpp5FhIcUFsbCBA=s48-c-k-c0x00ffffff-no-rj" alt="logo"
                        className='img-fluid rounded-circle' 
                        style={{width: '100%'}}
                    />
                </div>
                <div className='col-11 commentInput'>
                    <input
                        value={inputText}
                        placeholder='Add a comment...'
                        className='my-3 w-100 fs-5 p-1'
                        // style={{ borderBottom: '2px solid white !important' }}
                        onChange={handleChangeInput}
                        // onBlur={() => setIsMyInputFocused(false)}
                        onFocus={() => setIsCommentButtonVisible(true)}
                    />
                </div>
            </div>
            {
                isCommentButtonVisible ? <div className='d-flex justify-content-end my-0' style={{ fontSize: '12px' }}>
                    <span
                        className='py-2 px-3 rounded-pill fw-bold cancelBtn'
                        onClick={handleClearInput}
                        role="button"
                    >
                        Cancel
                    </span>
                    &nbsp; &nbsp;
                    <button
                        className={`${inputText ? 'primary-shaded_bg text-dark' : 'dark-shaded_bg dark-shaded_text'} border-0 py-2 px-3 rounded-pill fw-bold`}
                        onClick={handleAddComment}
                        disabled={!inputText ? true: false}
                        // disabled
                    >
                        Comment
                    </button>
                </div> : null
            }

        </div>
    )
}
