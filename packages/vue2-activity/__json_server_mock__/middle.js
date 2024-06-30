/**
 * @Desc: middle.js
 * @Author: wu xingtao
 * @Date: 2022/3/9
 */
//middle.js
module.exports = (req, res, next) => {
  if (req.method === 'POST') {
    req.method = 'GET';
  }
  // Continue to JSON Server router
  next()
};
