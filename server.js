// Client - Sever model
import http from "http";
import url from "url";

let server = http.createServer((req, res) => {
    
    let obj = {"data" : 5000};
    res.end("Early");
    console.log(req.url);

});

server.listen(5000, () => {
    console.log(`Server started on port ${5000}`);
});