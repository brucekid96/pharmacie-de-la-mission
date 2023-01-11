import React from 'react'
import {EditFilled} from '@ant-design/icons';

function ProductsListTable() {
  return (
    <>
    <div class="p-5 h-screen bg-gray-100">
        <h1 class="text-xl mb-2">Drug List</h1>

        <div class="overflow-auto rounded-lg shadow hidden md:block">
      
      <table class="w-full">
        <thead class="bg-gray-50 border-b-2 border-gray-200">
          <tr>
            <th class="p-3 text-sm font-semibold tracking-wide text-left">Drug id</th>
            <th class="p-3 text-sm font-semibold tracking-wide text-left">Drug Name</th>
            <th class="p-3 text-sm font-semibold tracking-wide text-left">Drug Type</th>
            <th class="p-3 text-sm font-semibold tracking-wide text-left">Details</th>
          </tr>
        </thead>

        <tbody>
          <tr class="bg-white">
            <td class="  p-3 text-sm text-gray-700"><a href="#" class="font-bold text-green-500 hover:underline">1478</a></td>
            <td class="  p-3 text-sm text-gray-700">Quinine</td>
            <td class=" p-3 text-sm text-gray-700">Pillule</td>
            <td lass=" p-3 text-sm text-gray-700"><EditFilled class="text-red-600"/></td> 
        
          </tr>

          <tr class="bg-gray-50">
            <td class="p-3 text-sm text-gray-700"> <a href="#" class="font-bold text-green-500 hover:underline">5456</a></td>
            <td class="p-3 text-sm text-gray-700">Depaquine</td>
            <td class="p-3 text-sm text-gray-700">Pillule</td>
            <td lass=" p-3 text-sm text-gray-700"><EditFilled class="text-red-600" /></td>
          </tr>
        </tbody>
      </table>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">

       <div class="bg-white space-y-3 p-4 rounded-lg shadow">
        <div class="flex items-center space-x-2 text-sm">
        <div>
            <a href="#" class="font-bold text-blue-500 hover:underline">1478</a>
            </div>
        <div class="text-gray-500"> Pillule </div>
        <div> <EditFilled class="text-red-600" /> </div>
        </div>
    
       <div class="text-sm font-medium text-black"> Quinine</div>

       </div>

       <div class="bg-white space-y-3 p-4 rounded-lg shadow">
        <div class="flex items-center space-x-2 text-sm">
        <div>
            <a href="#" class="font-bold text-blue-500 hover:underline">1478</a>
            </div>
        <div class="text-gray-500"> Pillule </div>
        <div><EditFilled class="text-red-600"/></div>
        </div>
    
       <div class="text-sm font-medium text-black"> Quinine</div>

       </div>

       <div class="bg-white space-y-3 p-4 rounded-lg shadow">
        <div class="flex items-center space-x-2 text-sm">
        <div>
            <a href="#" class="font-bold text-blue-500 hover:underline">1478</a>
            </div>
        <div class="text-gray-500">  Pillule</div>
        <div><EditFilled class="text-red-600"/></div>
        </div>
    
       <div class="text-sm font-medium text-black">Quinine</div>

       </div>
         </div>
      </div>
    
    
    </>
  )
}

export default ProductsListTable
