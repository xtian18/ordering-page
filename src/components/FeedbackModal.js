import React from 'react'
import { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

const FeedbackModal = ({ setItemsToRate, setIsFeedbackOpen, selected, items, setItems }) => {
    const [rating, setRating] = useState(5)
    const [feedback, setFeedback] = useState('')

    const handleRating = (rate) => {
        setRating(rate)
    }

    const handleSubmit = () => {
        const newItems = items.map((item) => (
            item.id === parseInt(selected.itemId )?
                {
                    ...item,
                    reviews: [...item.reviews, {rating, feedback}]
                }
                : item
        ))
        setItems(newItems)
        setItemsToRate((itemsToRate) => itemsToRate.filter((item) => item.itemId !== selected.itemId))
        setIsFeedbackOpen(false)
    }

    return (
        <div className='feedback-modal'>
            <div className='feedback-modal-container'>
                <button className='close' onClick={() => setIsFeedbackOpen(false)}>X</button>
                <div className='feedback-modal-container-img'>
                    <img src={selected.image} alt={selected.name} />
                </div>
                <div className='feedback-modal-container-input'>
                    <h2>{selected.name}</h2>
                    <h3>Rating:</h3>
                    <Rating
                        onClick={handleRating}
                        initialValue={rating}
                        size={40}
                        fillColor='#157A6E'
                    />
                    <h3>Feedback:</h3>
                    <textarea value={feedback} onChange={(e) => setFeedback(e.target.value)}></textarea>
                    <button className='submit' onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default FeedbackModal