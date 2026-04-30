export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">

      <div className="flex flex-col items-center gap-4">

        {/* Spinner */}
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 rounded-full border-4 border-gray-200"></div>
          <div className="absolute inset-0 rounded-full border-4 border-t-lime-400 border-r-blue-600 border-b-transparent border-l-transparent animate-spin"></div>
        </div>

        {/* Text */}
        <div className="text-center">
          <p className="text-gray-700 font-medium">PAKIA</p>
          <p className="text-xs text-gray-400 mt-1">
            Please wait...
          </p>
        </div>

      </div>
    </div>
  );
}