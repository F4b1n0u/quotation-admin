var firebase = require('firebase')
var moment = require('moment')

var QUOTES = require('./QUOTES')

var FIREBASE_CONFIG = {
  apiKey: 'AIzaSyD3f97NbjtKeY4-bPOQj37F8RnKMR-BAPY',
  authDomain: 'quotation-98837.firebaseapp.com',
  databaseURL: 'https://quotation-98837.firebaseio.com',
  projectId: 'quotation-98837',
  storageBucket: 'quotation-98837.appspot.com',
  messagingSenderId: '732051141901',
}

firebase.initializeApp(FIREBASE_CONFIG)

var database = firebase.database()

QUOTES.forEach(quote => {
  var quoteId = moment(quote.date).startOf('day').unix()
  database.ref(`quotes/${quoteId}`).set(quote)
});
