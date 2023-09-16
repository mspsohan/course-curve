import { useState } from "react";
import Courses from "./component/Courses/Courses";
import Credit from "./component/Credit/Credit";
import Header from "./component/Header/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
   const [selectedCourse, setSelectedCourse] = useState([]);
   const [totalCost, setTotalCost] = useState(0);
   const [totalCredit, setTotalCredit] = useState(0);
   const [remainingCredit, setRemainingCredit] = useState(20);

   const handleAddCourse = (course) => {
      const isExist = selectedCourse.find((item) => item.id === course.id);
      if (isExist) {
         return toast(
            "Course already added to your selection. Please choose a different course."
         );
      }

      const newRemaining = remainingCredit - course.credit;   
      const newTotalCredit = totalCredit + course.credit;
      if (newRemaining < 0 && newTotalCredit > 20) {
         return toast("Sorry, you don't have enough credit.");
      }
      setRemainingCredit(newRemaining);
      setTotalCredit(newTotalCredit);

      const newTotalCost = totalCost + course.price;
      setTotalCost(newTotalCost);

      const updatedCourseList = [...selectedCourse, course];
      setSelectedCourse(updatedCourseList);
   };

   return (
      <div className="container mx-auto">
         <Header />
         <div className="grid xl:flex gap-4 p-5 lg:p-0">
            <Courses handleAddCourse={handleAddCourse} />
            <Credit
               remainingCredit={remainingCredit}
               totalCredit={totalCredit}
               totalCost={totalCost}
               selectedCourse={selectedCourse}
            />
         </div>
         <ToastContainer />
      </div>
   );
}

export default App;
