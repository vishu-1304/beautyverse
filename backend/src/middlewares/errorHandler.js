/**
 * Express middleware for global error handling.
 */
export function errorHandler(err, req, res, next) {
  console.error('[Global Error Handler]', err);

  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  return res.status(statusCode).json({
    error: err.name || 'InternalServerError',
    message: message,
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
  });
}

export default errorHandler;
