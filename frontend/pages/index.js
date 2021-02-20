import React , { useState, useEffect }from 'react'

const API_KEY = '8hu71URNzm7FCLV9LfDPd9Gz61zN2diV6kG2hDEw'

const Index = () => {
    const [data, setData] = useState([])
    console.log(data)

    useEffect(() => {
        fetch('https://yhua9e1l30.execute-api.us-east-1.amazonaws.com/sandbox/shipping-methods', {
            method: 'GET',
            headers: {
                'x-api-key': API_KEY,
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => alert(error))
    }, [])
    return (
        <div>
            {data.map(x => (
                <div key={x.id}>{x.name}</div>
            ))}
        </div>
    )
}

export default Index
