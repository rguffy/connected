function Feed(url_base, date_str) {
    var url = '',
        date = new Date(date_str) || Date.now();

    function setURL() {
        var year = date.getFullYear(),
            month = date.getMonth() + 1,
            day = date.getDate();

        url = url_base + '/year_' + year + '/month_' + month + '/day_' + day + '/master_scoreboard.json';
    }

    return {
        setFeedURL: function() {
            setURL();
        },

        retrieveFeedData: function (callback) {
            var xhr = new XMLHttpRequest();

            xhr.onload = callback;

            xhr.onerror = function () {
                console.error('Ajax failed');
            };

            xhr.open('GET', 'day.json', false);
            xhr.send();
        }

    };
}