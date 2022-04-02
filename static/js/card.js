var x, y;

(function ($) {
    var timeout;
    $(document).on('mousemove', function (event) {
        if (timeout !== undefined) {
            window.clearTimeout(timeout);
        }
        timeout = window.setTimeout(function () {
            $(event.target).trigger('mousemoveend');
        }, 2);
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
    $(".image").attr("src", 'static/images/shadow.webp');
    $(".label").attr("src", 'Portfolio');
})

$('.image').mousemoveend(function () {
    var Height = image.clientHeight / 2;
    var WidthLeft = image.clientWidth / 2 - image.clientWidth / 18;
    var WidthRight = image.clientWidth / 2 + image.clientWidth / 18;

    if (y < Height && x < WidthLeft && x < WidthRight) {
        $(".image").attr("src", 'static/images/upper_left.webp');
        $(".label").attr("src", 'Industrial Desig');
    } else if (y < Height && x > WidthLeft && x > WidthRight) {
        $(".image").attr("src", 'static/images/upper_right.webp');
        $(".label").attr("src", 'Architecture');
    } else if (y > Height && x < WidthLeft && x < WidthRight) {
        $(".image").attr("src", 'static/images/lower_left.webp');
        $(".label").attr("src", 'Graphic Design');
    } else if (y > Height && x > WidthLeft && x > WidthRight) {
        $(".image").attr("src", 'static/images/lower_right.webp');
        $(".label").attr("src", 'Photography');
    } else if (y > Height && x > WidthLeft && x < WidthRight) {
        $(".image").attr("src", 'static/images/all.webp');
        $(".label").attr("src", 'Info');
    } else {
        $(".image").attr("src", 'static/images/shadow.webp');
        $(".label").attr("src", 'Portfolio');
    }
})

$('.image').click(function () {
    var Height = image.clientHeight / 2;
    var WidthLeft = image.clientWidth / 2 - image.clientWidth / 18;
    var WidthRight = image.clientWidth / 2 + image.clientWidth / 18;

    if (y < Height && x < WidthLeft && x < WidthRight) {
        // Industrial Design
        document.location.href = "#";
    } else if (y < Height && x > WidthLeft && x > WidthRight) {
        // Architecture
        document.location.href = "#";
    } else if (y > Height && x < WidthLeft && x < WidthRight) {
        // Graphic Design
        document.location.href = "#";
    } else if (y > Height && x > WidthLeft && x > WidthRight) {
        // Photography
        document.location.href = "#";
    } else if (y > Height && x > WidthLeft && x < WidthRight) {
        // Contact
        document.getElementById('dropdownMenuButton').click();
    }
})