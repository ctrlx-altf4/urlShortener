import { Request, Response, NextFunction } from "express";
import { AnyObjectSchema } from "yup";
const validateReSource =
  (resourceSchema: AnyObjectSchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await resourceSchema.validate({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      next();
    } catch (e) {
      return res.sendStatus(400);
    }
  };
export default validateReSource;
