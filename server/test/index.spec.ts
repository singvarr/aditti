const ctx = require.context(__dirname, true, /.ts$/);
ctx.keys().forEach(ctx);
module.exports = ctx;
