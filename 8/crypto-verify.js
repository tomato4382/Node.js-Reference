var crypto = require('crypto');
var fs = require('fs');

var sig = 

var signature = new Buffer('examples, example@mandice.com');
var certificate = fs.readFileSync('certificate.pem');
var cert = certificate.toString('ascii');
var verified = crypto.createVerify('RSA-SHA256');
verified.update(signature);
var result = verified.verify(cert, sig, 'hex');
console.log("The result is : " + result);