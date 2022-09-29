import React from "react";

function Content1() {
    return (
        <div className="flex flex-row justify-end item-center mt-11" id="eduction" >
        <img src="img/vr-screen.png" className=" max-w-xl m-8" alt="vr"/>
        <table>
        <thead className="text-6xl hr underline" >Education</thead>
        <tr class="bg-white border-b  dark:border-gray-700 text-2xl">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                <span class="material-symbols-outlined">school</span> Suan Dusit University
                </th>
                <td class="py-4 px-6">
                    Home Economics
                </td>
                <td class="py-4 px-6">
                    GPA -
                </td>
                <td class="py-4 px-6 pr-10">
                    2014 - 2018
                </td>
            </tr>
        <tr class="bg-white border-b dark:border-gray-700 text-2xl">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                <span class="material-symbols-outlined">school</span> Rattanaratbumrung School
                </th>
                <td class="py-4 px-6">
                 Major Art And Mathematics
                </td>
                <td class="py-4 px-6">
                    GPA -
                </td>
                <td class="py-4 px-6 pr-10">
                    2011 - 2013
                </td>
            </tr>
              </table>
            <div>


            </div>
        </div>
    )
}
export default Content1;