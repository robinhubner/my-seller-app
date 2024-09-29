export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="w-full py-6 bg-white shadow">
        <nav className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold text-blue-600">YourLogo</a>
          </div>

          {/* Navigation Links */}
          <ul className="hidden md:flex space-x-8 ml-10">
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Product</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Solutions</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Pricing</a></li>
          </ul>

          {/* Sign In / Sign Up */}
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-600 hover:text-blue-600">Sign In</a>
            <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Sign Up</a>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center py-12">
        {/* Page Heading */}
        <header className="text-center mb-10">
          <h1 className="text-5xl font-bold text-blue-600 mb-4">
            Make Your Amazon Business Enterprise Ready
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of successful Amazon sellers who are optimizing their businesses using our platform. Start your free trial today and get enterprise-grade insights.
          </p>
        </header>

        {/* Registration Form */}
        <form className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg space-y-6">
          {/* Full Name Input */}
          <label className="block">
            <span className="block text-sm font-medium text-gray-700">Full Name</span>
            <input
              type="text"
              placeholder="John Doe"
              className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
              focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </label>

          {/* Email Input */}
          <label className="block">
            <span className="block text-sm font-medium text-gray-700">Email</span>
            <input
              type="email"
              placeholder="you@example.com"
              className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
              focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </label>

          {/* Password Input */}
          <label className="block">
            <span className="block text-sm font-medium text-gray-700">Password</span>
            <input
              type="password"
              placeholder="Enter a strong password"
              className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
              focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </label>

          {/* Start Free Trial Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Start Free Trial
          </button>
        </form>

        {/* Additional Info Section */}
        <p className="text-center text-gray-600 mt-8">
          Already have an account? <a href="#" className="text-blue-600 hover:underline">Sign In</a>
        </p>
      </main>
    </div>
  );
}
