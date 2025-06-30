import { useState } from 'react';

const ExpandableList = ({ items }) => {
  const [expanded, setExpanded] = useState(false);
  const showAll = expanded || items.length <= 3;
  const visibleItems = showAll ? items : items.slice(0, 3);

  return (
    <div className="service-list-wrapper">
      <ul className="service-list">
        {visibleItems.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      {items.length > 3 && (
        <button
          className="service-toggle"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? '− Less' : '+ More'}
        </button>
      )}
    </div>
  );
};

export default ExpandableList;
