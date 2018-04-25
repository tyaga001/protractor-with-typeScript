module.exports = function TakeScreenshot() {
  this.After(function (spec, callback) {
    if (spec.isFailed()) {
      browser.takeScreenshot().then(function (png) {
        var decodedImage = new Buffer(png.replace(/^data:image\/(png|gif|jpeg);base64,/,''), 'base64');
        spec.attach(decodedImage, 'image/png');
        callback();
      });
    }
    else {
      callback();
    }
  });
}