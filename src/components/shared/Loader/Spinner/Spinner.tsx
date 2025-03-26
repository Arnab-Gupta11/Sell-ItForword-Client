import "./spinner.css";
const Spinner = () => {
  return (
    <div className="min-h-[calc(100vh-100px)] w-full flex items-center justify-center">
      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-18 md:h-18">
        <span className="loader"></span>
      </div>
    </div>
  );
};

export default Spinner;
