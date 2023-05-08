$(document).ready(function () {
    const colorSelect = $('#shoe_clr');
    const product = $('.shoes');

    colorSelect.on('change', function () {

        if (colorSelect.val() == 'default') {
            colorSelect.val() = 'Black';
        }
        const selectedColor = colorSelect.val();
        product.attr('src', `/images/${selectedColor}.jpeg`)
    })
});