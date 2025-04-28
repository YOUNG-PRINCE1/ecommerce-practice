import React from 'react'
import Card from '../Cardfiles/Card'
import "./Bestseller.css"
import all_products from '../../assets/product'

const Bestseller = () => {
  return (
    <div className='new_collections bestseller'>
        <h1>Top Rated Pick</h1>
        <p>Currated by our shoppers. Trusted loved and re-ordered multiple times</p>
        <div className='collections'>
          {all_products.map((card, i)=>{
            return<Card key={i} id={card.id} name={card.name} img={card.img} new_price={card.new_price} old_price={card.old_price}/>
          })}
        </div>
    </div>
  )
}

export default Bestseller