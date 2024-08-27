// import React from 'react';
import { FC } from "react";

type Iprops = {
  text: string;
  onClick?: () => void;
};

const Button: FC<Iprops> = (props) => {
  const { text, onClick } = props;

  return (
    <button
      onClick={onClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-3 rounded"
    >
      {text}
    </button>
  );
};

const ButtonRemove: FC<Iprops> = (props) => {
  const { text, onClick } = props;

  return (
    <button
      onClick={onClick}
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mx-3 rounded"
    >
      {text}
    </button>
  );
};

const ButtonEdit: FC<Iprops> = (props) => {
  const { text, onClick } = props;

  return (
    <button
      onClick={onClick}
      className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 mx-3 rounded"
    >
      {text}
    </button>
  );
};

export { Button, ButtonRemove, ButtonEdit };
