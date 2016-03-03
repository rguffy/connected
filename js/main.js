var date      = '2014-05-20 00:00:00 PDT',
    url_base  = 'http://gdx.mlb.com/components/game/mlb',
    feed_obj  = new Feed(url_base, date),
    feed_data = {},
    //list_obj  = new List(),
    game_feed = [];

window.onload = function() {
    feed_obj.retrieveFeedData(function(response) {
        feed_data = JSON.parse(response.target.responseText);
        game_feed = feed_data.data.games.game;

        console.log(game_feed);
    });


};
