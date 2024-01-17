import logo from './logo.svg';
// importing useState
import { useState } from 'react';
import './App.css';


export default function App() {

// initialise the count with 0
// let count = 0; will update count but will not effect the UI
// To update the UI, we need to use the useState
const[count, setCount] = useState(0);

// decreaseHandler is related to the '-' button
  function decreaseHandler()
  {
     setCount(count-1);
  }

  // increaseHandler is related to the '+' button
  function increaseHandler()
  {
    setCount(count+1);
  }

  // resetHandler is related to reset button
  function resetHandler()
  {
    setCount(0);
  }
  return (
    // top level container starts
  <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] 
  flex-col gap-10 ">
    {/* heading section starts */}
    <div className='text-[#0398d4] font-medium text-2xl'>Increment && Decrement</div>
    {/* heading section ends */}

    {/* button section starts */}
    <div 
    className='bg-white
                flex
                justify-center
                gap-12
                py-3
                rounded-sm
                text-[25px]
                text-[#344151] '>
      {/* decrement button starts */}

      {/* 1.click on '-' button then value will decrease
          2.Function is called when we click the '-' button
          3.This function is : decreaseHandler
          */}
      <button onClick={decreaseHandler}
       className='border-r-2
                  text-center 
                  w-20
                  border-[#bfbfbf]
                  text-5xl'>
        -
      </button>
      {/* decrement button ends */}

      {/* display section starts */}
      <div className='font-bold
                      gap-12
                      text-5xl
                               '>
       {count}
      </div>
      {/* display section ends */}

      {/* increment button starts */}

      {/* 1.click on '+' button then value will increase
          2.Function is called when we click on '+' button
          3.Function name is : increaseHandler
       */}
      <button onClick={increaseHandler}
      className='border-l-2
                  text-center 
                  w-20
                  border-[#bfbfbf]
                  text-5xl'>
        +
      </button>
      {/* increment button ends */}

    </div>
    {/* button section ends */}

    {/* reset section starts */}

    {/* 1.on clicking this button, resetHandler function is called */}
    <button onClick={resetHandler}
     className='bg-[#0398d4]
                  text-white
                  px-5
                  py-2
                  rounded-sm
                  text-lg'>
                    Reset
                    </button>
    {/* reset section ends */}
  </div>
  // top level container ends

  )
}


