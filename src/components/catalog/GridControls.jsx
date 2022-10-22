import { useEffect, useState } from 'react';
import { FaSquare, FaThLarge } from 'react-icons/fa';

const buttonClasses = `w-24 h-24 border-l border-zink-400 flex justify-center items-center`;

export const GridControls = ({ setPerRow = () => {} }) => {
  const [itemsPerRow, setItemsPerRow] = useState('4/row');

  // de fiecare data cand itemsPerRow se schimba ruleaza acest callback
  useEffect(() => {
    const perRow = parseInt(itemsPerRow);

    setPerRow(perRow);
  }, [itemsPerRow, setPerRow]);

  return (
    <ul className="hidden border border-zinc-400 border-l-0 border-r-0 md:flex">
      <li>
        <button
          title="One per row"
          className={`${buttonClasses} ${
            itemsPerRow === '1/row' ? 'bg-black text-white' : ''
          }  hover:text-zinc-900 hover:bg-zinc-300 flex flex-col`}
          onClick={() => {
            setItemsPerRow('1/row');
          }}
        >
          <FaSquare size={15}></FaSquare>
          <FaSquare size={15}></FaSquare>
        </button>
      </li>

      <li>
        <button
          title="Two per row"
          className={`${buttonClasses} ${
            itemsPerRow === '2/row' ? 'bg-black text-white' : ''
          }  hover:text-zinc-900 hover:bg-zinc-300`}
          onClick={() => {
            setItemsPerRow('2/row');
          }}
        >
          <FaThLarge size={32}></FaThLarge>
        </button>
      </li>

      <li>
        <button
          title="Four per row"
          className={`${buttonClasses} ${
            itemsPerRow === '4/row' ? 'bg-black text-white' : ''
          }  hover:text-zinc-900 hover:bg-zinc-300`}
          onClick={() => {
            setItemsPerRow('4/row');
          }}
        >
          <div>
            <FaThLarge className="display: inline" size={32}></FaThLarge>{' '}
            <FaThLarge className="display: inline" size={32}></FaThLarge>
          </div>
        </button>
      </li>
    </ul>
  );
};
