import React from 'react'

const Button = ({btn,onClick}) => {
  return (
    <>
      <button type='submit' className="bg-orange-500 text-white px-4 py-2 hover:scale-105 active:scale-90 rounded-md active:bg-orange-700 duration-300">
        {btn}
      </button>
    </>
  );
}

export default Button
