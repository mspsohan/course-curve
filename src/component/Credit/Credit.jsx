import React from "react";
import Cart from "../Cart/Cart";

const Credit = ({
   selectedCourse,
   totalCost,
   totalCredit,
   remainingCredit,
}) => {
   return (
      <div className="xl:w-1/4 lg:p-5 xl:p-0">
         <div className="bg-gray-50 p-5 rounded-lg shadow-2xl shadow-slate-400">
            <h2 className="text-lg font-bold text-blue-500 pb-3 border-b-2 border-black">
               Credit Hour Remaining {remainingCredit} hr
            </h2>
            <h2 className="text-xl font-bold py-3">Course Name</h2>
            <ol>
               {selectedCourse.map((course, idx) => (
                  <li key={idx} className="list-decimal ml-3">
                     <Cart course={course}></Cart>
                  </li>
               ))}
            </ol>
            <div>
               <h2 className="text-lg border-y-2 border-black my-3 py-2 font-medium">
                  Total Credit Hour : {totalCredit}
               </h2>
               <h3 className="font-semibold text-lg">
                  Total Price : {totalCost} USD
               </h3>
            </div>
         </div>
      </div>
   );
};

export default Credit;
