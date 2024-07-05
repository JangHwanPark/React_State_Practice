import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const TabLinkUI = () => {
  const location = useLocation();
  const tabs = [
    { path: '/', label: 'Menu' },
    { path: '/1', label: 'Menu' },
    { path: '/2', label: 'Menu' },
    { path: '/3', label: 'Menu' },
    { path: '/4', label: 'Menu' },
  ];

  return (
    <div className='tab-box'>
      <ul className='tab-list'>
        {tabs.map((tab, index) => (
          <li
            key={index}
            className={`tab-item ${location.pathname === tab.path ? 'active' : ''}`}
          >
            <Link to={tab.path}>{tab.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TabLinkUI;