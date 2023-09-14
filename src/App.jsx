import React, { useState } from "react";
import Header from "./component/Header/Header";
import Courses from "./component/Courses/Courses";
import Credit from "./component/Credit/Credit";

const App = () => {
   const [courseName, setCourseName] = useState([]);

   const handleAddCourse = (course) => {
      const selectedCourse = [...courseName, course];
      setCourseName(selectedCourse);
   };

   return (
      <div className="container mx-auto">
         <Header></Header>
         <div className="flex gap-4">
            <Courses handleAddCourse={handleAddCourse}></Courses>
            <Credit courseName={courseName}></Credit>
         </div>
      </div>
   );
};

export default App;
