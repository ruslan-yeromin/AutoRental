const SkeletonCard = () => {
  return (
    <div className="flex flex-col justify-between px-6 py-6 bg-white shadow-lg rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <div className="flex flex-col">
          <div className="h-6 bg-gray-300 rounded w-3/4"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2 mt-2"></div>
        </div>
        <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
      </div>
      <div className="h-40 bg-gray-300 rounded mb-4"></div>
      <div className="flex justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
          <div className="w-14 h-4 bg-gray-300 rounded"></div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
          <div className="w-14 h-4 bg-gray-300 rounded"></div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
          <div className="w-14 h-4 bg-gray-300 rounded"></div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-24 h-6 bg-gray-300 rounded"></div>
        </div>
        <div className="w-24 h-8 bg-gray-300 rounded-lg"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
