var x, y;

(function ($) {
    var timeout;
    $(document).on('mousemove', function (event) {
        if (timeout !== undefined) {
            window.clearTimeout(timeout);
        }
        timeout = window.setTimeout(function () {
            $(event.target).trigger('mousemoveend');
        }, 12);
    });
}(jQuery));

(function ($) {
    $.fn.mousemoveend = function (cb) {
        return this.on('mousemoveend', cb);
    };
}(jQuery));

$('document').ready(function () {
    $('.image').mousemove(function (e) {
        var offset = $(this).offset();
        x = e.pageX - offset.left;
        y = e.pageY - offset.top;
    });
});

$('.image').mouseout(function () {
    $(".image").attr("src", 'static/images/shadow.jpg');
    $(".label").text('Portfolio');
})

$('.image').mousemoveend(function () {
    var Height = image.clientHeight / 2;
    var WidthLeft = image.clientWidth / 2 - image.clientWidth / 18;
    var WidthRight = image.clientWidth / 2 + image.clientWidth / 18;

    if (y < Height && x < WidthLeft && x < WidthRight) {
        $(".image").attr("src", 'static/images/upper_left.jpg');
        $(".label").text('Architecture');
    } else if (y < Height && x > WidthLeft && x > WidthRight) {
        $(".image").attr("src", 'static/images/upper_right.jpg');
        $(".label").text('Visual Arts');
    } else if (y > Height && x < WidthLeft && x < WidthRight) {
        $(".image").attr("src", 'static/images/lower_left.jpg');
        $(".label").text('Industrial Design');
    } else if (y > Height && x > WidthLeft && x > WidthRight) {
        $(".image").attr("src", 'static/images/lower_right.jpg');
        $(".label").text('Photography');
    } else if (y > Height && x > WidthLeft && x < WidthRight) {
        $(".image").attr("src", 'static/images/all.jpg');
        $(".label").text('Info');
    } else {
        $(".image").attr("src", 'static/images/shadow.jpg');
        $(".label").text('Portfolio');
    }
})

$('.image').click(function () {
    var Height = image.clientHeight / 2;
    var WidthLeft = image.clientWidth / 2 - image.clientWidth / 18;
    var WidthRight = image.clientWidth / 2 + image.clientWidth / 18;

    if (y < Height && x < WidthLeft && x < WidthRight) {
        // Architecture
        document.location.href = "https://www.behance.net/DzhusArchitect";
    } else if (y < Height && x > WidthLeft && x > WidthRight) {
        // Visual Arts
        document.location.href = "https://www.behance.net/DzhusArtist";
    } else if (y > Height && x < WidthLeft && x < WidthRight) {
        // Industrial Design
        document.location.href = "https://www.behance.net/DzhusDesigner";
    } else if (y > Height && x > WidthLeft && x > WidthRight) {
        // Photography
        document.location.href = "https://www.behance.net/Dzhusphotographer";
    } else if (y > Height && x > WidthLeft && x < WidthRight) {
        // Contact
        document.getElementById('dropdownMenuButton').click();
    }
})