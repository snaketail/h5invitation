module.exports = function (eleventyConfig) {
  // 静态资源直拷到 _site，保证路径不变
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("styles.css");
  eleventyConfig.addPassthroughCopy("app.js");

  // 可选：如果你还有 favicon / robots / sitemap 也照样加
  // eleventyConfig.addPassthroughCopy("favicon.ico");
  // eleventyConfig.addPassthroughCopy("robots.txt");

  return {
    dir: {
      input: ".",     // 当前目录作为输入
      output: "_site" // 输出到 _site（你现在也已经有）
    }
  };
};
