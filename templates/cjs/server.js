const express = require('express');
const graphqlHTTP = require('express-graphql');

const schema = require('./schema.js');
const app = express();

    app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
    formatError: error => ({
        message: error.message,
        locations: error.locations,
        stack: error.stack,
        path: error.path
    })
}));

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
