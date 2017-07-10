var version = require('./package.json').version;

var cdnUrl = '//www.sky.com/assets/toolkit-core/v' + version + '/toolkit-core.min.css';
var cdnTag = '<link rel="stylesheet" href="' + cdnUrl + '">';

module.exports = {
    cdnUrl,
    cdnTag
};
