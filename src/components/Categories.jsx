import React, { useState } from 'react'

function Categories() {
    const categories = ['All', 'Meat', 'Vegetarian', 'Grill', 'Spicy'];
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <ul class="categories">
            {categories.map((item, index) => {
                return (
                    <li key={index}>
                        <button
                            type="button"
                            onClick={() => setActiveIndex(index)}
                            className={activeIndex === index ? 'active' : ''}
                        >
                            {item}
                        </button>
                    </li>
                )
            })}
        </ul>
    )
}

export default Categories;
