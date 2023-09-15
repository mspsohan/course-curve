import React, { useEffect, useState } from "react";
import Course from "../Course/Course";

const Courses = ({ handleAddCourse }) => {
   const [allCourseData, setAllCourseData] = useState([]);

   // useEffect(() => {
   //    fetch("./course.json")
   //       .then((res) => res.json())
   //       .then((data) => setAllCourseData(data));
   // }, []);

   useEffect(() => {
      const fetchData = async () => {
         const response = await fetch("./course.json");
         const data = await response.json();
         setAllCourseData(data);
      };
      fetchData();
   }, []);

   return (
      <div className="lg:p-5 xl:p-0 xl:w-3/4">
         <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-10">
            {allCourseData.map((courseData, idx) => (
               <Course
                  key={idx}
                  handleAddCourse={handleAddCourse}
                  allCourseData={courseData}></Course>
            ))}
         </div>
      </div>
   );
};

export default Courses;
