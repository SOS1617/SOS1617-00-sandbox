"use strict";
/* global __dirname */

var express = require("express");
var bodyParser = require("body-parser");
var helmet = require("helmet");

var port = (process.env.PORT || 10000);
var BASE_API_PATH = "/api/v1";

var app = express();

app.use(bodyParser.json()); //use default json enconding/decoding
app.use(helmet()); //improve security

// @see: https://curlbuilder.com/
// @see: https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html
// @see: https://i.stack.imgur.com/whhD1.png
// @see: https://blog.agetic.gob.bo/2016/07/elegir-un-codigo-de-estado-http-deja-de-hacerlo-dificil/

console.log("---BEGIN PROBAR LA API CON CURL---");
console.log("curl -v -XGET -H 'Content-type: application/json'  'http://localhost:8080/api/v1/contacts'");
console.log("curl -v -XPOST -H 'Content-type: application/json' -d '{ \"name\": \"David\", \"phone\": \"954556350\", \"email\": \"david@example.com\" }' 'http://localhost:8080/api/v1/contacts'");
console.log("curl -v -XGET -H 'Content-type: application/json'  'http://localhost:8080/api/v1/contacts/David'");
console.log("curl -v -XPUT -H 'Content-type: application/json' -d '{ \"name\": \"Antonio\", \"phone\": \"954556350\", \"email\": \"antonio@example.com\" }' 'http://localhost:8080/api/v1/contacts'");
console.log("curl -v -XPUT -H 'Content-type: application/json' -d '{ \"name\": \"Antonio\", \"phone\": \"954556350\", \"email\": \"antonio@example.com\" }' 'http://localhost:8080/api/v1/contacts/David'");
console.log("curl -v -XGET -H 'Content-type: application/json'  'http://localhost:8080/api/v1/contacts/David'");
console.log("curl -v -XGET -H 'Content-type: application/json'  'http://localhost:8080/api/v1/contacts/Antonio'");
console.log("curl -v -XDELETE -H 'Content-type: application/json'  'http://localhost:8080/api/v1/contacts/Antonio'");
console.log("curl -v -XGET -H 'Content-type: application/json'  'http://localhost:8080/api/v1/contacts/Antonio'");
console.log("curl -v -XDELETE -H 'Content-type: application/json'  'http://localhost:8080/api/v1/contacts'");
console.log("curl -v -XGET -H 'Content-type: application/json'  'http://localhost:8080/api/v1/contacts'");
console.log("---END PROBAR LA API CON CURL---");

//TBD
var contacts = [];

// Base GET
app.get("/", function (request, response) {
    console.log("INFO: Redirecting to /contacts");
    response.redirect(301, BASE_API_PATH + "/contacts");
});


// GET a collection
app.get(BASE_API_PATH + "/contacts", function (request, response) {
    //TBD
});


// GET a single resource
app.get(BASE_API_PATH + "/contacts/:name", function (request, response) {
    //TBD
});


//POST over a collection
app.post(BASE_API_PATH + "/contacts", function (request, response) {
    //TBD
});


//POST over a single resource
app.post(BASE_API_PATH + "/contacts/:name", function (request, response) {
    //TBD
});


//PUT over a collection
app.put(BASE_API_PATH + "/contacts", function (request, response) {
    //TBD
});


//PUT over a single resource
app.put(BASE_API_PATH + "/contacts/:name", function (request, response) {
    //TBD
});


//DELETE over a collection
app.delete(BASE_API_PATH + "/contacts", function (request, response) {
    //TBD
});


//DELETE over a single resource
app.delete(BASE_API_PATH + "/contacts/:name", function (request, response) {
    //TBD
});


app.listen(port);
console.log("Magic is happening on port " + port);