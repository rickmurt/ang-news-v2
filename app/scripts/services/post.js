'use strict';

app.factory('Post', function($resource) {
  return $resource('https://ang-news-v2.firebaseIO.com/posts/:id.json');
});
