$(function() {

  var $cardBox = $("#cardBox");


  /* 버튼 클릭 */

  var $cardArray = [$("#card6"), $("#card5"), $("#card4"), $("#card3"), $("#card2"), $("#card1")];

  setEvent();




  $("section.member .cardBox .cardWrap").on("click", function(e) {

    //  $('section.member .cardBox').css('opacity', '0');
    // TweenMax.staggerFrom("#cardBox .cardWrap", 1, {
    //   ease: Back.easeOut,
    //   opacity: 0,
    //   x: -200,
    //   delay: 0.5,
    //   onComplete: completeHandler,
    //   onCompleteParams: ["{self}"]
    // }, 0.2);

    $(this).addClass("active");

    for (var i = 0; i < $cardArray.length; i++) {
      var yv = -40;
      if ($cardArray[i].hasClass("active")) {
        yv = -180;
      }
      TweenMax.to($cardArray[i], 0.5, {
        opacity: 0,
        display: "none",
        y: yv,
        ease: Power3.easeOut,
        delayIncrement: 0.2,
        onComplete: memberModalOn,
        onCompleteParams: ["{self}", $(this)]
      });
    }



    // $cardBox.find(".cardWrap").each(function(index){
    // var $t= $(this);
    //   TweenMax.delayedCall(1.2 - Number(index) * 0.2, function() {
    //       TweenMax.fromTo($t, 0.3 ,{alpha: 1.0, x: 0},
    //        { alpha: 0,x: 500 + (500- Number(index) *150), ease: Circ.easeOut,force3D: true})
    //   });
    // });


    // memberModalOn();
  });

  $(".modalContent .function button").on("click", function(e) {
    // $('section.member .cardBox').css('opacity', '1');

    TweenMax.staggerFromTo($cardBox.find(".cardWrap"), 0.8, {
        display: "none",
        opacity: 0,
        ease: Power3.easeOut,
        y: 100,
        x: 0,
        delay: 0.15,
      }, {
        ease: Back.easeOut,
        opacity: 1,
        display: "block",
        y: 0,
        delay: 0.15,
        onStart: memberModalOff,
        onStartParams: ["{self}", $(this)]
      },
      0.12);

  });

});


// Circ.easeOut,
function memberModalOff(tween, target) {

console.log("memberModalOff 실행 ");

  $(".companyMember").css("display", "none");
  $(".companyMember").css("opacity", "0");

}


function memberModalOn(tween, target) {

  if (tween.target.attr("id") == "card1") {

    $(target).removeClass("active");

    TweenMax.fromTo($("." + target.attr("id")), 0.8, {
      display: "none",
      alpha: 0,
      ease: Expo.easeOut,
      y: 100,
    }, {
      y: 0,
      display: "block",
      alpha: 1,
      ease: Expo.easeOut,
      force3D: true
    });


  };
}



function setEvent() {
  // box 클래스에 마우스가 들어왔을 때
  $('#cardBox .cardWrap').mouseenter(function(e) {
    e.preventDefault

    if (!$(this).hasClass("active")) {

      TweenMax.to($(this), 1, {
        y: -25,
        ease: Back.easeOut
      });

    }

  })

  // box 클래스에 마우스 커서가 떠나갔을 떄
  $('#cardBox .cardWrap').mouseleave(function(e) {
    e.preventDefault();
    if (!$(this).hasClass("active")) {
      TweenMax.to($(this), 1, {
        y: 0,
        ease: Back.easeOut
      });
    }

  });
}
