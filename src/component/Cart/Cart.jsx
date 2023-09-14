import React from "react";

const Cart = ({ course }) => {
   return (
      <div>
         <ol>
            <li className="text-base pb-1">{course.title}</li>
         </ol>
      </div>
   );
};

export default Cart;
