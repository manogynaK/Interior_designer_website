const CustomError = ({ statusCode }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          {statusCode ? `Error ${statusCode}` : 'An error occurred'}
        </h1>
        <p className="text-gray-600">
          {statusCode === 404 ? 'Page not found' : 'Something went wrong'}
        </p>
      </div>
    </div>
  );
};

CustomError.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default CustomError;
