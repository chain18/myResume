import React from "react";

function HomePage(){
    return(
        <header className="">
            <div className=" flex flex-row justify-center items-center h-screen">
            <div className="flex flex-col ml-8 mr-8">
            <h1 className="text-6xl hr underline ">About Me!</h1>
            <h2 className="text-4xl mt-8">Hi! I'm chain</h2>
            <p className="text-center text-2xl">Let me introduce myself. My name is Thanakit.My nickname is Chain.I'm 26 years old.
            My birthday is the 18th of March 1996.I live in Ratchaburi.I graduated from SuanDusit University.</p>
            </div>
            <img src="img/dogdog.jpg" className="p-1 bg-white border rounded max-w-xl mr-11 " alt="hotel"/>
            </div>
            <div>

        </div>
        </header>
    )
}

export default HomePage;