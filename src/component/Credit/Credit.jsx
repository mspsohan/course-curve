import React from "react";
import Cart from "../Cart/Cart";

const Credit = ({ courseName }) => {
   return (
      <div>
         <h2 className="text-lg font-bold text-blue-500 pb-3 border-b-2 border-black">
            Credit Hour Remaining 20 hr
         </h2>
         <ol>
            {courseName.map((course, idx) => (
               <li className="list-decimal ml-3">
                  <Cart key={idx} course={course}></Cart>
               </li>
            ))}
         </ol>
         <div>
         <h2 className="text-lg border-y-2 border-black my-3 py-2 font-medium">
                  Total Credit Hour : 20
               </h2>
               <h3 className="font-semibold text-lg">
                  Total Price : 100 USD
               </h3>
         </div>
      </div>
   );
};

export default Credit;
