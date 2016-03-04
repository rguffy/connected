function List(items, obj) {
    var list = [],
        selected = 0,
        move_dist = 0,
        position = 0,
        len = items.length,
        cnt;

        for(cnt = 0; cnt < len; cnt++) {
            list.push(new obj(items[cnt]));
        }

    function handleKeyPress(direction) {
        var slider = document.getElementById('slider'),
            new_sel, new_pos, unselect, select;

        if(direction === 'left') {
            new_sel = selected -1;
            new_pos = position + move_dist;
        } else {
            new_sel = selected + 1;
            new_pos = position - move_dist;
        }
        unselect = document.getElementById(list[selected].hash);
        unselect.classList.remove('selected');
        list[selected].unselect();

        slider.style.left = new_pos + 'px';

        select   = document.getElementById(list[new_sel].hash);
        select.classList.add('selected');

        selected = new_sel;
        position = new_pos;

        list[selected].select();
    }

    return {
        render: function (target) {
            var len = list.length,
                cont = document.createElement('ul'),
                sel_id = Math.floor(len / 2),
                dist = 0,
                select,
                child,
                cnt;

            for (cnt = 0; cnt < len; cnt++) {
                var li = document.createElement('li');

                list[cnt].render(li);
                cont.appendChild(li);
            }
            cont.setAttribute('id', 'slider');
            target.appendChild(cont);
            child = cont.firstElementChild;
            move_dist = child.offsetWidth;
            cont.parentNode.style.width = (move_dist * (len + 1)) + 'px';
            position = dist * sel_id;
            select = document.getElementById(list[sel_id].hash);
            select.classList.add('selected');
            selected = sel_id;
            list[selected].select();
        },

        keyPress: function(e) {
            var left_arrow = 37,
                right_arrow = 39;

            if (e.keyCode == left_arrow) {
                // left key press
                if(selected === 0) {
                    console.log('get prev day');
                } else {
                    handleKeyPress('left');
                }
            } else if (e.keyCode == right_arrow) {
                // right key press
                if(selected === len - 1) {
                    console.log('get next day');
                } else {
                    handleKeyPress('right');
                }
            }
        }
    };
}