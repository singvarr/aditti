import React, { Component, RefObject } from "react";
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import "./CategoriesCarousel.less";
import { CategoryType } from "types/categories";

type Props = {
    categories: Array<CategoryType>
}

class CategoriesCarousel extends Component<Props> {
    private categories: RefObject<HTMLDivElement>;
    private slidesPerView: number;

    private constructor(props: Props) {
        super(props);

        this.categories = React.createRef();
        this.slidesPerView = 3;
    }

    componentDidMount() {
        new Swiper(this.categories.current, {
            slidesPerView: this.slidesPerView
        });
    }

    render() {
        return this.props.categories.length ? (
            <div className="swiper-container" ref={this.categories}>
                <div className="swiper-wrapper">
                    {this.props.categories.map(category => {
                        return (
                            <div
                                className="swiper-slide category"
                                key={category.name}
                            >
                                <div className="category__img-container">
                                    <img
                                        alt={category.name}
                                        className="category__img"
                                        src={category.src}
                                    />
                                </div>
                                <div className="category__info">
                                    <div className="category__name">
                                        {category.name}
                                    </div>
                                    <button
                                        className="category__btn"
                                        name="shop"
                                        type="button"
                                    >
                                        Buy
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        ) : null;
    }
}

export default CategoriesCarousel;
