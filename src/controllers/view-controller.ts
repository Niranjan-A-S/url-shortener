import { RequestHandler } from "express";
import ShortUrl from '../models/short-url';

export const serverHomePage: RequestHandler = async (_req, res) => {
    const shortUrls = await ShortUrl.find({});
    res.render('index', { shortUrls });
}

export const getShortUrl: RequestHandler = async (req, res) => {
    try {
        const shortUrl: any = await ShortUrl.findOne({ short: req.params.shortUrl });
        if (!shortUrl) return res.sendStatus(404);
        shortUrl.clicks++;
        shortUrl.save();
        res.redirect(shortUrl.full)
    } catch (error) {
        console.log('Failed to get the requested short ur from the DB', error);
    }
}