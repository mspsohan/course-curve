# Answer to the Question of Course Registration Assignment-7

## Question 1: Add at least 3 Project features

-  The project has been completed by fetching data from the database through API and displaying the data of each course in the UI as a card. also it is responsive for different devices.
-  in this project there is total nine course. If a course is selected then it is added to the cart section and if the selected course is already in the cart then it will show a react tostify notification.
-  How many hours each course is mentioned in the project. Hours are counted as credit. For an individual person the Credit limit is 20. So a person cannot buy more courses than the credit limit and an error message will show if the remaining credit less than 0. total selected credit and remaining credit will displayed on cart. every course have a price . so how many course add on cart the total price will show on cart.

## Question 2: Discuss how you managed the state in your assignment project.

-  In this project, I used React's useState and useEffect hooks to manage and manage various aspects of the course registration project.

### 1. useEffect Hook for External Data:

-  I employed the useEffect hook to handle external data, particularly for fetching data from an API or a local JSON file. This hook ensures that data retrieval and updates happen at the appropriate times during the component's lifecycle.

### 2. useState Hooks for Data Storage and Manage:

-  I utilized multiple instances of the useState hook throughout different components to store and manage data.
   -  **selectedCourse:** This state variable keeps track of the courses selected by users. then this variable sent to the Credit component. The Credit component also send this variable to Cart component. And Cart component received this variable as props and show the seleceted course on screen.
   -  **totalCost:** It stores the total cost of the selected courses.
   -  **totalCredit:** This state hook is used to keep a running tally of the total credit hours for the selected courses.
   -  **remainingCredit:** It helps manage the credit limit, ensuring users do not exceed 20 credits.
-  Those **"totalCost"**, **"totalCredit"**, **"remainingCredit"** hooks variable send to the Credit Component. Credit component receives those variable as props and show on the screen.
