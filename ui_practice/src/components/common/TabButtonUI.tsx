import React, {useState} from 'react';
import { Link, useLocation } from 'react-router-dom';

const TabButtonUI = () => {
  const [state, setState] = useState('');

  const tabs = [
    { label: 'btn1' },
    { label: 'btn2' },
    { label: 'btn3' },
    { label: 'btn4' },
    { label: 'btn5' },
  ];

  const handleClick = (e) => {
    const { innerText } = e.target;
    console.log(e.target);
    console.log(innerText);
    setState(innerText);
  }

  return (
    <>
      <div className='tab-box'>
        <ul className='tab-list'>
          {tabs.length > 0 && tabs.map(item => (
            item && (
              <li key={item.label} className={`tab-item`}>
                <button onClick={handleClick}>{item.label}</button>
              </li>
            )
          ))}
        </ul>
      </div>
      <div>
        {state && <p>click : {state}</p>}
      </div>
    </>
  );
};

export default TabButtonUI;