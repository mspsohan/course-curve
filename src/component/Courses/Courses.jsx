import React, { useEffect, useState } from "react";
import Course from "../Course/Course";

const Courses = ({ handleAddCourse }) => {
   const [courses, setCourses] = useState([]);

   useEffect(() => {
      fetch("./course.json")
         .then((res) => res.json())
         .then((data) => setCourses(data));
   }, []);

   return (
      <div className="lg:p-5 xl:p-0 xl:w-3/4">
         <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {courses.map((course, idx) => (
               <Course
                  key={idx}
                  handleAddCourse={handleAddCourse}
                  course={course}></Course>
            ))}
         </div>
      </div>
   );
};

export default Courses;
