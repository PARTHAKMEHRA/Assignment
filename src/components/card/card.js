import {Fragment} from 'react';
import Button from '../Button/button';
import './card.css'

export default function Card({image,productDetails}){
    return (
        <Fragment>
                <div className="item" id={productDetails.productId}>
                    <img className='setImage' src={image} alt={productDetails.productName}/>
                    <p>{productDetails.productName}</p>
                    <p>{productDetails.Brand}</p>
                    <p>{productDetails.Price}</p>
                    <p>{productDetails.Rating}</p>
                    <Button/>
                </div>
        </Fragment>
    )
}