$(document).ready(function () {
    $(".ar-college-selector").change(function (e) {
        var collegeName = $(this).children("option:selected").val();
        $(".ar-url-maker").attr('href', '/templates/' + collegeName + '/index.html')
    });
});

