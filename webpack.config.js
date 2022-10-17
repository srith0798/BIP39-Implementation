module.exports = {
  resolve: {
    fallback: {
      stream: require.resolve("stream-browserify"),
      //   buffer: require("buffer"),
    },
  },
};
/*Steps:  
1. Configure the Webpack 
2. Install the dependencies
*/
