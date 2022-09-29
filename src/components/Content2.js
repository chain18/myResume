import React from "react";

function Content2() {
    return (
        
        <div className="flex flex-row item-center justify-center mt-11">
            <div className="flex flex-col justify-center m-8 ml-11">
                <h1 className="text-6xl hr underline" id="working">Working Experience</h1>
                <h2 className="text-4xl mt-8"><span class="material-symbols-outlined">restaurant_menu</span>Personal Chef Assistant</h2>
                <h3 className="text-3xl text-left mt-8 ">
                <span class="material-symbols-outlined">hotel</span> 137 Pillars House Chiang Mai, May 2018 - March 2019</h3>
                <ul className="text-2xl text-left mt-6">
                    <li>- Responsible to prepare and service all food items for buffet menus according to hotel recipes and standards.</li>
                    <li>- Responsible to practice new employees and trainees.</li>
                    <li>- Recheck the stock before processing new purchase.</li>
                    <li>- Coordinate and collaborate with related departments.</li>
                    <li>- Provide a service to customer and maintain good relationship.</li>
                </ul>
            </div>
            <img src="img/hotal.jpg" className=" max-w-xl m-8" alt="hotel"/>
        </div>
    )
}

export default Content2;