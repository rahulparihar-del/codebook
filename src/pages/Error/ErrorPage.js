const ErrorPage = ({ errorMessage }) => {
    return (
      <>
        <div className="grid place-content-center  px-4">
          <h1 className="uppercase tracking-widest text-orange-800 dark:text-orange-800">{errorMessage}</h1>
        </div>
      </>
    );
  };
  
  export default ErrorPage;
  