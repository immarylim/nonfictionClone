let toggleNum3 = true;

$(".lan").click(() => {
    if(toggleNum3) {
        $(".another-lan").slideDown(300);
    } else {
        $(".another-lan").slideUp(300);
    }

    toggleNum3 =! toggleNum3;
});