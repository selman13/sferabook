import React from 'react';
import {IButtonTypes} from '../../Types/TButtonTypes';

const Button: React.FC<IButtonTypes> = ({ text }) => {
  return (
    <div>
      <button className="bg-red-800 text-white rounded w-[300px] p-2 mx-3 border hover:bg-white hover:text-red-800 hover:border-4">
        {text}
      </button>
    </div>
  );
};

export default Button;
