export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 bg-slate-900 text-white">
      {/* Top Bar */}
      <div className="w-full flex justify-between items-center">
        <h1 className="text-xl font-bold">AidConnects</h1>
        <button className="text-sm text-gray-400">Skip</button>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center text-center max-w-md w-full">
        {/* Placeholder for your image */}
        <div className="w-full h-64 bg-slate-700 rounded-2xl mb-8 flex items-center justify-center">
          <span className="text-gray-400">Image Placeholder</span>
        </div>

        <h2 className="text-4xl font-extrabold mb-4 leading-tight">
          Welcome to<br />AidConnects
        </h2>
        
        <p className="text-gray-300 mb-8">
          Nigeria's #1 peer-to-peer services marketplace — connecting you with trusted professionals.
        </p>

        {/* Pagination dots */}
        <div className="flex gap-2 mb-6">
          <div className="w-6 h-1 bg-red-500 rounded-full"></div>
          <div className="w-2 h-1 bg-gray-600 rounded-full"></div>
          <div className="w-2 h-1 bg-gray-600 rounded-full"></div>
          <div className="w-2 h-1 bg-gray-600 rounded-full"></div>
        </div>

        {/* Next Button */}
        <button className="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-full transition-colors">
          Next
        </button>
      </div>
      
      {/* Footer */}
      <div className="text-sm text-gray-500">
        by Medo
      </div>
    </main>
  );
}