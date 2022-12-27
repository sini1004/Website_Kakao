// gnb가 왼쪽에서 나옴
$('.gnb_btn').click(function(){
  $('#gnb').animate({left : 0}, 500, 'swing');
  $('.dark').css({'display': 'block'});
});

//gnb사라짐
$('.dark').click(function(){
  $('.dark').css({'display': 'none'});
  $('#gnb').animate({left : -304}, 500, 'swing');
  $('.login_popup').hide();
});


// gnb에서 서브메뉴 슬라이드
$('.btn_sub').click(function(){
  $(this).find('span').toggleClass('on');
  $(this).siblings('.list_sub_wrap').slideToggle(1000);
});


// 로그인 팝업창
$('.login_require').click(function(){
  $('.login_popup').show();
  $('#gnb').animate({left : -304}, 500, 'swing');
});


// 로그인 팝업창 X
$('.btn_close').click(function(){
  $('.login_popup').hide();
  $('.dark').css({'display': 'none'});
});
