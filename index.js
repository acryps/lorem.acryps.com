const { randomBytes } = require('crypto');
const express = require('express');
const path = require('path');

const app = express();

app.use('/favicon.ico', express.static(path.join(__dirname, 'assets', 'favicon.ico')));
app.use('/', express.static(path.join(__dirname, 'page', 'built')));

app.get('/blob/:type/:size', (req, res) => {
    const compresable = req.params.type == 'repeating';
    const size = +req.params.size;

    const blockSize = 1024;
    const compressionBlock = 4;

    console.log(size);

    if (compresable) {
        // write the same data multiple times, which should make it compressable
        for (let block = 0; block < size; block += blockSize * compressionBlock) {
            const data = randomBytes(blockSize);

            for (let repetition = 0; repetition < compressionBlock; repetition++) {
                res.write(data);
            }
        }

        res.end();
    } else {
        for (let block = 0; block < size; block += blockSize) {
            res.write(randomBytes(blockSize));
        }

        res.end();
    }
});

app.listen(process.env.PORT || 1236, () => {
    console.log(`unicode started on ${process.env.PORT}`);
});