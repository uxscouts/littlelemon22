// SlotList.jsx
import { useState } from 'react';
import { BookingSlot } from './BookingSlot';

const SlotList = ({ slotsData }) => {
  const [selectedId, setSelectedId] = useState(null);

  const handleSelect = (id) => {
    setSelectedId(id);
    console.log("Selected Slot ID:", id);
  };

  return (
    <div className="grid grid-cols-3 gap-4 p-4 border rounded-xl bg-gray-50">
      {slotsData.map((slot) => (
        <BookingSlot 
          key={slot.id} 
          {...slot} 
          isSelected={selectedId === slot.id}
          onSelect={handleSelect}
        />
      ))}
    </div>
  );
};
