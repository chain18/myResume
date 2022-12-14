import React from "react";

function Navbar (){
    return(
      
<nav class="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-200 fixed w-full z-20 top-0 left-0 border-b border-gray0-200 dark:border-gray-300">
        <div class="container flex flex-wrap justify-center items-center mx-auto">
          <div class="flex md:order-2">

            <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400
             dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
              <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 
              10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
          </div>
          <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 
            md:bg-white dark:bg-gray-800 md:dark:bg-gray-200 dark:border-gray-700">
            <li>
                <a href="#" class="block py-2 pr-4 pl-3 text-4xl text-white bg-blue-700 rounded md:bg-transparent
                 md:text-black md:p-0 dark:text-white  dark:hover:text-white md:dark:hover:bg-transparent " aria-current="page">
                <span class="material-symbols-outlined">
                 frame_person</span> Chain</a>
              </li>
              <li>
                <a href="#eduction" class="block py-2 pr-4 pl-3 text-3xl text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent
                 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-900 dark:hover:bg-gray-700 
                 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"><span class="material-symbols-outlined">
                 school</span> Education</a>
              </li>
              <li>
                <a href="#working" class="block py-2 pr-4 pl-3 text-3xl text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent
                 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-900 dark:hover:bg-gray-700 
                 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ">
                 <span class="material-symbols-outlined">draw</span> Working Experience</a>
              </li>
              <li>
                <a href="#skill" class="block py-2 pr-4 pl-3 text-3xl text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent
                 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-900 dark:hover:bg-gray-700 
                 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                 <span class="material-symbols-outlined">construction</span> Skill</a>
              </li>
              <li>
                <a href="#contact" class="block py-2 pr-4 pl-3 text-3xl text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent
                 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-900 dark:hover:bg-gray-700 
                 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                 <span class="material-symbols-outlined ">connect_without_contact</span> Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Navbar;