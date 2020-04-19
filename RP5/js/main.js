$(document).ready(function() {
    //init scrollMagic
    //use scrollbar to trigger an animation
    var controller = new ScrollMagic.Controller();


    // //pin the intro
    var pinIntroScene = new ScrollMagic.Scene({
        triggerElement: '#intro',
        triggerHook: 0,
        duration: '30%'
    })
        .setPin('#intro', {pushFollowers: false})
        .addTo(controller);

    //pin again
    var pinIntroScene2 = new ScrollMagic.Scene({
        triggerElement: '#explain',
        triggerHook: 0.5,
        duration: '210%'
    })
        .setPin('#intro', {pushFollowers:false} )
        .addTo(controller);

    var pinParagraph = new ScrollMagic.Scene({
        triggerElement: '#explain',
        triggerHook: 0.4,
        duration: '200%'
    })
        .setPin('#explain')
        .addTo(controller);

    var pinBrain = new ScrollMagic.Scene({
        triggerElement: '#fullBrain',
        triggerHook: 0,
        duration: 0
    })
        .setPin('#fullBrain', {pushFollowers:false})
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '#vPart',
        triggerHook: 0,
        duration: 0
    })
        .setPin('#vPart', {pushFollowers:false})
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '#accPart',
        triggerHook: 0,
        duration: 0
    })
        .setPin('#accPart', {pushFollowers:false})
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '#naPart',
        triggerHook: 0,
        duration: 0
    })
        .setPin('#naPart', {pushFollowers:false})
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '#pccPart',
        triggerHook: 0,
        duration: 0
    })
        .setPin('#pccPart', {pushFollowers:false})
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '#tPart',
        triggerHook: 0,
        duration: 0
    })
        .setPin('#tPart', {pushFollowers:false})
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '#htPart',
        triggerHook: 0,
        duration: 0
    })
        .setPin('#htPart', {pushFollowers:false})
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '.preBox',
        triggerHook: .4,
        duration: '100%',
    })
        .setPin('.preBox')
        .addTo(controller);


    // each loop sending the floating gratitude words up past the brain
    $('.words').each(function(){

        var ourScene = new ScrollMagic.Scene ({
            triggerElement: this,
            triggerHook: 0.85,
            duration: '250%'
        })
            .setClassToggle(this, 'fade-in')
            .addTo(controller);
    });

    var labScroll = new ScrollMagic.Scene({
        triggerElement: '#lab',
        triggerHook: 0,
        duration: 0
    })
        .setPin('#lab', {pushFollowers:false})
        .addTo(controller);

});
