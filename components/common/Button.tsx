import React from 'react';
import {IButtonTypes} from '../../Types/TButtonTypes';

const Button: React.FC<IButtonTypes> = ({ text }) => {
  return (
    <div>
      <button className="bg-red-800 text-white rounded w-full p-2 border hover:bg-white hover:text-red-800 hover:font-bold">
        {text}
      </button>
    </div>
  );
};

export default Button;
