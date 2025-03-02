const socks = require("socksv5");

let port = 1080;
let username = "zaki";
let password = "zaki";

const server = socks.createServer((info, accept, deny) => {
    accept();
});

server.useAuth(socks.auth.UserPassword((user, pass, cb) => {
    cb(user === username && pass === password);
}));

server.listen(port, "0.0.0.0", () => {
    console.log(`[ ! ] Proxy SOCKS5 has started on port ${port}`);
});
