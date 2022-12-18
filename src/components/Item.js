import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Rating } from 'react-simple-star-rating'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'

const Item = ({ items, addToCart }) => {
    const { itemId } = useParams()
    const item = items.find((item) => (item.id === parseInt(itemId)))
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [price, setPrice] = useState('')
    const [size, setSize] = useState('7')
    const [quantity, setQuantity] = useState(1)
    const [reviews, setReviews] = useState([])

    const handleClick = (e) => {
        e.preventDefault()
        const subTotal = price * quantity
        addToCart({ itemId, name, image, price, subTotal, size, quantity, reviews })
    }

    useEffect(() => {
        setName(item.name)
        setImage(item.image)
        setPrice(item.price)
        setReviews(item.reviews)
    }, [])

    return (
        <div className='item'>
            <Link to='/'>
                <div className='home-link'>
                    <FontAwesomeIcon icon={faArrowLeftLong} /> Go back Home
                </div>
            </Link>
            <div className='item-body'>
                <div className='item-img'>
                    <img src={item.image} alt={item.name} />
                </div>
                <div className='item-desc'>
                    <h1>{item.name}</h1>
                    <p>{item.description}</p>
                    <form>
                        <div className='item-desc-sizes' onChange={e => setSize(e.target.value)}>
                            <span>Sizes:</span><br></br>
                            <input type='radio' name='sizes' id='size-7' value='7' defaultChecked />
                            <label htmlFor='size-7'>7</label>
                            <input type='radio' name='sizes' id='size-8' value='8' />
                            <label htmlFor='size-8'>8</label>
                            <input type='radio' name='sizes' id='size-9' value='9' />
                            <label htmlFor='size-9'>9</label>
                            <input type='radio' name='sizes' id='size-10' value='10' />
                            <label htmlFor='size-10'>10</label>
                            <input type='radio' name='sizes' id='size-11' value='11' />
                            <label htmlFor='size-11'>11</label>
                        </div>
                        <div className='item-desc-quantity'>
                            <span>Quantity:</span><br></br>
                            <input type='number' min={1} value={quantity} onChange={e => setQuantity(e.target.value)} />
                        </div>
                        <div className='item-desc-button'>
                            <button onClick={(e) => handleClick(e)}>Add to Cart</button>
                        </div>
                    </form>
                    <h2>Reviews:</h2>
                    {reviews.map((review, index) => (
                        <div className='item-desc-review' key={index}>
                            <div className='item-desc-rating'>
                                <Rating
                                    initialValue={review.rating}
                                    readonly={true}
                                    size={25}
                                    fillColor='#157A6E'
                                />
                            </div>
                            <p>{review.feedback}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Item