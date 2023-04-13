import React from 'react'
import { useGlobalContext } from '../../../context/AppContext';


const CategoryList = () => {
    const { state: { category } } = useGlobalContext();
    return (
        <div className='category_list d-flex'>
            {category.map((item) => {
                return (
                    <div key={item.id} className="category">
                        <p>{item.name}</p>
                    </div>
                )
            })}
        </div>
    )
}


export default CategoryList