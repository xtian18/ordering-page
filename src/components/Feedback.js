import { useEffect, useState } from 'react'
import FeedbackModal from './FeedbackModal'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'

const Feedback = ({ cartItems, setCartItems, itemsToRate, setItemsToRate, isFeedbackOpen, setIsFeedbackOpen, items, setItems }) => {
    const [selected, setSelected] = useState()

    useEffect(() => {
        let toRate = cartItems.filter((cartItem, index, self) => (
            index === self.findIndex((item => (
                item.itemId === cartItem.itemId
            )))
        ))
        setItemsToRate(toRate)
        setCartItems([])
    }, [])
    return (
        <div className='feedback'>
            <Link to='/'>
                <div className='home-link'>
                    <FontAwesomeIcon icon={faArrowLeftLong} /> Go back Home
                </div>
            </Link>
            <h1>Thank you for shopping!</h1>
            <p>We value your honest opinion! Tell us what you think about the products you recently bought:</p>
            <table className='feedback-table'>
                <tbody>
                    {itemsToRate.map((itemToRate, index) => (
                        <tr key={index}>
                            <td><img src={itemToRate.image} alt={itemToRate.name} /></td>
                            <td>{itemToRate.name}</td>
                            <td><button onClick={() => { setIsFeedbackOpen(true); setSelected(itemToRate) }}>Give Feedback</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {isFeedbackOpen && <FeedbackModal
                setItemsToRate={setItemsToRate}
                setIsFeedbackOpen={setIsFeedbackOpen}
                selected={selected}
                items={items}
                setItems={setItems}
            />}
        </div>
    )
}

export default Feedback