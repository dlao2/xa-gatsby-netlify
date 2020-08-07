import React from "react"

const GetConnectedForm = () => {
  return (
    <div className="flex flex-col items-center h-full justify-center my-6">
      <h1 className="text-white lg:mt-6 mb-8 text-2xl">Get Connected</h1>
      <form className="w-1/2" method="POST" name="get-connected" netlify data-netlify="true">
        <div className="flex mb-6">
          <div className="w-full">
            <input className="bg-gray-800 appearance-none border-2 border-gray-800 rounded w-full py-2 px-4 text-white leading-tight focus:outline-none focus:border-blue-400" id="name" name="name" type="text" placeholder="Name" />
          </div>
        </div>
        <div className="flex mb-6">
          <div className="w-full">
            <input className="bg-gray-800 appearance-none border-2 border-gray-800 rounded w-full py-2 px-4 text-white leading-tight focus:outline-none focus:border-blue-400" id="name" name="email" type="text" placeholder="Email" />
          </div>
        </div>
        <div className="flex mb-6">
          <div className="w-full">
            <textarea className="bg-gray-800 appearance-none border-2 border-gray-800 rounded w-full py-2 px-4 text-white leading-tight focus:outline-none focus:border-blue-400 h-32" id="name" name="text" type="text" placeholder="Message"></textarea>
          </div>
        </div>

        <input type="hidden" name="form-name" value="get-connected" />

        <div className="flex justify-center">
          <button className="bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white py-4 px-10 rounded" type="submit">
            Send
          </button>
        </div>
      </form>
    </div>
  )
}

export default GetConnectedForm
