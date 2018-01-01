'use strict';

import path from 'path';

export default function(gulp, plugins, args, config, taskTarget, browserSync) {
  let dirs = config.directories;
  let dest = path.join(taskTarget);
  let fontDest = path.join(dirs.source, '_fonts');

  // Copy
  gulp.task('copy', () => {
    return gulp.src([
      path.join(dirs.source, '**/*'),
      '!' + path.join(dirs.source, '{**/\_*,**/\_*/**}'),
      '!' + path.join(dirs.source, '**/*.nunjucks')
    ])
    .pipe(plugins.changed(dest))
    .pipe(gulp.dest(dest));
  });

 gulp.task('copy:bootstrapFonts', () => {
    return gulp.src([
        path.join('node_modules/bootstrap-sass/assets/fonts/', '**/*')
      ])
      .pipe(plugins.changed(fontDest))
      .pipe(gulp.dest(fontDest));
  });



}
