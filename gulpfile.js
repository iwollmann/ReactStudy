"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect');
var open = require('gulp-open');
var util = require('gulp-util');
var webpack = require('webpack-stream');
var lint = require('gulp-eslint');
var lintreport = require('eslint-html-reporter');
var fs = require('fs');
var path = require('path');
var concat = require('gulp-concat-css');
var debug = require('gulp-debug');
var historyApiFallback = require('connect-history-api-fallback');

var config ={
    port:9001,
    devBaseUrl:'http://localhost',
    paths:{
        html:'./src/*.html',
        dist:'./dist',
        mainJs:'./src/js/main.js',
        js:'./src/js/**/*.js',
        css:[
            'node_modules/semantic-ui/dist/semantic.min.css',
            'src/css/dev.css'
        ]
    }
};

gulp.task('connect',function () {
    connect.server({
        root:'dist',
        port:config.port,
        base:config.devBaseUrl,
        livereload: true,
        open:{
            browser:'chrome'
        },
        middleware: function(connect, opt){
            return [historyApiFallback({})];
        }
    });
});

gulp.task('open',['connect'],function () {
    gulp.src('dist/index.html')
        .pipe(open({uri:config.devBaseUrl + ':' + config.port}));
});

gulp.task('watch',function () {
    gulp.watch(config.paths.html,['html']);
    gulp.watch(config.paths.js,['js','lint']);
});

gulp.task('html',function () {
    gulp.src('src/*.html')
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload());
});

gulp.task('css',function () {
    gulp.src(config.paths.css)
        .pipe(concat('css/bundle.css'))
        .pipe(gulp.dest(config.paths.dist));
});

gulp.task('js',function () {
    gulp.src(config.paths.mainJs)
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload());
});

gulp.task('lint',function () {
    return gulp.src(config.paths.js)
        .pipe(lint({configFile:'eslint.config.json'}))
        .pipe(lint.format(lintreport,function (results) {
            fs.writeFileSync(path.join(config.paths.dist,'results.html'),results,{'flag': 'w'});
        }))
        .pipe(connect.reload());
});

gulp.task('openlintresults',function () {
    gulp.src('dist/results.html')
        .pipe(open({uri:config.devBaseUrl + ':' + config.port + '/results.html'}));
});

gulp.task('default',['open','html','css','js','lint','openlintresults','watch']);