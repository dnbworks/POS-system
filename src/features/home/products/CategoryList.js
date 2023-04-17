
const CategoryList = ({categories}) => {

    return (
        <div className='category_list d-flex'>
            {categories.map((item) => {
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