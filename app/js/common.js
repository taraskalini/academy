$(function() {

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

    $('.popup').magnificPopup();

    $('.a-open-1').on('click',function(){
        $(this).toggleClass('is-active');
        $(".open-content-1").toggleClass('is-active');
    });
    $(document).on("click",function(event){
        if( $(event.target).closest(".open-content-1,.a-open-1").length )return;
        $('.a-open-1').removeClass('is-active');
        $(".open-content-1").removeClass('is-active');
        event.stopPropagation();
    });

    $('.a-open-2').on('click',function(){
        $(this).toggleClass('is-active');
        $(".open-content-2").toggleClass('is-active');
    });
    $(document).on("click",function(event){
        if( $(event.target).closest(".open-content-2,.a-open-2").length )return;
        $('.a-open-2').removeClass('is-active');
        $(".open-content-2").removeClass('is-active');
        event.stopPropagation();
    });

    $('.a-open-3').on('click',function(){
        $(this).toggleClass('is-active');
        $(".open-content-3").toggleClass('is-active');
    });
    $(document).on("click",function(event){
        if( $(event.target).closest(".open-content-3,.a-open-3").length )return;
        $('.a-open-3').removeClass('is-active');
        $(".open-content-3").removeClass('is-active');
        event.stopPropagation();
    });

    var text;
    $(".doc-more-1").on("click",function(event){
        event.preventDefault();
        if($(this).hasClass('is-active')){
            $(this).find("span").text(text);
        }else{
            text = $(this).find("span").text();
            console.log(text);
            $(this).find("span").text("Читать меньше");
        }
        $(this).toggleClass("is-active");
        $(".doc-more-content-1").toggleClass("is-active");
    });

    $('.popup-img').magnificPopup({
        type: 'image'
    });

    var text2;
    $(".doc-more-2").on("click",function(event){
        event.preventDefault();
        if($(this).hasClass('is-active')){
            $(this).find("span").text(text);
        }else{
            text = $(this).find("span").text();
            console.log(text);
            $(this).find("span").text("Читать меньше");
        }
        $(this).toggleClass("is-active");
        $(".doc-more-content-2").toggleClass("is-active");
    });

    $('.a-open-4').on('click',function(){
        $(this).toggleClass('is-active');
        $(".open-content-4").toggleClass('is-active');
    });
    $(document).on("click",function(event){
        if( $(event.target).closest(".open-content-4,.a-open-4").length )return;
        $('.a-open-4').removeClass('is-active');
        $(".open-content-4").removeClass('is-active');
        event.stopPropagation();
    });

    $('.a-open-5').on('click',function(){
        $(this).toggleClass('is-active');
        $(".open-content-5").toggleClass('is-active');
    });
    $(document).on("click",function(event){
        if( $(event.target).closest(".open-content-5,.a-open-5").length )return;
        $('.a-open-5').removeClass('is-active');
        $(".open-content-5").removeClass('is-active');
        event.stopPropagation();
    });

    var fbSlider = $('#fb-slider').lightSlider({
        adaptiveHeight:true,
        item:1,
        slideMargin:0,
        loop:true,
        pager:false,
        controls:false
    });

    $(".fb-prev").on("click",function(e){
        e.preventDefault();
        fbSlider.goToPrevSlide();
    });

    $(".fb-next").on("click",function(e){
        e.preventDefault();
        fbSlider.goToNextSlide();
    });

    var text3;
    $(".doc-more-3").on("click",function(event){
        event.preventDefault();
        if($(this).hasClass('is-active')){
            $(this).find("span").text(text);
        }else{
            text = $(this).find("span").text();
            console.log(text);
            $(this).find("span").text("Читать меньше");
        }
        $(this).toggleClass("is-active");
        $(".doc-more-content-3").toggleClass("is-active");
    });

    var text4;
    $(".doc-more-4").on("click",function(event){
        event.preventDefault();
        if($(this).hasClass('is-active')){
            $(this).find("span").text(text);
        }else{
            text = $(this).find("span").text();
            console.log(text);
            $(this).find("span").text("Читать меньше");
        }
        $(this).toggleClass("is-active");
        $(".doc-more-content-4").toggleClass("is-active");
    });

    var text5;
    $(".doc-more-5").on("click",function(event){
        event.preventDefault();
        if($(this).hasClass('is-active')){
            $(this).find("span").text(text);
        }else{
            text = $(this).find("span").text();
            console.log(text);
            $(this).find("span").text("Читать меньше");
        }
        $(this).toggleClass("is-active");
        $(".doc-more-content-5").toggleClass("is-active");
    });

});

//Форма отправки 2.0
$(function() {
    $("[name=send]").click(function () {
        $(":input.error").removeClass('error');
        $(".allert").remove();

        var error;
        var btn = $(this);
        var ref = btn.closest('form').find('[required]');
        var msg = btn.closest('form').find('input, textarea');
        var send_btn = btn.closest('form').find('[name=send]');
        var subject = btn.closest('form').find('[name=form_subject]');
        var form = btn.closest('form'), name = form.find('[name=name]').val();
        $(ref).each(function () {
            if ($(this).val() == '') {
                var errorfield = $(this);
                $(this).addClass('error').parent('.field').append('<div class="allert"><span>Заполните это поле</span><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></div>');
                error = 1;
                $(":input.error:first").focus();
                return;
            } else {
                var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
                if ($(this).attr("type") == 'email') {
                    if (!pattern.test($(this).val())) {
                        $("[name=email]").val('');
                        $(this).addClass('error').parent('.field').append('<div class="allert"><span>Укажите коректный e-mail</span><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></div>');
                        error = 1;
                        $(":input.error:first").focus();
                    }
                }
                var patterntel = /^()[0-9]{9,18}/i;
                if ($(this).attr("type") == 'tel') {
                    if (!patterntel.test($(this).val())) {
                        $("[name=phone]").val('');
                        $(this).addClass('error').parent('.field').append('<div class="allert"><span>Укажите коректный номер телефона</span><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></div>');
                        error = 1;
                        $(":input.error:first").focus();
                    }
                }
            }
        });
        if (!(error == 1)) {
            $(send_btn).each(function () {
                $(this).attr('disabled', true);
            });



            $.ajax({
                type: 'POST',
                url: 'mail.php',
                data: msg,
                success: function (data) {
                    $.magnificPopup.close();
                    form[0].reset();
                    $(send_btn).each(function () {
                        $(this).attr('disabled', false);
                    });

                    if(subject == "Заказать звонок"){
                        $("a[href='#popupthx']").click();
                    }else{
                        $("a[href='#block-popup']").click();
                    }


                },
                error: function (xhr, str) {
                    alert('Возникла ошибка: ' + xhr.responseCode);
                }
            });
        }
        else{
            if(form.hasClass("form-shake")){
                form.parents(".form-block").addClass("shake");
                form.parents(".form-block").one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
                    $(this).removeClass("shake");
                });
            }
        }
        return false;
    });
});