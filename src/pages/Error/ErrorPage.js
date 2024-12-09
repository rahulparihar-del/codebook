const ErrorPage = ({ errorMessage }) => {
    return (
      <>
        <div className="grid h-3/6 place-content-center bg-white px-4" style={{marginTop: "14rem"}}>
          <h1 className="uppercase tracking-widest text-gray-500">{errorMessage}</h1>
        </div>
      </>
    );
  };
  
  export default ErrorPage;
  