import { useState, useCallback, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.js'
import Home from './components/Home.js'
import Cart from './components/Cart.js'
import Item from './components/Item.js'
import Feedback from './components/Feedback.js'

const App = () => {
    const [items, setItems] = useState([
        {
            id: 1,
            name: 'Jordan Delta 3 Mid',
            image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/bdd369b0-4469-4d3b-8925-af39faede5a3/jordan-delta-3-mid-shoes-WwnTQl.png',
            price: 8395,
            description: "Inspired by '90s on-court gear and the Space-Age aesthetic, the Delta 3 is ready to launch. With super-lightweight technical materials, they have a retro-futuristic look and feel. This is the next-gen footwear that's gonna take you into tomorrow.",
            reviews: [
                {
                    rating: 4,
                    feedback: 'i like it!'
                },
                {
                    rating: 1,
                    feedback: 'too big :<'
                },
                {
                    rating: 5,
                    feedback: 'i love it so much <3'
                }
            ]
        },
        {
            id: 2,
            name: 'Nike Air Max 1',
            image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/aa782e70-2c4a-4bcb-96cf-330d782513d6/air-max-1-2-shoes-92GFD3.png',
            price: 9895,
            description: "Casual flair 101: Hemp canvas, check. Suede mudguard, check. Crepe outsole aesthetic, check. Turning back the clocks to 2004, we're reissuing the coveted Air Max 1 'Crepe Hemp'. For a high-end finish, its distinct (and super-soft) outsole adds an air of sophistication that'll keep heads turning. Step on in, there's no containing your next move.",
            reviews: [
                {
                    rating: 4,
                    feedback: 'i like it!'
                },
                {
                    rating: 1,
                    feedback: 'too big :<'
                },
                {
                    rating: 5,
                    feedback: 'i love it so much <3'
                }
            ]
        },
        {
            id: 3,
            name: 'Zoom Freak 4',
            image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ce34fed8-0d6d-4cb0-8dd7-da2281d450aa/zoom-freak-4-kolossaio-basketball-shoes-zmXv3D.png',
            price: 7095,
            description: "Giannis is an incessant storm of stamina and skill that keeps coming at opponents for 4 quarters or more. The forward-thinking design of his latest signature shoe helps propel you down the court in a lightweight fit that moves with you. It can handle quick changes in direction on both sides of the floor, giving you side-to-side stability and multi-directional traction as you Euro step to the hoop. This special design is inspired by Giannis's 1-and-only last name, 1 that befuddles both fans and analysts alike.",
            reviews: [
                {
                    rating: 4,
                    feedback: 'i like it!'
                },
                {
                    rating: 1,
                    feedback: 'too big :<'
                },
                {
                    rating: 5,
                    feedback: 'i love it so much <3'
                }
            ]
        },
        {
            id: 4,
            name: 'Zion 2 PF',
            image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c08d8346-247d-4417-8171-d28d1df94425/zion-2-pf-basketball-shoes-pwN2Q4.png',
            price: 6595,
            description: "Channel new levels of speed and power in shoes designed for Zion and built for ballers at any level. An adjustable strap up top helps lock your foot in place while a firm midsole supports high-paced play. A wider outsole provides extra stability—perfect for playing on outdoor courts. And the Zion 2 has more Air cushioning than its predecessor, so you'll get into the clouds easier and land softer.",
            reviews: [
                {
                    rating: 4,
                    feedback: 'i like it!'
                },
                {
                    rating: 1,
                    feedback: 'too big :<'
                },
                {
                    rating: 5,
                    feedback: 'i love it so much <3'
                }
            ]
        },
        {
            id: 5,
            name: 'Lebron XX EP',
            image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1acc05e6-b796-42b9-a3b3-39c9bd438d30/lebron-xx-ep-basketball-shoes-dpQwl8.png',
            price: 10895,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed faucibus turpis in eu mi bibendum neque egestas congue. Maecenas ultricies mi eget mauris pharetra et ultrices neque ornare.',
            reviews: [
                {
                    rating: 4,
                    feedback: 'i like it!'
                },
                {
                    rating: 1,
                    feedback: 'too big :<'
                },
                {
                    rating: 5,
                    feedback: 'i love it so much <3'
                }
            ]
        },
        {
            id: 6,
            name: 'Nike Go FlyEase',
            image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/11da0526-2657-4e9d-8bfe-efe59661a6f9/go-flyease-shoes-3svRCL.png',
            price: 7095,
            description: "Ditch the laces and get outside. These kicks feature Nike's revolutionary FlyEase technology, making on-and-off a breeze. With a heel that pivots open for a totally hands-free entry, they're great for people with limited mobility—or anyone who wants a quicker way to get going.",
            reviews: [
                {
                    rating: 4,
                    feedback: 'i like it!'
                },
                {
                    rating: 1,
                    feedback: 'too big :<'
                },
                {
                    rating: 5,
                    feedback: 'i love it so much <3'
                }
            ]
        },
        {
            id: 7,
            name: 'Nike Air Max Excee',
            image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/4f86dbd8-8ead-41f5-99fb-7c03d84bbcc2/air-max-excee-shoes-36q48J.png',
            price: 5895,
            description: "Get into the groove with the Nike Air Max Excee. Earthy neutrals pair with subtle pops of fresh colour to give you style that defies time. Inspired by the Nike Air Max 90, these kicks deliver a modern twist on a legendary icon through elongated design lines and distorted proportions.",
            reviews: [
                {
                    rating: 4,
                    feedback: 'i like it!'
                },
                {
                    rating: 1,
                    feedback: 'too big :<'
                },
                {
                    rating: 5,
                    feedback: 'i love it so much <3'
                }
            ]
        },
        {
            id: 8,
            name: 'Nike Quest 4',
            image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/1ba546b2-938f-4fe6-be0f-6de84c7e2706/quest-4-road-running-shoes-Mcc8D3.png',
            price: 3895,
            description: "The pursuit of speed continues with the Nike Quest 4. Take on the streets with higher foam heights and cushioned comfort that combine with a lightweight upper to offer secure support. Intuitive details make it a staple for the everyday runner.",
            reviews: [
                {
                    rating: 4,
                    feedback: 'i like it!'
                },
                {
                    rating: 1,
                    feedback: 'too big :<'
                },
                {
                    rating: 5,
                    feedback: 'i love it so much <3'
                }
            ]
        },
        {
            id: 9,
            name: 'Nike Spark',
            image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/45b5d537-a7ea-4aba-b7b6-08bd8337a3a4/spark-shoes-zPVQHZ.png',
            price: 7595,
            description: "Put a little spark in your step. These thoughtfully crafted kicks pair luxe comfort with extra stability—without sacrificing style. The dual-foam midsole, pillowy collar and plush tongue keep you cushioned while a sleek design and textured pull tab bring energy to any 'fit.",
            reviews: [
                {
                    rating: 4,
                    feedback: 'i like it!'
                },
                {
                    rating: 1,
                    feedback: 'too big :<'
                },
                {
                    rating: 5,
                    feedback: 'i love it so much <3'
                }
            ]
        },
        {
            id: 10,
            name: 'Air Jordan 1 Elevate Low',
            image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b2644d3d-b924-4003-9f81-c907c56eec96/air-jordan-1-elevate-low-shoes-XlkVrM.png',
            price: 7095,
            description: "Rise to the occasion in style that soars. This shoe reworks an icon's original magic with a platform sole and low-cut silhouette. Air cushioning keeps you lifted, and sleek leather in contrasting colours adds visual interest.",
            reviews: [
                {
                    rating: 4,
                    feedback: 'i like it!'
                },
                {
                    rating: 1,
                    feedback: 'too big :<'
                },
                {
                    rating: 5,
                    feedback: 'i love it so much <3'
                }
            ]
        },
        {
            id: 11,
            name: 'Nike BRSB',
            image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/1981760c-1d20-4031-b678-b239f4493dc8/brsb-skate-shoes-RJF3Ss.png',
            price: 4495,
            description: "A familiar favourite is reborn in the Nike BRSB. Almost every detail, from the colour-blocking to the sawtooth pattern on the sole, was inspired by the original Nike Cortez. But, because this shoe is built for skate, we added extras where they're needed—like the rubber from the sole that wraps up and over the heel and toe for durability. It also wraps the sides, adding an extra layer to high-use areas, like the ollie zone.",
            reviews: [
                {
                    rating: 4,
                    feedback: 'i like it!'
                },
                {
                    rating: 1,
                    feedback: 'too big :<'
                },
                {
                    rating: 5,
                    feedback: 'i love it so much <3'
                }
            ]
        },
        {
            id: 12,
            name: 'Nike ACG Lowcate',
            image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/f8fbabfa-0bb4-461b-a7cc-56e276a610e4/acg-lowcate-shoes-HjWrQ6.png',
            price: 6195,
            description: 'From streets to parks to trails, build up the miles in these city-to-adventure shoes. Designed and tested in the rugged Pacific Northwest, the mixed-material upper pairs durability with easy styling. A rubber outsole with a heavy-duty, tuned lug pattern grips slick and rocky terrain, so you can go up, down, through and around.',
            reviews: [
                {
                    rating: 4,
                    feedback: 'i like it!'
                },
                {
                    rating: 1,
                    feedback: 'too big :<'
                },
                {
                    rating: 5,
                    feedback: 'i love it so much <3'
                }
            ]
        }
    ])
    const [cartItems, setCartItems] = useState([])
    const [total, setTotal] = useState(0)
    const [itemsToRate, setItemsToRate] = useState([])
    const [isFeedbackOpen, setIsFeedbackOpen] = useState(false)

    useEffect(() => {
        computeTotal()
    }, [cartItems])

    const addToCart = (item) => {
        const foundIndex = cartItems.findIndex(cartItem => cartItem.name === item.name && cartItem.size === item.size)
        if (foundIndex >= 0) {
            addItemCount(foundIndex, parseInt(item.quantity))
        } else {
            setCartItems(cartItems => [...cartItems, item])
        }
    }

    const addItemCount = (foundIndex, increment = 1) => {
        const newCartItems = cartItems.map((cartItem, index) => (
            index === foundIndex ?
                {
                    ...cartItem,
                    quantity: parseInt(cartItem.quantity) + increment,
                    subTotal: (parseInt(cartItem.quantity) + increment) * cartItem.price
                }
                : cartItem
        ))
        setCartItems(newCartItems)
    }

    const reduceItemCount = (foundIndex, decrement = 1) => {
        const newCartItems = cartItems.map((cartItem, index) => (
            index === foundIndex ?
                {
                    ...cartItem,
                    quantity: parseInt(cartItem.quantity) - decrement,
                    subTotal: (parseInt(cartItem.quantity) - decrement) * cartItem.price
                }
                : cartItem
        ))
        setCartItems(newCartItems)
        removeZeroItem()
    }

    const removeZeroItem = useCallback(() => {
        setCartItems(cartItems => cartItems.filter(cartItem => cartItem.quantity > 0))
    }, [cartItems])

    const removeItem = (itemIndex) => {
        setCartItems(cartItems => cartItems.filter((cartItem, index) => index !== itemIndex))
    }

    const computeTotal = () => {
        let countTotal = 0
        for (const cartItem of cartItems) {
            countTotal = countTotal + cartItem.subTotal
        }
        setTotal(countTotal)
    }

    return (
        <div className='app'>
            <Header />
            <Routes>
                <Route path='/' element={
                    <Home
                        items={items}
                    />}
                />
                <Route path='/cart' element={
                    <Cart
                        cartItems={cartItems}
                        addItemCount={addItemCount}
                        reduceItemCount={reduceItemCount}
                        removeItem={removeItem}
                        total={total}
                    />}
                />
                <Route path='/:itemId' element={
                    <Item
                        items={items}
                        addToCart={addToCart}
                    />}
                />
                <Route path='/feedback' element={
                    <Feedback
                        cartItems={cartItems}
                        setCartItems={setCartItems}
                        itemsToRate={itemsToRate}
                        setItemsToRate={setItemsToRate}
                        isFeedbackOpen={isFeedbackOpen}
                        setIsFeedbackOpen={setIsFeedbackOpen}
                        items={items}
                        setItems={setItems}
                    />}
                />
            </Routes>
        </div>
    )
}

export default App