var Feed = (function() {
    var url  = '',
        date = Date.now(),
        feedData = {};

    function Feed(url_base, date) {
        this.setFeedDate(date);
        this.setFeedURL(url_base);
    }

    Feed.prototype.setFeedData = function(data) {
        feedData = data;
    };

    Feed.prototype.setFeedDate = function(date_str) {
        date = new Date(date_str);
    };

    Feed.prototype.setFeedURL = function(url_base) {
        var year  = date.getFullYear(),
            month = date.getMonth() + 1,
            day   = date.getDate();

        url = url_base + '/year_' + year + '/month_' + month + '/day_' + day + '/master_scoreboard.json';
    };

    Feed.prototype.getFeedData = function() {
        return feedData;
    };

    Feed.prototype.retrieveFeedData = function(callback) {
        var xhr = new XMLHttpRequest();

        xhr.onload = callback;

        xhr.onerror = function() {
            console.error('Ajax failed');
        };

        xhr.open('GET', 'day.json', false);
        xhr.send();
    };

    return Feed;
})();