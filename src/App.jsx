import React, { useState } from "react";
import Header from "./component/Header/Header";
import Courses from "./component/Courses/Courses";
import Credit from "./component/Credit/Credit";

const App = () => {
   const [courseName, setCourseName] = useState([]);
   const [totalCost, setTotalCost] = useState(0);
   const [totalCredit, setTotalCredit] = useState(0);
   const [remaining, setRemaining] = useState(20);

   const handleAddCourse = (course) => {
      const isExist = courseName.find((item) => item.id == course.id);
      if (isExist) {
         return alert(
            "Course already added to your selection. Please choose a different course."
         );
      }
      const newTotalCost = totalCost + course.price;
      const newTotalCredit = totalCredit + course.credit;
      const newRemaining = remaining - course.credit;

      if (newRemaining < 0) {
         return alert("Sorry, you've exceeded your credit limit.");
      }

      setRemaining(newRemaining);
      setTotalCost(newTotalCost);
      setTotalCredit(newTotalCredit);
      const selectedCourse = [...courseName, course];
      setCourseName(selectedCourse);
   };

   return (
      <div className="container mx-auto">
         <Header></Header>
         <div className="flex gap-4">
            <Courses handleAddCourse={handleAddCourse}></Courses>
            <Credit
               totalCost={totalCost}
               totalCredit={totalCredit}
               remaining={remaining}
               courseName={courseName}></Credit>
         </div>
      </div>
   );
};

export default App;
