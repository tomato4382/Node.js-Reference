﻿var Image = require('image-ninja');

var dirpath = 'images/';
var imgname = 'download-logo.png';
var tmppath = 'tmp/'

var image = new Image(dirpath + imgname);
image
	.crop(5, 10, 50, 100)
	.save(tmppath + 'crop_' + imgname)
	.then(function (newImage) {
		console.log('Done.'); 
	});