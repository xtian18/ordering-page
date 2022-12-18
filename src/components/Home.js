import { Link } from 'react-router-dom'

const Home = ({ items }) => {
    return (
        <div className='home'>
            {items.map((item, index) => (
                
                <div className='home-item' key={index}>
                    <div className='home-item-img'>
                        <img src={item.image} alt={item.name} />
                        <span>
                            <Link to={`/${item.id}`}><button>See Details</button></Link>
                        </span>
                    </div>
                    <div className='home-item-desc'>
                        <h2>{item.name}</h2>
                        <span>&#8369; {item.price.toLocaleString('en-US')}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Home