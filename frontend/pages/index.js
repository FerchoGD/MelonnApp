import React , { useState, useEffect } from 'react'
import Link from 'next/link'
import { useSWR } from 'swr'

import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { faListAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const API_KEY = '8hu71URNzm7FCLV9LfDPd9Gz61zN2diV6kG2hDEw'

const Index = () => {
    const [offDays, setOffDays] = useState([])

    useEffect(() => {
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

    }, [])
    return (
        <div className={'columns'} style={{ margin: '25rem 0 0 40rem'}}>
            <Link href={'/createOrder'}>
            <button className={'button is-light'}>
                <FontAwesomeIcon icon={faPlusCircle} style={{ marginRight: '5px' }}/>
                    Crear
            </button>
            </Link>
            <Link href={'/orderList'}>
            <button className={'button is-primary'} style={{ marginLeft: '1rem' }}>
                <FontAwesomeIcon icon={faListAlt} style={{ marginRight: '5px' }}/>
                Ver listado de ordenes
            </button>
            </Link>
        </div>
    )
}

export default Index
