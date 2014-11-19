# gulp-filesInStream
> A plugin, which prints current files in stream into console with given formatting

## Usage

First, install `gulp-filesInStream` as a development dependency:

```shell
npm install --save-dev gulp-filesInStream
npm install --save-dev chalk
```

Then, add it to your `gulpfile.js`:

```javascript
var filesInStream = require('gulp-filesInStream'),
    chalk = require('chalk');

gulp.task('myTask', function(){
  gulp.src(['file.txt'])
    .pipe(filesInStream(chalk.bgBlue, 'MY TEXT FILE'))
    .pipe(gulp.dest('build/file.txt'));
});
```


## API

gulp-filesInStream can be called:
a. without parameters, so default chalk.white.bold is used
b. with chalk parameter, e.g. chalk.bgRed.bold
c. with chalk AND message prefix, e.g. 'FILE TO BE COMPILED:'

### filesInStream([chalkOptions[, stringMessagePrefix])

#### chalkOptions
Type: `Funtction`

The chalk to print with.

#### stringMessagePrefix
Type: `String`

Message to prefix the file with, e.g. 'FILE TO BE COMPILED:' will produce "FILE TO BE COMPILED: somefile.js"

[Chalk documentation]: https://www.npmjs.org/package/chalk