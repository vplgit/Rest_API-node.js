export function errror_handler(err: any, req: any, res: any, next: any) {
  if (err && err.code == 11000) {
    res.status(err.statusCode || 409).send({
      error: `Duplicate Entry 
      [ ${Object.keys(err.keyValue)} : ${Object.values(err.keyValue)[0]} ]`,
    });
    next();
  }

  res
    .status(err.statusCode || 500)
    .send({ error: err.message || "Internal Server Error" });
  next();
}
