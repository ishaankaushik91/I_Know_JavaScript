import http from "http";
import url from "url";

let port = 5000;

let serving = http.createServer((req, res) => {
    res.end(req.url);
    console.log(req.url);
})

serving.listen(port, () => {
    console.log(`Server started at ${port}`);
})