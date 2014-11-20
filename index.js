var chalk = require('chalk'),
    mapStream = require('map-stream'),
    path = require('path');

// consts
const PLUGIN_NAME = 'gulp-filesInStream';

function gulpFilesInStream(printer, eventText) {
    return mapStream(function (file, cb) {
        var validPrinter = typeof printer === "function" ? printer : chalk.white.bold,
            filepath = path.relative(process.cwd(), file.path);
        console.log(validPrinter((eventText && (eventText + ' ') || '') + filepath));

        return cb(null, file);
    });
};

// exporting the plugin main function
module.exports = gulpFilesInStream;