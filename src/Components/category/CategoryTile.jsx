import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GET_VIDEOS_BY_CATEGORY } from '../../redux/constants/constants';

export default function CategoryTile(props) {
    const { category } = props;

    const dispatch = useDispatch();
    const { activeCategory } = useSelector(state => state.mostPopularVideos)
    const handleCategory = () => {
        dispatch({ type: GET_VIDEOS_BY_CATEGORY, payload: category })
    }
    return (
        <span
            onClick={handleCategory}
            role="button"
            className={`${activeCategory === category ? 'bg-white text-dark' : ''}  p-2 rounded me-2 fs-6 fw-semibold`}
            style={{ background: '#333333', whiteSpace: 'nowrap' }}>
            {category}
        </span>
    )
}
