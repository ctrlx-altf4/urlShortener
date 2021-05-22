import { Request, Response } from "express";
import shortUrl from "../models/shortUrl.model";

export const createShortUrl = async (req: Request, res: Response) => {
  //Get Destination from body
  const { destination } = req.body;

  //create Short UR
  const newUrl = await shortUrl.create({ destination });

  //Return URL
  return res.send(newUrl);
};

export const handleRedirect = async (req: Request, res: Response) => {
  const { shortId } = req.params;

  const url = await shortUrl.findOne({ shortId }).lean();

  if (!url) {
    return res.sendStatus(404);
  }
  return res.redirect(url.destination);
};
