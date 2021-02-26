import React, { useState, useEffect } from 'react'
import { Formik, Field as FormikField, FastField, Form } from 'formik'
import ReactSelect from 'react-select'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlusCircle} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
const API_KEY = '8hu71URNzm7FCLV9LfDPd9Gz61zN2diV6kG2hDEw'

const initialValues = {
    sellerStore: '',
    shippingMethod: '',
    externalOrderNumber: '',
    buyerFullName: '',
    buyerPhone: '',
    buyerEmail: '',
    shippingAddress: '',
    shippingCity: '',
    shippingRegion: '',
    shippingCountry: ''
}

const itemValues = {
    name: '',
    qty: '',
    weight: ''
}


const CreateOrder = () => {
    const [shippingMethods, setShippingMethods] = useState([])
    const [items, setItems] = useState([])
    const [isSubmitting, setIsSubmitting] = useState(false)

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
    }, [])

    const onAddItem = (values, resetForm) => {
        setIsSubmitting(true)
        setItems((prev) =>[...prev, { name: values.name, qty: values.qty, weight: values.weight }])
        resetForm(itemValues)
        setIsSubmitting(false)
    }

    const onSubmit = (values, { resetForm }) => {
        const payload = {
            number: "",
            id: 0,
            ...values,
            items: items
        }

        console.log(payload)
        fetch('https://localhost:5001/melonn', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
            .then(() => alert('guardado'))
            .catch(error => alert(error))
        resetForm(initialValues)
        setItems([])
    }

    return (
        <div className={'columns'}>
            <Link href={'/'}>
                <button className={'button is-light'}>
                    Volver
                </button>
            </Link>
            <div className={'column'}>
                <div className={'container'}
                     style={{ backgroundColor: 'white' , borderRadius: '5px' , marginTop: '2rem' }}>
                    <h1 className={'title'}><b>Orden</b></h1>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={onSubmit}
                    >
                        {({ setFieldValue }) => (
                            <Form>
                                <div className={'columns'}>
                                    <div className={'column is-4'} style={{ marginLeft: '1rem' }}>
                                        Seller store
                                    </div>
                                    <div className={'column'}>
                                        <FormikField
                                            type={'text'}
                                            name={'sellerStore'}
                                            className={'input'}
                                        />
                                    </div>
                                </div>
                                <div className={'columns'}>
                                    <div className={'column is-4'} style={{ marginLeft: '1rem' }}>
                                        Shipping Method
                                    </div>
                                    <div className={'column'}>
                                        <ReactSelect
                                            options={shippingMethods.map(x => ({ value: x?.id, label: x.name }))}
                                            onChange={(e) => setFieldValue('shippingMethod', e.value)}
                                        />
                                    </div>
                                </div>
                                <div className={'columns'}>
                                    <div className={'column is-4'} style={{ marginLeft: '1rem' }}>
                                        External order number
                                    </div>
                                    <div className={'column'}>
                                        <FormikField
                                            type={'text'}
                                            name={'externalOrderNumber'}
                                            className={'text'}
                                        />
                                    </div>
                                </div>
                                <div className={'columns'}>
                                    <div className={'column is-4'} style={{ marginLeft: '1rem' }}>
                                        Buyer Full Name
                                    </div>
                                    <div className={'column'}>
                                        <FormikField
                                            type={'text'}
                                            name={'buyerFullName'}
                                            className={'text'}
                                        />
                                    </div>
                                </div>
                                <div className={'columns'}>
                                    <div className={'column is-4'} style={{ marginLeft: '1rem' }}>
                                        Buyer phone number
                                    </div>
                                    <div className={'column'}>
                                        <FormikField
                                            type={'text'}
                                            name={'buyerPhone'}
                                            className={'text'}
                                        />
                                    </div>
                                </div>
                                <div className={'columns'}>
                                    <div className={'column is-4'} style={{ marginLeft: '1rem' }}>
                                        Buyer email
                                    </div>
                                    <div className={'column'}>
                                        <FormikField
                                            type={'text'}
                                            name={'buyerEmail'}
                                            className={'text'}
                                        />
                                    </div>
                                </div>
                                <div className={'columns'}>
                                    <div className={'column is-4'} style={{ marginLeft: '1rem' }}>
                                        Shipping Address
                                    </div>
                                    <div className={'column'}>
                                        <FormikField
                                            type={'text'}
                                            name={'shippingAddress'}
                                            className={'text'}
                                        />
                                    </div>
                                </div>
                                <div className={'columns'}>
                                    <div className={'column is-4'} style={{ marginLeft: '1rem' }}>
                                        Shipping City
                                    </div>
                                    <div className={'column'}>
                                        <FormikField
                                            type={'text'}
                                            name={'shippingCity'}
                                            className={'text'}
                                        />
                                    </div>
                                </div>
                                <div className={'columns'}>
                                    <div className={'column is-4'} style={{ marginLeft: '1rem' }}>
                                        Shipping Region
                                    </div>
                                    <div className={'column'}>
                                        <FormikField
                                            type={'text'}
                                            name={'shippingRegion'}
                                            className={'text'}
                                        />
                                    </div>
                                </div>
                                <div className={'columns'}>
                                    <div className={'column is-4'} style={{ marginLeft: '1rem' }}>
                                        Shipping Country
                                    </div>
                                    <div className={'column'}>
                                        <FormikField
                                            type={'text'}
                                            name={'shippingCountry'}
                                            className={'text'}
                                        />
                                    </div>
                                </div>
                                <button className={'button'} type={'submit'}
                                        style={{ marginLeft: '50rem', marginBottom: '2rem' }}>
                                    <FontAwesomeIcon icon={faPlusCircle} style={{ marginRight: '5px' }}/>
                                    Crear
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
                <div className={'container'}
                     style={{ backgroundColor: 'white' , borderRadius: '5px' , marginTop: '2rem' }}>
                    <h4 className={'subtitle'}><b>Item</b></h4>
                    <Formik
                        initialValues={itemValues}
                    >
                        {({ values, resetForm }) => (
                            <Form>
                                <div className={'columns'}>
                                    <div className={'column is-4'} style={{ marginLeft: '1rem' }}>
                                        Name
                                    </div>
                                    <div className={'column'}>
                                        <FormikField
                                            type={'text'}
                                            name={'name'}
                                            className={'text'}
                                        />
                                    </div>
                                </div>
                                <div className={'columns'}>
                                    <div className={'column is-4'} style={{ marginLeft: '1rem' }}>
                                        QTY
                                    </div>
                                    <div className={'column'}>
                                        <FormikField
                                            type={'text'}
                                            name={'qty'}
                                            className={'text'}
                                        />
                                    </div>
                                </div>
                                <div className={'columns'}>
                                    <div className={'column is-4'} style={{ marginLeft: '1rem' }}>
                                        Weight
                                    </div>
                                    <div className={'column'}>
                                        <FormikField
                                            type={'text'}
                                            name={'weight'}
                                            className={'text'}
                                        />
                                    </div>
                                </div>
                                <button className={'button'} type={'submit'} onClick={() => onAddItem(values, resetForm)}>
                                    <FontAwesomeIcon icon={faPlusCircle} style={{ marginRight: '5px' }}/>
                                    Agregar item
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
            <div className={'container column is-4'}
                 style={{ backgroundColor: 'white', borderRadius: '5px' , margin: '2rem 2rem 0 0' }}>
                <h3 className={'subtitle'}><b>Items agregados</b></h3>
                <table className={'table is-bordered is-centered'}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>QTY</th>
                            <th>Weight</th>
                        </tr>
                    </thead>
                    {items.map(x => (
                        <tr key={x.name}>
                            <td>{x.name}</td>
                            <td>{x.qty}</td>
                            <td>{x.weight}</td>
                        </tr>
                    ))}
                </table>
            </div>
        </div>
    )
}

export default CreateOrder
