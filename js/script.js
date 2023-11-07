
$(document).ready(function () {

    $(document).on('click', '#bar', function () {
        $('.bar').removeClass('active-bar')
        $(this).addClass('active-bar');

    });
});