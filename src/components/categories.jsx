import React, {Component} from "react";
import Carousel from "nuka-carousel";

const decoratorStyle = {
    width: 30,
    height: 90,
    outline: 'none',
    border: 'none',
    background: "url('./assets/img/control-left.png') 50% 50%"
}

class Categories extends Component {
    render() {
        return (
            <Carousel 
                width={1024}
                slidesToShow={3}
                ref="carousel"
                dragging={false}
                style={{margin: '0 auto'}}
                decorators={[
                    {
                        component: () => <button
                            style={decoratorStyle} 
                            onClick={() => this.refs.carousel.previousSlide()}/>,
                        position: 'CenterLeft',
                        style: {left: -40}
                    },
                    {
                        component: () => <button 
                            style={Object.assign({}, decoratorStyle, {transform: 'rotate(180deg)'})}
                            onClick={() => this.refs.carousel.nextSlide()}/>,
                        position: 'CenterRight',
                        style: {right: -40}
                    },
                ]}
            >
                {this.props.categories.map((category, index) => {
                    return <div className="category" key={index}>
                        <div className="category-img">
                            <img src={category.src} alt={category.name}/>
                        </div>
                        <div className="category-title">
                            <span>{category.name}</span>
                            <button name="shop"
                                onClick={() => this.props.onFilter(category.name)}
                            >Buy</button>
                        </div>
                    </div>
                })}
            </Carousel>
        )
    }
}

export default Categories;