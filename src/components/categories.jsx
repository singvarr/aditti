import React from "react";
import Carousel from "nuka-carousel";

function Categories(props) {
    return (
        <Carousel >
        {props.categories.map((category, index) => {
            return <div className="category" key={index}>
                <div className="category-img">
                    <img src={category.src} alt={category.name}/>
                </div>
                <div className="category-title">
                    <span>{category.name}</span>
                    <button name="shop"
                        onClick={() => props.onFilter(category.name)}
                    >Buy</button>
                </div>
            </div>
        })}
        </Carousel>
    )
}

export default Categories;