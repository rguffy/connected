var date      = '2015-05-21 00:00:00 PDT',
    url_base  = 'http://gdx.mlb.com/components/game/mlb',
    feed_obj  = new Feed(url_base, date),
    feed_data = {},
    list_obj,
    tray,
    game_feed = [];

window.onload = function() {
    feed_obj.retrieveFeedData(function(response) {
        feed_data = JSON.parse(response.target.responseText);
        game_feed = feed_data.data.games.game;
    });

    list_obj = new List(game_feed, Thumb);
    tray = document.getElementById('tray');
    list_obj.render(tray);

    document.onkeydown = list_obj.keyPress;
};
