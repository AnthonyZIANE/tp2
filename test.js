(function () {
    'use strict';

    $(() => {
        $.ajax({
            url: 'https://sokoban.doonoo.fr',
            method: 'get',
        })
            .done(function (data) {
                //console.log(data);
                for (let key in data) {
                    console.log(key);
                    console.log(data[key]);
                    $('body').append(
                        $('<div/>').html(data[key].description).css({
                            'margin': '4px',
                            'border': '1px solid blue'
                        })
                            .click(function () {
                                $.ajax({
                                    url : 'https://sokoban.doonoo.fr/levels/' + key,
                                    method: 'get',
                                })
                                    .done(function (data){
                                      for (let i=0; i<data.levels.length; ++i)
                                      {
                                          let level = data.levels[i];
                                          console.log(level);

                                      }

                                });

                            })
                    );
                };
            })
            .fail(function () {
                $('body').html('Une erreur critique est arrivée.');
            });

    });

}) ();
