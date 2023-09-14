import React, { useEffect, useState } from "react";
import Course from "../Course/Course";

const Courses = ({ handleAddCourse }) => {
   const [courses, setCourses] = useState([]);

   useEffect(() => {
      fetch("course.json")
         .then((res) => res.json())
         .then((data) => setCourses(data));
   }, []);

   return (
      <div className="grid grid-cols-3 gap-3">
         {courses.map((course, id) => (
            <Course
               key={id}
               course={course}
               handleAddCourse={handleAddCourse}></Course>
         ))}
      </div>
   );
};

export default Courses;
