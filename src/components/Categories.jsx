function Categories({categoryId, onChangeCategory}) {
    const categories = ['All', 'Meat', 'Vegetarian', 'Grill', 'Spicy', 'Chees'];
    
    return (
        <ul className="categories">
            {categories.map((categoriesName, index) => {
                return (
                    <li key={index}>
                        <button
                            type="button"
                            onClick={() => onChangeCategory(index)}
                            className={categoryId === index ? 'active' : ''}
                        >
                            {categoriesName}
                        </button>
                    </li>
                )
            })}
        </ul>
    )
}

export default Categories;
