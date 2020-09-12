$(document).ready(function () {
    $(".ar-college-selector").change(function (e) {
        var collegeName = $(this).children("option:selected").val();
        $(".ar-url-maker").attr('href', '/acaresume/templates/' + collegeName + '/index.html')
    });
});

