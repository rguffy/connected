# connected

## issues with XMLHttpRequest (even though "Access-Control-Allow-Origin: *" is in the server response in browser)
GET http://gdx.mlb.com/components/game/mlb/year_2015/month_5/day_20/master_scoreboard.json 404 (Not Found)Feed.retrieveFeedData @ Feed.js:31window.onload @ main.js:10
Feed.js:31 XMLHttpRequest cannot load http://gdx.mlb.com/components/game/mlb/year_2015/month_5/day_20/master_scoreboard.json. No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://rguffy.github.io/connected' is therefore not allowed access. The response had HTTP status code 404.Feed.retrieveFeedData @ Feed.js:31window.onload @ main.js:10
Feed.js:31 Uncaught NetworkError: Failed to execute 'send' on 'XMLHttpRequest': Failed to load 'http://gdx.mlb.com/components/game/mlb/year_2015/month_5/day_20/master_scoreboard.json'.
