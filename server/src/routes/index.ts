import { Express, Response, Request } from "express";

import {
  createShortUrl,
  handleRedirect,
} from "../controller/shortUrl.controller";
import validateReSource from "../middleware/validateResource";
import shortUrlSchema from "../schema/createShortUrl.schema";

function routes(app: Express) {
  app.get("/healthCheck", (req: Request, res: Response) => {
    res.send("Health");
  });

  app.post("/api/url", validateReSource(shortUrlSchema), createShortUrl);
  app.get("/:shortId", handleRedirect);
}
export default routes;
