import './App.css';

function App() {
  return (
    <>
      <div className="flex h-4/5">
        <div className="w-1/4 bg-gray-900 flex items-center justify-center">
          <h1 className="text-white text-3xl font-bold">Board.</h1>
        </div>

        <div className="w-3/4 flex flex-col items-center justify-center">
          <h3 className="text-2xl font-bold mb-2 text-start1">Sign In</h3>
          <p className="font-bold mb-4 text-start">Sign in to your Account</p>

          <div className="flex mb-4">
  <button  className="button1 bg-gray-200 hover:bg-gray-300 text-gray px-0 py-2 rounded flex items-center justify-center mr-2">
    <span className="mr-2">
      <img width="20" height="20" src="https://img.icons8.com/color/48/000000/google-logo.png" alt="google-logo"/>
    </span>
    <p> Sign in with Google </p>
  </button>

  <button className="button bg-gray-200 hover:bg-gray-300 text-gray py-0 px-2 rounded flex items-center justify-center">
    <span className="mr-2">
      <img width="20" height="20" src="https://img.icons8.com/deco/48/mac-os.png" alt="mac-os"/>

    </span>
    <p> Sign in with Apple </p>
  </button>
</div>


          <div className="w-2/5 p-8 bg-white rounded shadow">
            <form action="/" method="POST">
              <div className="mb-6">
                <label htmlFor="username" className="block mb-2">
                  Email Address
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Enter email address"
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="password" className="block mb-2">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter password"
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
                <a href="https://www.google.com" className="text-blue-500 text-sm mt-1 block">
                  Forgot Password?
                </a>
              </div>

              <button className="mb-0 bg-black hover:bg-gray-700 text-white py-2 px-2 w-full rounded-xl">
                Sign In
              </button>
            </form>

    
          </div>
          <p className="text-center mt-4 mb-12">
              Don't have an account? <a href="https://www.google.com" className="text-blue-500">Register here</a>
            </p>
        </div>
       
      </div>
    </>
  );
}







export default App;





