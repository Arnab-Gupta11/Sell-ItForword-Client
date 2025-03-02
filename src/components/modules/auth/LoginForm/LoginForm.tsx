const LoginForm = () => {
  return (
    <div>
      <form>
        <div className="form-control">
          {/* <label className="label">
                    <span className="label-text">Email</span>
                  </label> */}
          <input
            type="email"
            placeholder="email"
            name="email"
            className="px-4 py-3 rounded-lg shadow-inner shadow-violet-300 outline-none border-none mb-4"
            required
          />
        </div>

        <div className="form-control mb-4">
          {/* <label className="label">
                    <span className="label-text">Password</span>
                  </label> */}
          <div className="relative">
            <input
              type="password"
              name="password"
              placeholder="password"
              className="px-4 py-3 w-full rounded-lg shadow-inner shadow-violet-300 outline-none border-none bg-transparent mb-4"
              required
            />
          </div>
        </div>

        <p>
          <input type="checkbox" name="checkbox" id="checkbox" />
          <label htmlFor="checkbox" className="ml-3">
            Accept our term and condition
          </label>
        </p>
        <div className="form-control mt-6 p-0">
          <button
            className="btn text-xl text-white font-medium normal-case bg-[#FF6A25] shadow-md shadow-violet-100 hover:border-[#2d373c] hover:bg-white hover:text-[#2d373c] hover:shadow-md hover:shadow-[#2d373c]"
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
