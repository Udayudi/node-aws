const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
    return res.send('FROM AWS');
}); 


app.listen(port, () => {
    console.log(`Server started on ${port}`);
});