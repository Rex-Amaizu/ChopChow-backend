const { verify } = require('jsonwebtoken');
const secret = process.env.SECRET;

module.exports = (req, res, next) => {
  let token = req.headers['x-access-token'] || req.headers['authorization']; // Express headers are auto converted to lowercase
  console.log(" token to Verify is now:")
  console.log(token)
  
  if (token && token.startsWith('Bearer ')) {
    // Remove Bearer from string
    token = token.slice(7, token.length);
  }

  if (token) {
    verify(token, secret, (err, decoded) => {
      if (err) {
        // lets also check cookie..
        console.log("Cookie in err looks like");
        console.log(req.cookies);
        return res.json({
          success: false,
          message: 'Token is not valid'
        });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return res.json({
      success: false,
      message: 'Auth token is not supplied'
    });
  }
};