import React from 'react'

function Details() {
  return (
    <div>

      <blockquote class="text-xl italic font-semibold text-center text-gray-900 dark:text-white mt-5">
          <p>Name</p>
      </blockquote>


      <img class="h-auto max-w-lg mx-auto mt-7" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png" alt="image description"/>



      <blockquote class="text-xl italic font-semibold text-center text-gray-900 dark:text-white mt-3">
        <h1>price :</h1>
        <h1>details :</h1>
        <h1>tag</h1>
      </blockquote>
      <div class="text-center  content-center mt-4  "> 
        <button  type="button" class="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900">Yellow</button>
      </div>
    </div>
  )
}

export default Details