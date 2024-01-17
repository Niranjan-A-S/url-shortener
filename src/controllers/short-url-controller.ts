import { RequestHandler } from "express";
import ShortUrl from '../models/short-url';

export const postShortUrls: RequestHandler = async (req, res) => {
    try {
        if (!(req.body || req.body.fullUrl)) throw new Error('Request body is empty')
        await ShortUrl.create({ full: req.body.fullUrl });
        res.redirect('/');
    } catch (error) {
        console.log('Failed to store the data in the DB', error);
        res.status(500).send({
            message: 'Failed to store the data in the DB',
            error
        })
    }
}
