'use strict';

const express = require('express');
// const session = require('express-session');
// const MongoDBStore = require('connect-mongodb-session')(session);
// const store = new MongoDBStore({
//     uri: 'mongodb://localhost:27017/db',// create a db called db
//     //databaseName: '',
//     collection: 'sessions'
// },
// function(error) {
//   // Inform if there is a failure to connect to mongo server
//   if(error){
//     console.log("Mongo Connection Err:\n" +error);
//   }else{
//       console.log("Mongo Connection successful!");
//   }

// });
// // Catch  MongoDB errors
// store.on('error', function(error) {
//     console.log("MongoDB Store error: \n"+error);
//   });

// const Security = require('./lib/Security');
// const Products = require('./model/Products');
const path = require('path');
const app = express();

const port = process.env.PORT || 5000;

app.set('view engine', 'ejs');
const facebook = require("./routes/facebook");
app.use('/facebook', facebook);

app.use(express.static(path.join(__dirname,'client/build' )));

// app.use(session({
//     secret: 'keyboard cat',
//     cookie: {
//       maxAge: 1000*60 // 1 minute
//       //1000 * 60 * 60 * 24 * 7 // 1 week
//       //try using expires as well, for a month to give time for marketing retargeting

//     },
//     store: store,
//     resave: true, // look into store's touch method*
//     saveUninitialized: false,
//     genid:(req)=>{
//         return Security.generateId()
//     }
//     // unset:'destroy',*
//     // name: 'session cookie name'*
//   }));

// Serve static files from the React app
app.use('/', express.static(path.join(__dirname,'client/public')));

// on enetering landing page
 app.get('/find', function (req, res) {
    console.log("Gets in get");
    if(!req.session.cart) {
        console.log("Creates a cart session")
        req.session.cart = {
            items: [],
            totals: 0.00,
            formattedTotals: ''
        };
    }
    else{
        console.log("Cart exists");
        console.log(req.session);
    } 
     var products = [{"_id":{"$oid":"5795e57c7078f66363833977"},"product_id":1362.0,"id":"B000H1DF7W","title":"dragon naturally speaking standard v9","description":"dragon naturallyspeaking 9 (standard edition) gives small business users and pc enthusiasts the power to create documents reports e-mails and more -- all by speaking! over three times faster than typing and amazingly accurate naturallyspeaking 9 translates your voice dictations into microsoft word and excel corel wordperfect and virtually all windows-based applications. it's never been easier to use -- with no script reading required you can get started right away! naturallyspeaking 9 translates your voice dictations into microsoft word and excel corel wordperfect and virtually all windows-based applications. view larger. three times faster than typing a c/net editor's choice for february 2006 and a pc world 100 best products of 2006 dragon naturallyspeaking 9 is up to 99 percent accurate and often more accurate than typing. dragon naturallyspeaking never makes a spelling mistake and it's actually programmed to get smarter the more your use it. and because most people speak over 120 words per minute but type less than 40 words a minute naturallyspeaking lets you create letters and e-mails about three times faster than typing by hand. dragon naturallyspeaking 9 is extremely easy to use and require no training. a full set of new on-screen tutorials simplify the training process so you can be an expert dragon naturallyspeaking user right away. an included approved free noise-canceling microphone helps you get started immediately. and you can use your voice to dictate edit and control just about any windows-based application which gives you unprecedented flexibility as you work. it even supports mozilla firefox and thunderbird. just talk and you can surf the web open and close applications even control your mouse and the entire desktop. you can also dictate edit and navigate more easily in microsoft word outlook express and corel wordperfect than in previous versions. for web browsing dragon naturallyspeaking 9 lets you search the web access information and navigate web pages by speaking urls and links. the dragonbar includes a select and say indicator that turns green when you are in an application or window where all of naturallyspeaking's functionality is supported. seamless editing functionality we all add unnecessary ums and ahs when we speak and the last thing you want is to spend your time editing all those extraneous insertions from your documents. thanks to its built-in nothing but speech (nbs) technology dragon naturallyspeaking 9 filters out inadvertent fillers and sounds between words keeping your document clean. the program's natural punctuation feature means that when you dictate casual writing styles you no longer have to say period and comma. so why type your emails or fiddle with your mouse to surf the web when you can more easily and quickly use your voice?","manufacturer":"nuance communications inc.","price":99.99,"image":"5.jpeg"}
     ,{"_id":{"$oid":"5795e57c7078f66363833978"},"product_id":1363.0,"id":"B000P9CR66","title":"mediarecover","description":"mediarecover gives you the ability to recover files you were positively convinced were gone forever - even if you've deleted them. losing memories of vacations and fun times is bad enough but losing important business files can threaten your livelihood. you owe it to yourself to be prepared. mediarecover's 3-step recovery process ensures you can access your photos music and files when you need to!","manufacturer":"aladdin systems","price":29.99,"image":"1.jpeg"}
,{"_id":{"$oid":"5795e57c7078f66363833979"},"product_id":1364.0,"id":"B000J588G4","title":"photo explosion 3.0","description":"photo explosion 3.0","manufacturer":"nova development","price":29.99,"image":"8.jpeg"}]

    res.render('index', {
        pageTitle: 'Node.js Shopping Cart',
         products: products,
        nonce: Security.md5(req.sessionID + req.headers['user-agent'])
    });
    // Products.find({price: {'$gt': 0}}).sort({price: -1}).limit(6).then(products => {
    //     console.log(products);
    //     let format = new Intl.NumberFormat(req.app.locals.locale.lang, {style: 'currency', currency: req.app.locals.locale.currency });
    //     products.forEach( (product) => {
    //        product.formattedPrice = format.format(product.price);
    //     });

    //     res.render('index', {
    //         pageTitle: 'Node.js Shopping Cart',
    //         products: products,
    //         nonce: Security.md5(req.sessionID + req.headers['user-agent'])
    //     });
  
    // }).catch(err => {
    //     res.status(400).send('Bad request');
    // });
    console.log("ends db search")
 }
);

  
  app.get('/test', (req, res) => {
    console.log("To test page");
    res.send(JSON.stringify(req.session));

  });

  app.get('/redirect', (req, res) => {
    console.log("To redirect page");
    res.sendFile(path.join(__dirname+'/client/public/'));
  });


  app.get('/renderEJS', (req, res) => {
    console.log("To render ");
    res.render('index');

    // res.render('/index');
  });
// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
// app.get('*', (req, res) => {
//     console.log("Gets in client builds index");
//     res.sendFile(path.join(__dirname+'/client/build/'));
//   });
  
// after identifying unique  session tokens from MD5 string
// Then we are able to compare tokens in each singular form request: 
// app.post('/test', (req, res) => {
//     let token = req.body.nonce;
//     if(Security.isValidNonce(token, req)) {
//       console.log("Post route test of valid Nonce says OK");
      
//     } else {
//       // Reject the request
//       console.log("Post route test of valid Nonce is REJECTED!");

//     }
// });

// app.get('/cart', (req, res) => {
//     console.log("Gets in cart route");
//     let sess = req.session;
//     console.log(sess);
//     let cart = (typeof sess.cart !== 'undefined') ? sess.cart : false;
//     res.render('cart', { 
//         pageTitle: 'Cart',
//         cart: cart,
//         nonce: Security.md5(req.sessionID + req.headers['user-agent'])
//     });
// });

// app.get('/cart/remove/:id/:nonce', (req, res) => {
//    let id = req.params.id;
//    if(/^\d+$/.test(id) && Security.isValidNonce(req.params.nonce, req)) {
//        Cart.removeFromCart(parseInt(id, 10), req.session.cart);
//        res.redirect('/cart');
//    } else {
//        res.redirect('/');
//    }
// });

// app.get('/cart/empty/:nonce', (req, res) => {
//     if(Security.isValidNonce(req.params.nonce, req)) {
//         Cart.emptyCart(req);
//         res.redirect('/cart');
//     } else {
//         res.redirect('/');
//     }
// });

// app.post('/cart', (req, res) => {
//     let qty = parseInt(req.body.qty, 10);
//     let product = parseInt(req.body.product_id, 10);
//     if(qty > 0 && Security.isValidNonce(req.body.nonce, req)) {
//       Products.findOne({product_id: product}).then(prod => {
//           Cart.addToCart(prod, qty);
//           Cart.saveCart(req);
//           res.redirect('/cart');
//       }).catch(err => {
//          res.redirect('/');
//       });
//   } else {
//       res.redirect('/');
//   }
//   });

//   app.post('/cart/update', (req, res) => {
//     let ids = req.body["product_id[]"];
//     let qtys = req.body["qty[]"];
//     if(Security.isValidNonce(req.body.nonce, req)) {
//         let cart = (req.session.cart) ? req.session.cart : null;
//         let i = (!Array.isArray(ids)) ? [ids] : ids;
//         let q = (!Array.isArray(qtys)) ? [qtys] : qtys;
//         Cart.updateCart(i, q, cart);
//         Cart.saveCart(req);
//         res.redirect('/cart');
//     } else {
//         res.redirect('/');
//     }
//     });

//     app.get('/checkout', (req, res) => {
//         let sess = req.session;
//         let cart = (typeof sess.cart !== 'undefined') ? sess.cart : false;
//         res.render('checkout', {
//             pageTitle: 'Checkout',
//             cart: cart,
//             checkoutDone: false,
//             nonce: Security.md5(req.sessionID + req.headers['user-agent'])
//         });
//     });
    
//     app.post('/checkout', (req, res) => {
//         let sess = req.session;
//         let cart = (typeof sess.cart !== 'undefined') ? sess.cart : false;
//         if(Security.isValidNonce(req.body.nonce, req)) {
//             res.render('checkout', {
//                 pageTitle: 'Checkout',
//                 cart: cart,
//                 checkoutDone: true
//             });
//         } else {
//             res.redirect('/');
//         }
//     });
    



app.listen(port, () => console.log(`Listening on port ${port}`));