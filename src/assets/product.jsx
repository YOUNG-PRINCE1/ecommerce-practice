import IMG9 from './samsung_galaxy-note-20.jpg'
import IMG10 from './samsungs24ultra.jpeg'
import IMG11 from './store4.png'
import IMG12 from './store5.png'
import IMG13 from './storeflower1.png'
import IMG14 from './iPhone15Plus.jpg'
import IMG15 from './t-shirt2.jpg'
import IMG16 from './t-shirt.jpg'
import IMG17 from './storeflower2.png'
import IMG18 from './menshirt2.jpeg'
import IMG19 from './menshirt1.jpeg'
import IMG20 from './store6.png'


const all_products = [
    {
        id : 6,
        name : "Clear Colored Flower",
        category : "flower",
        img : IMG13 ,
        old_price : 10 ,
        new_price : 9.80,
        description:
            'This elegant Clear Emerald Flower is a radiant botanical piece that adds a touch of nature and luxury to any setting. Its shimmering emerald-green petals glisten under natural light, creating a soothing visual centerpiece. Perfect for home decor, gifts, or ceremonial displays, it embodies freshness and elegance. Its long-lasting blooms and subtle fragrance make it ideal for uplifting the mood of any room, whether used in solitude or as part of a larger bouquet. A must-have for flower lovers and those who appreciate delicate, ornamental beauty.'

    },
    {
        id : 7,
        name : "Blue Flower Verse",
        category : "flower",
        img : IMG11 ,
        old_price : 15 ,
        new_price : 14.80,
        description:
            'The Elizabeth Vine is a gracefully trailing flower known for its timeless charm and vibrant green foliage. With soft violet blooms and a refined aroma, this floral masterpiece brings a vintage yet fresh ambiance to any environment. Named after royalty, it symbolizes elegance and resilience. It is best placed in decorative vases or hanging baskets where its flowing leaves can cascade beautifully. Ideal for romantic settings, special occasions, or everyday aesthetic elevation, the Elizabeth Vine is a botanical treasure that never fails to impress.'

    },
    {
        id : 8,
        name : "Samsung Galaxy Note 20",
        category : "phone",
        img : IMG9,
        old_price : 700 ,
        new_price : 699.80,
        description:
            'Our Rose flower selection features a classic and timeless bloom beloved across cultures for its rich symbolism of love and passion. This particular variety boasts deep red petals with velvety texture, making it a romantic centerpiece for any bouquet. Its intoxicating scent fills the room, bringing warmth and elegance. Perfect for anniversaries, Valentine’s Day, or simply expressing affection, these roses are cultivated with care to ensure lasting freshness. A staple in floral arrangements and an unforgettable gift.'

    },
    {
        id : 9,
        name : "Samsung S24 Ultra",
        category : "phone",
        img : IMG10 ,
        old_price : 15 ,
        new_price : 14.80,
        description:
            'This cheerful Sun Flower is a burst of sunshine captured in floral form. Known for its bright yellow petals and tall, proud stems, it instantly lights up any room or garden. Symbolizing loyalty and happiness, sunflowers are popular for celebrations and get-well wishes. Their broad faces follow the sun throughout the day, giving them a dynamic, life-filled quality. Ideal for rustic decor or vibrant floral mixes, these flowers are as energetic as they are beautiful.'
  
    },
    {
        id : 10,
        name : "White Flower & Verse",
        category : "flower",
        img : IMG12 ,
        old_price : 50 ,
        new_price : 49.50,
        description:
        'This cheerful Sun Flower is a burst of sunshine captured in floral form. Known for its bright yellow petals and tall, proud stems, it instantly lights up any room or garden. Symbolizing loyalty and happiness, sunflowers are popular for celebrations and get-well wishes. Their broad faces follow the sun throughout the day, giving them a dynamic, life-filled quality. Ideal for rustic decor or vibrant floral mixes, these flowers are as energetic as they are beautiful.'
  
    },
    {
        id : 11,
        name : "Iphone 15 Pluse",
        category : "phone",
        img : IMG14 ,
        old_price : 1000 ,
        new_price : 999.80,
        description:
        'This cheerful Sun Flower is a burst of sunshine captured in floral form. Known for its bright yellow petals and tall, proud stems, it instantly lights up any room or garden. Symbolizing loyalty and happiness, sunflowers are popular for celebrations and get-well wishes. Their broad faces follow the sun throughout the day, giving them a dynamic, life-filled quality. Ideal for rustic decor or vibrant floral mixes, these flowers are as energetic as they are beautiful.'
  
    },
    {
        id : 12,
        name : "Beach Round Neck",
        category : "cloth",
        img : IMG15 ,
        old_price : 20 ,
        new_price : 19.80,
        description:
        'This cheerful Sun Flower is a burst of sunshine captured in floral form. Known for its bright yellow petals and tall, proud stems, it instantly lights up any room or garden. Symbolizing loyalty and happiness, sunflowers are popular for celebrations and get-well wishes. Their broad faces follow the sun throughout the day, giving them a dynamic, life-filled quality. Ideal for rustic decor or vibrant floral mixes, these flowers are as energetic as they are beautiful.'
  
    },
    {
        id : 13,
        name : "Round Neck",
        category : "cloth",
        img : IMG16 ,
        old_price : 20 ,
        new_price : 19.50,
        description:
        'This cheerful Sun Flower is a burst of sunshine captured in floral form. Known for its bright yellow petals and tall, proud stems, it instantly lights up any room or garden. Symbolizing loyalty and happiness, sunflowers are popular for celebrations and get-well wishes. Their broad faces follow the sun throughout the day, giving them a dynamic, life-filled quality. Ideal for rustic decor or vibrant floral mixes, these flowers are as energetic as they are beautiful.'
  
    },
    {
        id : 14,
        name : "Stuning Red Rose",
        category : "flower",
        img : IMG17 ,
        old_price : 20 ,
        new_price : 19.80,
        description:
        'This cheerful Sun Flower is a burst of sunshine captured in floral form. Known for its bright yellow petals and tall, proud stems, it instantly lights up any room or garden. Symbolizing loyalty and happiness, sunflowers are popular for celebrations and get-well wishes. Their broad faces follow the sun throughout the day, giving them a dynamic, life-filled quality. Ideal for rustic decor or vibrant floral mixes, these flowers are as energetic as they are beautiful.'
  
    },
    {
        id : 15,
        name : "Combat T-shirt",
        category : "cloth",
        img : IMG18 ,
        old_price : 30 ,
        new_price : 28.50,
        description:
        'This cheerful Sun Flower is a burst of sunshine captured in floral form. Known for its bright yellow petals and tall, proud stems, it instantly lights up any room or garden. Symbolizing loyalty and happiness, sunflowers are popular for celebrations and get-well wishes. Their broad faces follow the sun throughout the day, giving them a dynamic, life-filled quality. Ideal for rustic decor or vibrant floral mixes, these flowers are as energetic as they are beautiful.'
  
    },
    {
        id : 16,
        name : "Casual T-shirt",
        category : "cloth",
        img : IMG19 ,
        old_price : 30 ,
        new_price : 28.50,
        description:
        'This cheerful Sun Flower is a burst of sunshine captured in floral form. Known for its bright yellow petals and tall, proud stems, it instantly lights up any room or garden. Symbolizing loyalty and happiness, sunflowers are popular for celebrations and get-well wishes. Their broad faces follow the sun throughout the day, giving them a dynamic, life-filled quality. Ideal for rustic decor or vibrant floral mixes, these flowers are as energetic as they are beautiful.'
  
    },
    {
        id : 17,
        name : "White Verse & Flower",
        category : "flower",
        img : IMG12 ,
        old_price : 50 ,
        new_price : 49.50,
        description:
        'This cheerful Sun Flower is a burst of sunshine captured in floral form. Known for its bright yellow petals and tall, proud stems, it instantly lights up any room or garden. Symbolizing loyalty and happiness, sunflowers are popular for celebrations and get-well wishes. Their broad faces follow the sun throughout the day, giving them a dynamic, life-filled quality. Ideal for rustic decor or vibrant floral mixes, these flowers are as energetic as they are beautiful.'
  
    },
]

export default all_products