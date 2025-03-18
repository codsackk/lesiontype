import React from 'react';

const MethodTag = ({ name, onClick, isSelected }) => {
    const buttonStyles = isSelected
    ? "text-white border-primary-500"
    : "text-[#ADB7BE]";
  return (
    <button
        className={'${buttonStyles} rounded-xl border-2 px-6 py-3 text-xl cursor-pointer ml-4 mr-4 my-4 focus:outline-2 focus:outline-offset-2 focus:outline-green active:bg-white'}
        onClick={() => onClick(name)}
    >
        {name}
    </button>
  );
};

export default MethodTag;