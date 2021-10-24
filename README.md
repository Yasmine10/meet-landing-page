# Frontend Mentor - Meet landing page solution

This is a solution to the [Meet landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/meet-landing-page-rbTDS6OUR). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

### Screenshot

![Solution screenshot](https://github.com/Yasmine10/meet-landing-page/blob/main/app/assets/design/meet-landing-page-solution.png?raw=true)

### Links

- Solution URL: [https://github.com/Yasmine10/meet-landing-page](https://github.com/Yasmine10/meet-landing-page)
- Live Site URL: [https://meet-landing-page-yasmine.vercel.app/](https://meet-landing-page-yasmine.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Sass (mixins, variables, partials)
- Gulp (sass and browsersync)

### What I learned

- Started using more sass features in this project. Like mixins for media queries, sass maps, partials, ... .

  ```css
  @use "sass:map";

  $breakpoints: (
    "small": 24rem,
    "medium": 48rem,
    "large": 75rem 
  );

  /* for media queries */
  @mixin mq($size) {
    @media (min-width: map.get($breakpoints, $size)) {
      @content;
    }
  }
  ```

- Learned to setup a gulp file to be able to compile sass into css.

  ```js
  const gulp = require('gulp');
  const browserSync = require('browser-sync').create();
  const sass = require('gulp-sass')(require('sass'));
  const postcss = require('gulp-postcss');
  const autoprefixer = require('autoprefixer');
  const cssnano = require('cssnano');

  // to compile sass/scss to css
  function sassTask() {
      return gulp.src("./app/scss/**/*.scss", { sourcemaps: true })
          .pipe(sass().on('error', sass.logError))
          .pipe(postcss([autoprefixer(), cssnano()]))
          .pipe(gulp.dest("./dist/css", { sourcemaps: '.' }))
          .pipe(browserSync.stream());
  }

  // to watch file changes and live reload with browserSync
  function watchTask() {
      browserSync.init({
      server: {
        baseDir: './',
      }
    });
      gulp.watch("./app/scss/**/*.scss", sassTask);
      gulp.watch("./*.html").on('change', browserSync.reload);
  }

  exports.sassTask = sassTask;
  exports.watchTask = watchTask;
  ```

### Continued development

- Still want to learn more about sass and improve my skills

### Useful resources

- [Sass documentation](https://sass-lang.com/documentation/syntax) - To learn how to use the syntax the right way.
- [Gulp 4 setup - Kevin Powell](https://www.youtube.com/watch?v=QgMQeLymAdU) - This is an amazing video that shows you how to setup a gulp file for Sass, browser-sync and JavaScript.

## Author

- Website - [yasminedewolf.be](https://yasminedewolf.be)
- Frontend Mentor - [@Yasmine10](https://www.frontendmentor.io/profile/Yasmine10)