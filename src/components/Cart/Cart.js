import React from 'react';
import Card from 'react-bootstrap/Card';
const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const element = cart[i];
        total = total + element.price;
    }
    return (
        <div className="text-center bg-info">
            <Card.Header>Order Summary</Card.Header>
                <Card.Body>
                <Card.Title>Items Ordered: {cart.length} </Card.Title>
                <Card.Text>
                Total: {total}
                </Card.Text>
                </Card.Body>
                {
                props.cart.map(x => {
                    return(
                        <Card>
                            <Card.Img variant="top" src={x.img}/>
                            <Card.Body>
                                <Card.Title>{x.name}</Card.Title>
                                <Card.Text>
                                {x.description}
                                </Card.Text>
                                <Card.Text className="bg-dark text-white">
                                Price: {x.price}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    )
                })
            }            
        </div>
    );
};

export default Cart;