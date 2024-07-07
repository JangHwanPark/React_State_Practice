import React from 'react';

const Products = ({data, handleClickAddBasket, handleAdd, handleRemove, showCount}) => {
  if (!data || data.length === 0) {
    return <div>제품이 존재하지 않음</div>
  }

  return (
    <div>
      {data.map((item, index) => (
        <ul key={index}>
          <li>{item.name}</li>
          <li>{item.price}</li>
          {showCount && <li>{item.count}</li>}
          <li>
            {handleClickAddBasket && <button onClick={() => handleClickAddBasket(item)}>담기</button>}
            {handleAdd && handleRemove && (
              <>
                <button onClick={() => handleAdd(item.name, item.price, 1)}>+</button>
                <button onClick={() => handleRemove(item.name, item.price, -1)}>-</button>
              </>
            )}
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Products;