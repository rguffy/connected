function Feed(url_base, date_str) {
    var url = '',
        date = new Date(date_str) || Date.now();

    setURL();

    function setURL() {
        var year = date.getFullYear(),
            month = date.getMonth() + 1,
            day = date.getDate();

        url = url_base + '/year_' + year + '/month_' + pad(month, 2) + '/day_' + pad(day, 2) + '/master_scoreboard.json';
    }

    function pad(number, width, pad_char) {
        pad_char = pad_char || '0';
        number = number + '';
        return (number.length >= width) ? number : new Array(width - number.length + 1).join(pad_char) + number;
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

            //xhr.open('GET', 'day.json', false);
            xhr.open('GET', url, false);
            xhr.send();
        }

    };
}