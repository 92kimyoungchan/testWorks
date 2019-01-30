$(function() {

  var $cardBox = $("#cardBox");


  /* 버튼 클릭 */

  var $cardArray = [$("#card6"), $("#card5"), $("#card4"), $("#card3"), $("#card2"), $("#card1")];


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

    TweenMax.staggerFromTo($cardArray, 0.5, {
        ease: Back.easeOut,
        opacity: 1,
        x: 0,
        delay: 0.1,
      }, {
        opacity: 0,
        x: "+=300",
        display: "none",
        onComplete: memberModalOn,
        onCompleteParams: ["{self}",$(this)]
      },
      0.1);



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
    TweenMax.staggerFromTo($cardBox.find(".cardWrap"), 1, {
        display: "none",
        ease: Back.easeOut,
        opacity: 0,
        y: 100,
        x: 0,
        delay: 0.1,
      }, {
        ease: Back.easeOut,
        opacity: 1,
        display: "block",
        y: 0,
        delay: 0.1,
        onReversComplete: memberModalOff,
        onReverseCompleteParams: ["{self}",$(this)]
      },
      0.1);




  });

});

var $console = $('#console')

function completeHandler(tween) {
  $console.append("<p> tween complete / target text = " + tween.target.innerHTML + "</p>")
}


// Circ.easeOut,


function memberModalOn(tween,target) {

  if (tween.target.attr("id") == "card1") {

      TweenMax.fromTo($("."+target.attr("id")), 0.45, {
        display: "none",
        opacity: 0,
        x: -200,
      }, {
        display: "block",
        opacity: 1,
        x: 0,
        force3D: true
      });

  };
}

function memberModalOff(tween,target) {

  $(".companyMember").css("display", "none");


}
