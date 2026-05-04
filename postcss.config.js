module.exports = {
  plugins: [
    require('postcss-import')({
      // This will inline all @import statements
      path: ['assets', 'assets/css']
    }),
    require('postcss-preset-env')({
      // Converts modern CSS to backwards-compatible CSS
      stage: 3,
      features: {
        'nesting-rules': true,
        'custom-properties': false, // Keep CSS variables
        'custom-media-queries': true
      }
    }),
    require('autoprefixer')({
      // Adds vendor prefixes
      overrideBrowserslist: [
        'last 2 versions',
        '> 1%',
        'not dead'
      ]
    })
    // Temporarily disabled cssnano for debugging
    // require('cssnano')({
    //   // Minifies CSS
    //   preset: ['default', {
    //     discardComments: {
    //       removeAll: true
    //     },
    //     normalizeWhitespace: true,
    //     colormin: true,
    //     minifyFontValues: true
    //   }]
    // })
  ]
};
