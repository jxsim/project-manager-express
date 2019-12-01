const connection = require('./api/helpers/connection');
connection.connect();

const port = process.env.PORT || 3000;
const app = require('./app');

app.listen(port, () => console.log(`app listening on port ${port}!`));
