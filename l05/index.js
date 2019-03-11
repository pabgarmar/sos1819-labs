var express= require ("express");

var app= express();

var port= process.env.PORT || 8080;

app.get("/time", (request, response) => {
    response.send(new Date());
});

app.use("/", express.static("/home/ubuntu/workspace/SOS1819-labs/l05/public"));

app.listen(port, () => {
    console.log("Magic is happening in port " +port);
});