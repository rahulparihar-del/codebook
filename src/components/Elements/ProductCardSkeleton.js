const ProductCardSkeleton = () => {
  return (
    <div className="m-3 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-dark dark:border-gray-700 animate-pulse">
      <div className="relative bg-gray-300 h-64 w-full rounded-t-lg dark:bg-gray-700"></div>
      <div className="p-5">
        <div className="h-6 bg-gray-300 rounded dark:bg-gray-700 mb-4"></div>
        <div className="h-4 bg-gray-300 rounded dark:bg-gray-700 mb-2"></div>
        <div className="h-4 bg-gray-300 rounded dark:bg-gray-700 mb-4"></div>
        <div className="flex items-center my-4 space-x-2">
          <div className="h-4 w-20 bg-gray-300 rounded dark:bg-gray-700"></div>
          <div className="h-4 w-12 bg-gray-300 rounded dark:bg-gray-700"></div>
        </div>
        <div className="flex justify-between items-center">
          <div className="h-6 w-24 bg-gray-300 rounded dark:bg-gray-700"></div>
          <div className="h-8 w-32 bg-gray-300 rounded dark:bg-gray-700"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
