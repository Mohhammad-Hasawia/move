import React from "react";

const Login = () => {
  return (
    <section className="min-h-screen flex items-stretch text-white">
      {/* Left Side - Image Section */}
      <div
        className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80)",
        }}
      >
        <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
        <div className="w-full px-24 z-10">
          <h1 className="text-5xl font-bold text-left tracking-wide">
            Keep it special
          </h1>
          <p className="text-3xl my-4">
            Capture your personal memory in unique way, anywhere.
          </p>
        </div>
        <div className="bottom-0 absolute p-4 text-center right-0 left-0 flex justify-center space-x-4">
          <SocialIcons />
        </div>
      </div>

      {/* Right Side - Form Section */}
      <div
        className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0"
        style={{ backgroundColor: "#161616" }}
      >
        <div
          className="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80)",
          }}
        >
          <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
        </div>

        <div className="w-full py-6 z-20">
          {/* Logo */}
          <h1 className="my-6 text-indigo-400 text-3xl font-bold">MyBrand</h1>

          {/* Social Buttons */}
          <div className="py-6 space-x-2">
            <span className="w-10 h-10 inline-flex items-center justify-center rounded-full font-bold text-lg border-2 border-white">
              f
            </span>
            <span className="w-10 h-10 inline-flex items-center justify-center rounded-full font-bold text-lg border-2 border-white">
              G+
            </span>
            <span className="w-10 h-10 inline-flex items-center justify-center rounded-full font-bold text-lg border-2 border-white">
              in
            </span>
          </div>

          <p className="text-gray-100 mb-4">or use your email account</p>

          {/* Login Form */}
          <form className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
            <div className="pb-2 pt-4">
              <input
                type="email"
                placeholder="Email"
                className="block w-full p-4 text-lg rounded-sm bg-black focus:outline-none"
              />
            </div>
            <div className="pb-2 pt-4">
              <input
                type="password"
                placeholder="Password"
                className="block w-full p-4 text-lg rounded-sm bg-black focus:outline-none"
              />
            </div>
            <div className="text-right text-gray-400 hover:underline hover:text-gray-100">
              <a href="#">Forgot your password?</a>
            </div>
            <div className="px-4 pb-2 pt-4">
              <button
                type="submit"
                className="uppercase block w-full p-4 text-lg rounded-full bg-indigo-500 hover:bg-indigo-600 focus:outline-none"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

// Social Media Icons Component
const SocialIcons = () => (
  <>
    <svg
      fill="#fff"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 ..."></path>
    </svg>
    <svg
      fill="#fff"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path d="M9 8h-3v4h3v12h5v-12h3.642 ..."></path>
    </svg>
    <svg
      fill="#fff"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path d="M12 2.163c3.204 0 3.584.012 ..."></path>
    </svg>
  </>
);

export default Login;
