var gulp = require('gulp');
var spsave = require('gulp-spsave');
var settings = require('./settings.json');

gulp.task('default', function () {
    return gulp.src('./app/**')
        .pipe(spsave({
            // Login info for dev system, not a secrect, do not store real pw here
            username: settings.username,
            password: settings.password,
            siteUrl: settings.siteUrl,
            folder: 'Style Library',
            flatten: false
        }));

});
