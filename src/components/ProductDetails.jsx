import React from 'react'
import Button from './Button'
import Datepicker from 'flowbite-datepicker/Datepicker';

import { useState } from 'react';

const ProductDetails = () => {

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
    <div class="bg-gray-100 antialiased flex font-sans text-gray-900">
       <form class="px-4 rounded mx-auto max-w-3xl w-full my-32 inputs space-y-6">
      <div>
        <h1 class="text-4xl font-bold">Add New Drug Form</h1>
        <p class="text-gray-600">
          it would be Better if you complete all section.
        </p>
      </div>
      <div class="flex space-x-4">
        <div class="w-1/2">
          <label for="firstname">Drug Name</label>
          <input
            class="border border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
            type="text"
            name="firstname"
            id="firstname"
          />
        </div>
        <div class="w-1/2">
          <label for="lastname">Category Name</label>
          <input
            class="border border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
            type="text"
            name="lastname"
            id="lastname"
          />
        </div>
      </div>

      <div class="flex space-x-4">
      <div class="w-1/2">
        <label for="quantity">Quantity</label>
        <input
          class="border border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
          type="number"
          name="quantity"
          id="quantity"
        />
        <p class="text-sm text-gray-600">
          We will use this for stock
        </p>
      </div>
      <div class="w-1/2">
        <label for="cost">Cost</label>
        <div class="flex">
          <div class="rounded-l flex text-white items-center px-4 bg-gray-400">
              FBU
          </div>
          <input
            min="0"
            step="0.01"
            placeholder="0.00"
            class="border border-gray-400 px-4 py-2 rounded-r w-full focus:outline-none focus:border-teal-400"
            type="number"
            name="cost"
            id="cost"
          />
        </div>
      </div>
      </div>

      <div>
        <label for="batch">Batch Number</label>
        <input
          class="border border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
          type="number"
          name="batch"
          id="batch"
        />
        <p class="text-sm text-gray-600">
          this is for Batch Number
        </p>
      </div>

      <div class=" relative space-x-4 flex items-center">
        <div class="w-1/2  ">
          <label for="manufacturename">Manufacture Name</label>
          <input
            class="border border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
            type="text"
            name="manufacturename"
            id="manufacturename"
          />
        </div>
        <div class="w-1/2 ">
            
    <div class="px-4 py-2  absolute inset-y-0 top-5   flex items-center pl-3 pointer-events-none">
        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
    </div>
    <label for="manufacturedate">Manufacture Date</label>
    <input  name="manufacturedate" type="date" class="  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select Manufacture Date"/>
</div>
      </div>

      <div>
        <label for="supplier name">Supplier Name</label>
        <input
          class="border border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
          type="text"
          name="supplier"
          id="supplier_name"
        />
        <p class="text-sm text-gray-600">
          this is for supplier name
        </p>
      </div>

     
<div  class=" relative space-x-4 flex items-center">
    
  <div class="w-1/2 ">
    <div class="absolute inset-y-0 top-5 flex items-center pl-3 pointer-events-none">
        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
    </div>
    <label for="supplieddate">Supplied Date</label>
    <input name="supplieddate" type="date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select Supplied Date"/>
    </div>
  
  
  <div class="w-1/2">
    <div class="absolute inset-y-0 top-5 flex items-center pl-3 pointer-events-none">
        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
    </div>
    <label for="expiredate">Expire Date</label>
    <input  name="expiredate" type="date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select Expire Date"/>
</div>
</div>


      <div>
        <label for="description">Description</label>
        <textarea
          class="border border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
          type="text"
          name="description"
          id="description"
          placeholder='describe the medicine...'
          rows={4}
          cols="50"
          

        />
        
      </div>

      <Button type='submit' isDisabled={btnDisabled} >
        Validate
        </Button>
    </form>
    </div>
  )
}

export default ProductDetails

