import { useState } from 'react';
import { IdValue } from './types';
import { Checklist } from './Checklist';

const data = [
  {
    productId: '1',
    productTitle: 'Clock',
    productDescription: 'Properly fit in your room',
  },
  {
    productId: '2',
    productTitle: 'Chair',
    productDescription: 'Comfortable seating for long hours',
  },
  {
    productId: '3',
    productTitle: 'Laptop',
    productDescription: 'High-performance computing on the go',
  },
  {
    productId: '4',
    productTitle: 'Headphones',
    productDescription: 'Immersive audio experience',
  },
  {
    productId: '5',
    productTitle: 'Camera',
    productDescription: 'Capture memories with stunning clarity',
  },
  {
    productId: '6',
    productTitle: 'Smartphone',
    productDescription: 'Stay connected with the latest technology',
  },
];

export default function App() {
  const [checkedId, setCheckedId] = useState<IdValue | null>(null);

  function handleCheckedIdsChange(newCheckedIds: IdValue[]) {
    const newCheckedIdArr = newCheckedIds.filter((id) => id !== checkedId);

    newCheckedIdArr.length === 1 ? setCheckedId(newCheckedIdArr[0]) : setCheckedId(null);
  }

  return (
    <div>
      {/* <Checklist1
        data={data}
        id="productId"
        primary="productTitle"
        secondary="productDescription"
      />
      <Checklist2
        data={data}
        id="productId"
        primary="productTitle"
        secondary="productDescription"
        style={{ width: '300px', maxHeight: '380px', overflowY: 'auto' }}
      />
      <Checklist3
        data={data}
        id="productId"
        primary="productTitle"
        secondary="productDescription"
        style={{ width: '300px', maxHeight: '380px', overflowY: 'auto' }}
        render={(item) => (
          <li
            key={item.productId}
            className="bg-white p-4
          border-b-2"
          >
            <div className="text-xl text-slate-800 pb-1">{item.productTitle}</div>
            <div className="text-slate-500">{item.productDescription}</div>
          </li>
        )}
      /> */}
      <Checklist
        data={data}
        id="productId"
        primary="productTitle"
        secondary="productDescription"
        style={{ width: '300px', maxHeight: '380px', overflowY: 'auto' }}
        checkedIds={checkedId === null ? [] : [checkedId]}
        onCheckedIdsChange={handleCheckedIdsChange}
      />
    </div>
  );
}
