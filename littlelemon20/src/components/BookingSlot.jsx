
export const BookingSlot = ({ 
  id, 
  time, 
  isAvailable, 
  onSelect, 
  isSelected, 
  index, 
  totalSlots 
}) => {
  const baseClasses = "p-3 border rounded-md text-center transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2";
  
  const statusClasses = !isAvailable 
    ? "bg-gray-100 text-gray-400 cursor-not-allowed border-gray-200" 
    : isSelected 
      ? "bg-blue-600 text-white border-blue-600 shadow-md scale-[1.02] ring-2 ring-blue-600" 
      : "bg-white text-gray-700 border-gray-300 hover:border-blue-500 hover:bg-blue-50";

  return (
    <button
      type="button"
      role="radio"
      aria-checked={isSelected}
      aria-disabled={!isAvailable}
      disabled={!isAvailable}
      onClick={() => onSelect(id)}
      className={`${baseClasses} ${statusClasses}`}
      // Concatenated label includes selection state and position
      aria-label={`${time}, ${isAvailable ? 'Available' : 'Booked'}${isSelected ? ', currently selected' : ''}. Slot ${index + 1} of ${totalSlots}.`}
    >
      <span className="font-medium block" aria-hidden="true">
        {time}
      </span>
      
      <div className="flex items-center justify-center mt-1" aria-hidden="true">
        {isSelected && (
          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        )}
        <p className="text-xs uppercase tracking-wider font-semibold">
          {isAvailable ? (isSelected ? "Selected" : "Available") : "Booked"}
        </p>
      </div>
    </button>
  );
};



// BookingSlot.jsx
{/*
export const BookingSlot = ({
  id,
  time,
  isAvailable,
  onSelect,
  isSelected,
}) => {
  const baseClasses = "p-3 border rounded-md text-center transition-all cursor-pointer";
  
  const statusClasses = !isAvailable
    ? "bg-gray-100 text-gray-400 cursor-not-allowed border-gray-200"
    : isSelected
    ? "bg-blue-600 text-white border-blue-600 shadow-md"
    : "bg-white text-gray-700 border-gray-300 hover:border-blue-500 hover:bg-blue-50";

  return (
    <button
      type="button"
      disabled={!isAvailable}
      onClick={() => onSelect(id)}
      className={`${baseClasses} ${statusClasses}`}
      // ARIA additions below
      aria-pressed={isAvailable ? isSelected : undefined}
      aria-label={`${time}, ${isAvailable ? 'Available' : 'Booked'}`}
    >
      <span className="font-medium" aria-hidden="true">{time}</span>
      <p className="text-xs mt-1" aria-hidden="true">
        {isAvailable ? "Available" : "Booked"}
      </p>
    </button>
  );
};
*/}
