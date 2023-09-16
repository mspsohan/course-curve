import React from "react";
import { BiDollar, BiBookOpen } from "react-icons/bi";

const Course = ({ allCourseData, handleAddCourse }) => {
   const { id, cover, title, description, price, credit } = allCourseData;
   return (
      <div className="">
         <div className="card card-compact h-96 bg-base-100 shadow-xl">
            <figure className="p-5">
               <img className="w-full" src={cover} alt="Shoes" />
            </figure>
            <div className="card-body">
               <h2 className="card-title">{title}</h2>
               <p>{description}</p>
               <div className="flex justify-between">
                  <div className="flex justify-around items-center gap-2 text-base font-medium">
                     <BiDollar />
                     <p>Price: {price}</p>
                  </div>
                  <div className="flex justify-around items-center gap-2 text-base font-medium">
                     <BiBookOpen />
                     <p>Credit: {credit} hr</p>
                  </div>
               </div>
               <button
                  onClick={() => handleAddCourse(allCourseData)}
                  className="btn btn-primary bg-blue-500 text-white">
                  Select
               </button>
            </div>
         </div>
      </div>
   );
};

export default Course;
