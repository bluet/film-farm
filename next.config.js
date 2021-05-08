const { NODE_ENV, __NEXT_PROCESSED_ENV, ...env } = process.env;

module.exports = {
  images: {
    domains: ["i.ytimg.com", "www.youtube.com"],
  },
  env,
};
