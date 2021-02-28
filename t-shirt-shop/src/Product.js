import React, { useState } from 'react';
import tshirts from './tshirts.json';

function StarRating({ count = 5,
    inactiveColor = '#ddd', activeColor = 'yellow',
    size = 40,
    value, onChange }) {

    const stars = Array.from({ length: count }, () => '🟊')

    const handleChange = (value) => {
        onChange(value + 1);
    }

    return (
        <div>

            {stars.map((shape, index) => {
                let style = inactiveColor;
                if (index < value) {
                    style = activeColor;
                }
                return (
                    <span className="star"
                        key={index}
                        style={{ color: style, width: size, height: size, fontSize: size }}
                        onClick={() => handleChange(index)}>{shape}</span>
                )
            })}
            {value}

        </div>
    )
}

function Product(props) {
    const [rating, setRating] =  useState(0);

    const handleChange = (value) => {
        setRating(value);
    }

    return <div className="card">
        <div>

            <div className="tshirt">
                <img id={props.idAttribute} src={props.imageAttribute.img} />
                <div>
                    <a href="#" className="buy">Buy Now</a>
                </div>

                <h2>Title:{props.titleAttribute.title}</h2>
                <h2>Manufacture:{props.manufactAttribute.manufacturer}</h2>
                <h2 className="price">Price:{props.priceAttribute.price}</h2>
            </div>


        </div>
        <div>
            {props.availableColors.map(Color => <div>
                <button style={{ backgroundColor: Color.color }} > {Color.name}</button>
            </div>)}

        </div>
        <div>

            <StarRating
                value={rating}
                onChange={handleChange}
            />

        </div>

    </div>

}
export default Product;
