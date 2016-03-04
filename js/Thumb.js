function Thumb(game) {
    var image        = {},
        title        = game.away_name_abbrev + ' @ ' + game.home_name_abbrev,
        description  = 'description',
        thumb = game.video_thumbnails.thumbnail,
        thumb_len = thumb.length,
        hash = game.away_name_abbrev + game.home_name_abbrev + '_' +
            game.original_date.replace(/\//g, '') + '_' + game.game_nbr,
        cnt;

        for(cnt = 0; cnt < thumb_len; cnt++) {
            if (thumb[cnt].scenario === '7') {
                image = thumb[cnt];
                image.alt = title;
            }
        }

    return {
        hash: hash,
        render: function(target) {
            var cont = document.createElement('div'),
                img  = document.createElement('img'),
                ttl  = document.createElement('p');


            cont.setAttribute('class', 'thumb');
            cont.setAttribute('id', hash);
            img.setAttribute('alt', image.alt);
            ttl.classList.add('title');
            ttl.classList.add('hidden');
            ttl.innerHTML = title;
            img.style.height = image.height + 'px';
            img.style.width = image.width + 'px';
            img.setAttribute('src', image.content);
            cont.appendChild(img);
            cont.appendChild(ttl);
            target.appendChild(cont);
        },

        select: function() {
            var height = image.height * 1.25,
                width  = image.width * 1.25,
                img    = document.getElementById(hash).getElementsByTagName('img')[0],
                ttl    = document.getElementById(hash).getElementsByTagName('p')[0];

            img.style.height = height + 'px';
            img.style.width  = width + 'px';
            ttl.classList.remove('hidden');
        },

        unselect: function() {
            var height = image.height,
                width  = image.width,
                img    = document.getElementById(hash).getElementsByTagName('img')[0],
                ttl    = document.getElementById(hash).getElementsByTagName('p')[0];

            img.style.height = height + 'px';
            img.style.width  = width + 'px';
            ttl.classList.add('hidden');
        }
    };
}