import React , { useState, useEffect }from 'react'

const API_KEY = '8hu71URNzm7FCLV9LfDPd9Gz61zN2diV6kG2hDEw'

const Index = () => {
    const [shippingMethods, setShippingMethods] = useState([])
    const [offDays, setOffDays] = useState([])

    useEffect(() => {
        fetch('https://yhua9e1l30.execute-api.us-east-1.amazonaws.com/sandbox/shipping-methods', {
            method: 'GET',
            headers: {
                'x-api-key': API_KEY,
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => setShippingMethods(data))
            .catch(error => alert(error))

        fetch('https://yhua9e1l30.execute-api.us-east-1.amazonaws.com/sandbox/off-days', {
            method: 'GET',
            headers: {
                'x-api-key': API_KEY,
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => setOffDays(data))
            .catch(error => alert(error))

        fetch('https://localhost:5001/api/orders', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => alert(error))

    }, [])
    return (
        <div>
            {shippingMethods.map(x => (
                <div key={x.id}>{x.id} - {x.name}</div>
            ))}
        </div>
    )
}

export default Index
