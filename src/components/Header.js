import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <div className='header'>
            <h1>Welcome</h1>
            <span><strong>SHOKEN</strong> is your number one source of brand new shoes!</span>
            <div className='header-cart'>
                <Link to='/cart'><button><FontAwesomeIcon icon={faCartShopping} /></button></Link>
            </div>
        </div>
    )
}

export default Header