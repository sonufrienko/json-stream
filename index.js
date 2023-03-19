const fs = require('fs');
const JSONStream = require('JSONStream');

const FILE_PATH = 'data.json';
const JSON_KEY = 'cars.1.models';

const stream = fs.createReadStream(FILE_PATH, { encoding: 'utf8' }).pipe(JSONStream.parse(JSON_KEY));

stream.on('data', console.log);
