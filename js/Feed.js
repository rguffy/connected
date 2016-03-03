var Feed = (function() {
    var url  = '',
        date = Date.now();

    function Feed(url_base, date) {
        this.setFeedDate(date);
        this.setFeedURL(url_base);
    }

    Feed.prototype.setFeedDate = function(date_str) {
        date = new Date(date_str);
    };

    Feed.prototype.setFeedURL = function(url_base) {
        var year  = date.getFullYear(),
            month = date.getMonth() + 1,
            day   = date.getDate();

        url = url_base + '/year_' + year + '/month_' + month + '/day_' + day + '/master_scoreboard.json';
    };

    Feed.prototype.retrieveFeedData = function() {
        var xhr = new XMLHttpRequest({
            "Access-Control-Allow-Origin": 'http://gdx.mlb.com'
        });

        xhr.onload = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    console.log( JSON.parse(xhr.responseText) );
                } else {
                    console.error('Ajax failed');
                }
            }
        };

        xhr.open('GET', url);
        xhr.send();
    };

    return Feed;
})();