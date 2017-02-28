'use strict';
const h = require('../helpers');


module.exports = () => {
  let routes = {
    'get': {
      '/': (req, res, next) => {
        res.render('login');
      },
      '/rooms': (req, res, next) => {
        res.render('rooms');j
      },
      '/chat': (req, res, next) => {
        res.render('chatroom');
      },
      '/getsession': (req, res, next) => {
        res.send("My favourite color: " + req.session.favColor);
      },
      '/setsession': (req, res, next) => {
        req.session.favColor = "Red",
        res.send("Session Set");
      }
    },
    'post': {

    },
    'NA': (req, res, next) => {
      res.status(404).sendFile(process.cwd() + '/views/404.htm');
    }
  }

  return h.route(routes);
}
