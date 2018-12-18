$(document).ready(function() {
    $(this).scrollTop(0);

    var firstname = ['Nguyễn', 'Trần', 'Lê', 'Đặng', 'Vũ', 'Phạm', 'Trịnh', 'Bùi'],
        surname = ['Thị', 'Bích', 'Phương', 'Thu',],
        lastname = ['Ngọc', 'Trang', 'Minh', 'Liên', 'Hằng', 'Thúy', 'Thủy', 'Hương'],
        city = ['Hà Nội', 'TP Hồ Chí Minh', 'Đà Nẵng', 'Nam Định', 'Thái Bình', 'Hạ Long', 'Hà Nam', 'Bình Dương', 'Móng Cái', 'Ninh Bình', 'Lạng Sơn', 'Hải Phòng', 'Hải Dương'];

    var notify = setInterval(notice, 15000);
    function notice() {
        var fullname = firstname[Math.floor(Math.random() * firstname.length)] + ' ' + surname[Math.floor(Math.random() * surname.length)] + ' ' + lastname[Math.floor(Math.random() * lastname.length)];
        var noticecity  = city[Math.floor(Math.random() * city.length)];
        $('.notify-name').text(fullname);
        $('.notify-city').text(noticecity);
        $('.notify-order').text('Đặt ' + Math.floor(Math.random() * 3 + 1) + ' hộp Hello Young');
        $('.notify-time').text(Math.floor(Math.random() * 10) + ' phút trước');
        $('.notify').show().removeClass('flipOutX').addClass('flipInX').delay(5000).queue(function() {
            $(this).removeClass('flipInX').addClass('flipOutX').dequeue();
        });
    }

    $('.navbar-logo-mobile').click(function() {
        $('.navbar').toggle(300);
    })

    new WOW().init()

    $('.register-right_form-submit').click(function(e) {
        e.preventDefault();
        var name = $(this).parent().find('.register-right_form-input').val(),
            phone = $(this).parent().find('.register-right_form-input').val(),
            problem = $(this).parent().find('.register-right_form-textarea').val();
        $.ajax({
            url: 'https://docs.google.com/forms/u/1/d/e/1FAIpQLSenv_1kq3r3gx2AjU_N-DUFLb-FxcsXsk-DOZOxGgp-OwQJKg/formResponse',
            type: 'POST',
            dataType: "xml",
            data: {
                'entry.1126745318': name,
                'entry.1144625446': phone,
                'entry.386138593': problem
            }
        });
        setTimeout(function() {
            alert('Gửi thông tin thành công');
        }, 1000)
    })

    $('#order-popup a').click(function(e) {
        e.preventDefault();
        var name = $(this).parent().find('.name').val(),
            phone = $(this).parent().find('.phone').val(),
            problem = $(this).parent().find('.problem').val();
        $.ajax({
            url: 'https://docs.google.com/forms/u/1/d/e/1FAIpQLSenv_1kq3r3gx2AjU_N-DUFLb-FxcsXsk-DOZOxGgp-OwQJKg/formResponse',
            type: 'POST',
            dataType: "xml",
            data: {
                'entry.1126745318': name,
                'entry.1144625446': phone,
                'entry.386138593': problem
            }
        });
        setTimeout(function() {
            alert('Gửi thông tin thành công');
        }, 1000)
    })

    $(window).scroll(function() {
        if($('html, body').scrollTop() > 50) {
            $('header').addClass('scroll')
        } else {
            $('header').removeClass('scroll');
        }
    })

    var video = new Swiper('.video-left', {
        speed: 600,
        slidesPerView: 1,
        autoplay: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

    });

    $('[data-fancybox]').fancybox({
        buttons: ['close']
    })

    $('.navbar-item').click(function(e) {
        e.preventDefault();
        $('.navbar-item').removeClass('active');
        $(this).addClass('active');
        var link = $(this).find('a').attr('href');
        if(link == '#home') {
            $('html, body').animate({scrollTop: 0}, 600, 'swing');
        } else {
            var offsettop = $(link).offset().top - 100;
            $('html, body').animate({scrollTop: offsettop}, 600, 'swing');
        }
    })
})