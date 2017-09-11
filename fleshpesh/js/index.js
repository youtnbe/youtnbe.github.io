'use strict';

const aspect_ratio = 1.375;

$(function () {
    $('.menu-item').click((e) => {
        $('.game').empty().append(`
            <object>
                <embed src="games/${$(e.target).data('game')}" width="550" height="400">
                </embed>
            </object>
        `);
    });

    $('.size-control').click((e) => {
        let game = $('.game object embed');
        let control = $(e.target);
        game.attr('width', + game.attr('width') + control.data('step'));
        game.attr('height', + game.attr('width') / aspect_ratio);
    });
});
    