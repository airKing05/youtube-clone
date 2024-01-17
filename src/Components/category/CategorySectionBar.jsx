import React from 'react'
import CategoryTile from './CategoryTile'

const categories = ['all', 'reactjs', 'codding', 'sports', 'music', 'movies', 'hindi', 'english', 'marvel', 'spider man', 'agriculture', 'forest', 'bhajan', 'tourist', 'travel', 'jaipur', 'bollywood', 'hollywood', 'web-series'
]

export default function CategorySectionBar() {

    return (
        <div className='d-flex p-2 pe-5 w-60, categories__bar'>
            {
                categories.map((category, index) => {
                    return <React.Fragment key={category}>
                        <CategoryTile category={category}/>
                    </React.Fragment>
                })
            }
        </div>
    )
}
