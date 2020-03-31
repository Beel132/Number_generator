'use strict';

function toggle_mode() {
    $('.toggle--icon').toggleClass('dark');

    document.body.classList.toggle('dark-mode');
}

$('#generate').click(generate_number);

document.addEventListener('keyup', e => e.code == 'Enter' || e.code == 'NumpadEnter' ? generate_number() : 0);

const give_random_number = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

function generate_number() {
    let min_num = Number($('#min').val());
    let max_num = Number($('#max').val());

    if (!min_num) min_num = $('#min').data('default');

    if (!max_num) max_num = $('#max').data('default');

    const random_number = give_random_number(min_num, max_num);

    $('#random_number').html(random_number);
}