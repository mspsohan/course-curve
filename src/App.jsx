import { useState } from "react";
import Courses from "./component/Courses/Courses";
import Credit from "./component/Credit/Credit";
import Header from "./component/Header/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
   const [courseName, setCourseName] = useState([]);
   const [totalCost, setTotalCost] = useState(0);
   const [totalCredit, setTotalCredit] = useState(0);
   const [remaining, setRemaining] = useState(20);

   const handleAddCourse = (course) => {
      const isExist = courseName.find((item) => item.id === course.id);
      if (isExist) {
         return toast(
            "Course already added to your selection. Please choose a different course."
         );
      }

      const newRemaining = remaining - course.credit;
      if (newRemaining < 0) {
         return toast("Sorry, you've exceeded your credit limit.");
      }
      setRemaining(newRemaining);

      const newTotalCredit = totalCredit + course.credit;
      setTotalCredit(newTotalCredit);

      const newTotalCost = totalCost + course.price;
      setTotalCost(newTotalCost);

      const updatedCourseList = [...courseName, course];
      setCourseName(updatedCourseList);
   };

   return (
      <div className="container mx-auto">
         <Header />
         <div className="grid xl:flex gap-4 p-5 lg:p-0">
            <Courses handleAddCourse={handleAddCourse} />
            <Credit
               remaining={remaining}
               totalCredit={totalCredit}
               totalCost={totalCost}
               courseName={courseName}
            />
         </div>
         <ToastContainer />
      </div>
   );
}

export default App;
