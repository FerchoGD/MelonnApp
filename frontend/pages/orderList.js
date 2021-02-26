import React, { useState, useEffect } from 'react'
import Link from "next/link";

const OrderList = () => {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch('https://localhost:5001/melonn', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => setOrders(data))
            .catch(error => alert(error))
    }, [])
    return (
        <div className={'columns'}>
            <div className={'container column'}
                 style={{ backgroundColor: 'white', borderRadius: '5px' , margin: '2rem 0 0 2rem' }}>
                <h3 className={'subtitle'}><b>Items agregados</b></h3>
                <table className={'table is-bordered is-centered'}>
                    <thead>
                        <tr>
                            <th>Numero</th>
                            <th>Seller Store</th>
                            <th>Shipping Method</th>
                            <th>Created On</th>
                        </tr>
                    </thead>
                    <tbody>
                    {orders.map(x => (
                        <tr key={x.id}>
                            <td>
                                <Link href={`SellOrderPage/${x.id}`}>
                                    {x.number}
                                </Link>
                            </td>
                            <td>{x.sellerStore}</td>
                            <td>{x.shippingMethod}</td>
                            <td>{x.createdOn}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <Link href={'/'}>
                    <button className={'button is-light'}>
                        Volver
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default OrderList
