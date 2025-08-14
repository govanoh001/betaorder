"use client"
import { db } from '@/config/firebase.config';
import {Button, Card, CardContent, CardHeader, CircularProgress, TextField } from '@mui/material';
import { addDoc, collection } from 'firebase/firestore';
import { useFormik } from 'formik';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import * as yup from "yup";




const schema = yup.object().shape({
    customername: yup.string().required("customer name is required").min(5),
    order: yup.string().required("order is required").min(5),
    amount: yup.number().required("Enter amount").min(1000),
    notes: yup.string().required("").min(10)
})

export default function AddOrder ({userID}){
    const [opProgress, setoppRogress] = useState(false)
    const {data: session }= useSession();

   const {handleSubmit, handleChange, values, touched, errors} = useFormik({
    initialValues: {
        customername:"",
        order:"",
        amount:"",
        notes:""
    },
    onSubmit:async (values, {resetForm}) => {
         setoppRogress(true)
          await addDoc(collection(db, "orders"),{
            user: session?.user?.id,
            customername: values.customername,
            order : values.order,
            amount: values.amount,
            notes: values.notes,
            timecreated: new Date().getTime(),
          }).then (()=>{
            setoppRogress(false)
            alert("your just made an order")
            resetForm();

          }).catch (e=>{
            setoppRogress(false)
            console.error(e)
            alert("your order was not sucessful")
          })
    }, 
    validationSchema:schema
   })

    return (
        <main className='min-h-screen'>
        <Card sx={{maxWidth: 500, margin: "auto", mt:5, p:2}}>
            <CardHeader title="Add Order Page"/>
            <CardContent>
                <form onSubmit={handleSubmit}
                 className='flex flex-col gap-4'>
                  <div>
                    <TextField 
                    fullWidth
                    type='text'
                    label="Customer's Name"
                    id='customername'
                    placeholder='Enter your Name'
                    value={values.customername}
                    onChange={handleChange}/>
                  </div>
                  {touched.customername && errors.customername ? <span className='text-xs text-red-500'>{errors.customername}</span> :null}
                  <div>
                    <TextField
                    fullWidth
                    type='text'
                    label="My Order"
                    id='order'
                    placeholder='Please Enter Order'
                    value={values.order}
                    onChange={handleChange}
                    /></div>
                    {touched.order && errors.order ? <span className='text-xs text-red-500'>{errors.order}</span> :null}
                    <div>
                    <TextField
                    fullWidth
                    type='numbers'
                    label="Amount"
                    id='amount'
                    placeholder='please enter amount'
                    value={values.amount}
                    onChange={handleChange}
                    />
                  </div>
                  {touched.amount && errors.amount ? <span className='text-xs text-red-500'>{errors.amount}</span> :null}
                 <div>
                    <TextField
                    fullWidth
                    multiline
                    rows={3}
                    type='text'
                    label="Add Notes"
                    id='notes'
                    placeholder='Add comments/notes'
                    value={values.notes}
                    onChange={handleChange}
                    />
                    </div> 
                    {touched.notes && errors.notes ? <span className='text-xs text-red-500'>{errors.notes}</span> :null}
                    <Button type='submit' variant='contained' className='rounded'>Place Order</Button>   
                     <CircularProgress style={{display: !opProgress ? "none" : "flex"}}/>           
                </form>
            </CardContent>
        </Card>
        </main>
    )
}