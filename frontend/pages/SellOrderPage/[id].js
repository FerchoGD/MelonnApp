import React from 'react'
import { useRouter } from 'next/router'

const SellOrderPage  = () => {
    const router = useRouter()
    const { id } = router.query
    return (
        <div>Acá va la vista de la orden # {id}</div>
    )
}

export default SellOrderPage
