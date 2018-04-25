javascript:(function(){
  var rssURL = document.querySelector('[type="application/rss+xml"]').getAttribute('href');
  var protocol = rssURL.match(/^([a-z0-9]+):\/\//);
  if (!protocol) rssURL = new URL(rssURL, window.location.protocol + '//' + window.location.hostname);
  window.open('http://feedly.com/i/subscription/feed/' + rssURL, '_blank');
})();
