import React from 'react';
import './AddProduct.css';
import Card from '../components/Card';
import Button from '../components/Button';
import { useState } from 'react';

const AddProduct = () => {

    const [btnDisabled,setBtnDisabled] =useState(true)

    const [drugName,setDrugName] =useState('')

    const [description,setDescription] =useState('')

    const [cost,setCost] =useState('')

    const handleDrugNameChange = (e) => {
        if(drugName ==='') {
            setBtnDisabled(true)
            setDrugName(null)
        } else {
         setBtnDisabled(false)
        }

        setDrugName(e.target.value);
    }

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    }

    const handleCostChange = (e) => {
        setCost(e.target.value);
    }

  return (

    <div className='addProduct-container'>
        
    <Card className='card' >
     <form>


      <label htmlFor=''>Drug Name</label>
      <input type="text" onChange={handleDrugNameChange} placeholder='name' value={drugName} />


      <label htmlFor=''>Quantity</label>
      <input type='number' placeholder='0' />

      <label htmlFor=''>Cost</label>
    <input type='number' placeholder='FBU' onChange={handleCostChange}   value={cost} />
    
    <label htmlFor=''>Category</label>
      <input type='text' placeholder='category' />

      <label htmlFor=''>Batch Number</label>
      <input type='number' placeholder='0' />

      <label htmlFor=''>Manufature Name</label>
    <input type='text' placeholder='manufature name' />

    <label htmlFor=''>Manufacture Date</label>
    <input type='date' name='manufacture date' />

    <label htmlFor=''>Date Supplied</label>
    <input type='date' name='Date Supplied' />

    <label htmlFor=''>Supplier Name</label>
    <input type='text' placeholder='supplier name' />

    <label htmlFor=''>Expire Date</label>
    <input type='date' name='expire  date ' />

    <label htmlFor=''>Description</label>
    <textarea  onChange={handleDescriptionChange} value={description}   rows="4" cols="50" name="comment" placeholder='describe the medicine...'/> 


    
    

    <Button type='submit' isDisabled={btnDisabled}>
        Validate
        </Button>
        
</form>
</Card>

</div>
  )
}

export default AddProduct

