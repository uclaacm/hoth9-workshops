const express = require('express')
const app = express()
const PORT = 8000;

// app.METHOD(PATH, HANDLER)
// METHOD is the name of an HTTP request (e.g. get)
// PATH is an endpoint on the server and what comes after the URL in the browser
// HANDLER is a JavaScript function that returns an HTTP response

const words = {
    noun: ['apple', 'bicycle', 'mittens'],
    verb: ['medidate', 'boogie', 'explode'],
    adjective: ['lovely', 'smelly', 'acceptable'],
    adverb: ['quickly', 'faithfully', 'solemnly']
};

// tells Express to expect data in json format
app.use(express.json());

app.get('/test', (req, res) => {
    res.status(200).send('Working!');
});

app.get('/words', (req, res) => {
    res.status(200).send(words);
});


// a colon after the slash indicates a parameter that the client passes in
app.get('/random/:partOfSpeech', (req, res) => {
    const { partOfSpeech } = req.params;
    const wordsOfPart = words[partOfSpeech];

    if (!wordsOfPart) {
        res.status(400).send(`ERROR: no part of speech matching ${partOfSpeech}`);
        return;
    }

    const rand = wordsOfPart[Math.floor(Math.random() * wordsOfPart.length)];
    res.status(200).send(rand);
});


// post requests have a body while get requests do not
app.post('/fill', (req, res) => {
    const { text } = req.body;

    if (!text) {
        res.status(400).send('ERROR: no text field found in body');
        return;
    }

    let result = '';
    const splitText = text.split("|");

    for (const token of splitText) {
        if (token == 'noun' || token == 'verb' || token == 'adjective' || token == 'adverb') {
            const wordsOfPart = words[token];

            if (!wordsOfPart) {
                res.status(400).send(`ERROR: no part of speech matching ${token}`);
                return;
            }
        
            const rand = wordsOfPart[Math.floor(Math.random() * wordsOfPart.length)];
            result += rand;
        } else {
            result += token;
        }
    }

    res.status(200).send(result);
});

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});