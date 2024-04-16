import express from 'express';
import compression from 'compression';
import axios from 'axios';

const app = express();
app.use(compression());

import type { FlickrResponse } from '@shared/types';

app.get('/api/v1/photos', (_req, res) => {
    const params = new URLSearchParams();
    params.append('format', 'json');

    axios.get('https://www.flickr.com/services/feeds/photos_public.gne', { params })
    .then(response => {
        const sanitisedRes = response.data.replace(/^jsonFlickrFeed\(/, '').slice(0, -1);
        const parsedRes: FlickrResponse = JSON.parse(sanitisedRes);

        const cleanedRes = parsedRes.items.map(({ title, link, media, author, date_taken }) => ({
            id: Date.now(),
            title:title.trim() || date_taken,
            link:link,
            media:media["m"],
            author:author.match(/"([^"\\]+)\\?"/)?.[1] || author
        }));

        res.send(cleanedRes);
    })
});

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
