import React from 'react';
import Header from './component/Header/Header';
import Courses from './component/Courses/Courses';

const App = () => {
   return (
      <div className='container mx-auto'>
         <Header></Header>
         <Courses></Courses>
      </div>
   );
};

export default App;