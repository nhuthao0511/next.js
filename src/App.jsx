// import styled from 'styled-components';
// import '.././src/components/main.scss';

// const StyledButton = styled.button`
// margin: 20px 15px;
// border: 2px solid #4caf50;
// background-color: #fff;
// color: #4caf50;
// padding: 15px 32px;
// text-align: center;
// text-decoration: none;
// display: inline-block;
// border-radius: 20px;
// cursor: pointer;
// `

// function App() {
//   return (
//     <div className="App">
//      {/* <button>click me</button> */}
//      <StyledButton>Click Me</StyledButton>
//      <h1 className='test'>Hello mấy cưng</h1> 
//     </div>
//   );
// }

// maps to root `/` URL

// import variables from './variables/variables.module.scss'

// export default function Page() {
//   // return <h1 className='title'>Hello, Next.js!</h1>
//   return <button >Click tao đi</button>


// export default Page;


import React, { useState } from 'react';
import FormInput from '../src/components/Forminput';
import variables from './variables/variables.module.scss'

const YourPage = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted with value:', inputValue);
  };

  return (
    <div className='Page'>
      <h1>Your Page</h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Enter your name:"
          type="text"
          value={inputValue}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default YourPage;

