import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'

const Cart = ({ cartItems, addItemCount, reduceItemCount, removeItem, total }) => {
    const handleAdd = (e, index) => {
        e.preventDefault()
        addItemCount(index)
    }

    const handleReduce = (e, index) => {
        e.preventDefault()
        reduceItemCount(index)
    }

    const handleRemove = (e, index) => {
        e.preventDefault()
        removeItem(index)
    }

    return (
        <div className='cart'>
            <div>
                <Link to='/'>
                    <div className='home-link'>
                        <FontAwesomeIcon icon={faArrowLeftLong} /> Go back Home
                    </div>
                </Link>
                <h1>My Cart</h1>
                <table className='cart-table'>
                    <thead>
                        <tr>
                            <th width='10%'></th>
                            <th width='18%'>Product Name</th>
                            <th width='5%'>Size</th>
                            <th width='25%'>Quantity</th>
                            <th width='18%'>Price</th>
                            <th width='18%'>Total Price</th>
                            <th width='6%'></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map((cartItem, index) => (
                            <tr key={index}>
                                <td><img src={cartItem.image} alt={cartItem.name} /></td>
                                <td>{cartItem.name}</td>
                                <td>{cartItem.size}</td>
                                <td>
                                    <div className='cart-table-qty'>
                                        <button onClick={(e) => handleReduce(e, index)} className='left'>-</button>
                                        <input type='text' value={cartItem.quantity} id={cartItem.name+index} disabled/>
                                        <button onClick={(e) => handleAdd(e, index)} className='right'>+</button>
                                    </div>
                                </td>
                                <td>&#8369; {cartItem.price.toLocaleString('en-US')}</td>
                                <td>&#8369; {cartItem.subTotal.toLocaleString('en-US')}</td>
                                <td>
                                    <button onClick={(e) => handleRemove(e, index)} className='remove'>x</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className='cart-button'>
                    <span>Total: &#8369; {total.toLocaleString('en-US')}</span>
                    <Link  to='/feedback'><button>Checkout</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Cart