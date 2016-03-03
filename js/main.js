var date      = '2014-05-20',
    url_base  = 'http://gdx.mlb.com/components/game/mlb',
    feed_obj  = new Feed(url_base, date); //,
    //list_obj  = new List(),
    //game_feed = [];

window.onload = function() {
    feed_obj.retrieveFeedData();
};
    // get feed data object
    //
