import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from "next/link";

const SellOrderPage  = () => {
    const router = useRouter()
    const { id } = router.query
    const [order, setOrder] = useState(undefined)
    console.log(order)

    useEffect (() => {
        fetch(`https://localhost:5001/melonn/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => setOrder(data))
            .catch(error => alert(error))
    }, [])
    return (
        <div className={'columns'}>
            <div className={'column is-8'}>
                <div className={'container'}
                     style={{ backgroundColor: 'white', borderRadius: '5px' , margin: '2rem 0 0 2rem' }}>
                    <h3 className={'subtitle'}><b>Sell order</b></h3>
                    {order !== undefined && (
                        <table className={'table is-bordered is-centered'}>
                            <thead>
                                <tr>
                                    <th>Number</th>
                                    <th>{order.number}</th>
                                </tr>
                                <tr>
                                    <th>External Order Number</th>
                                    <th>{order.externalOrderNumber}</th>
                                </tr>
                                <tr>
                                    <th>Seller Store</th>
                                    <th>{order.sellerStore}</th>
                                </tr>
                                <tr>
                                    <th>Shipping Address</th>
                                    <th>{order.shippingAddress}</th>
                                </tr>
                                <tr>
                                    <th>Shipping City</th>
                                    <th>{order.shippingCity}</th>
                                </tr>
                                <tr>
                                    <th>Shipping Country</th>
                                    <th>{order.shippingCountry}</th>
                                </tr>
                                <tr>
                                    <th>Shipping Method</th>
                                    <th>{order.shippingMethod}</th>
                                </tr>
                                <tr>
                                    <th>Shipping Region</th>
                                    <th>{order.shippingRegion}</th>
                                </tr>
                                <tr>
                                    <th>Buyer Email</th>
                                    <th>{order.buyerEmail}</th>
                                </tr>
                                <tr>
                                    <th>Buyer FullName</th>
                                    <th>{order.buyerFullName}</th>
                                </tr>
                                <tr>
                                    <th>Buyer Phone</th>
                                    <th>{order.buyerPhone}</th>
                                </tr>
                                <tr>
                                    <th>Created On</th>
                                    <th>{order.createdOn}</th>
                                </tr>
                            </thead>
                        </table>
                    )}
                    <Link href={'/'}>
                        <button className={'button is-light'}>
                            Volver
                        </button>
                    </Link>
                </div>
            </div>
            <div className={'column'}>
                <div className={'container'}
                     style={{ backgroundColor: 'white', borderRadius: '5px' , margin: '2rem 0 0 2rem' }}>
                    <h4 className={'subtitle'}>Items for this order</h4>
                    {order !== undefined && (
                        <table className={'table is-bordered is-hoverable'}>
                            <thead>
                            <th>Name</th>
                            <th>qty</th>
                            <th>Weight</th>
                            </thead>
                            <tbody>
                            {order.items.map(x => (
                                <tr key={x.id}>
                                    <td>{x.name}</td>
                                    <td>{x.qty}</td>
                                    <td>{x.weight}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
    )
}

export default SellOrderPage
