const headerBox = $(".header");
const headerNew = $(".header-new");
const headerTop = $(".header-top");
const shopSub = $(".shop-sub");
const aboutSub = $(".about-sub");
const menuShop = $(".menu-shop");
const shopBurger = $(".shop-burger");

let toggleNum1 = true;
let toggleNum2 = true;
let mobileMenu = true;

const HIDDEN_KEY = "hidden";
const HOVERED_KEY = "hovered";
const MENUACTIVE_KEY = "mobile-menu-active";

/* new */
function windowScroll() {
    $(window).on("scroll", () => {
        if($(window).scrollTop() != 0) {
            headerNew.slideUp(500);
        } else {
            headerNew.slideDown(500);
        }
    });
}

/* mobile menu active function */
function mobileMenuActive() {
    headerTop.addClass(MENUACTIVE_KEY);
    headerBox.css("z-index", "99991");
}

function mobileMenuInactive() {
    headerTop.removeClass(MENUACTIVE_KEY);
    headerBox.css("z-index", "999");
}

/* hover css */
function mouseOverLeave() {
    $(".menu-shop > ul").on({
        mouseover: () => {
            menuShop.addClass(HOVERED_KEY);
        },
        mouseleave: () => {
            menuShop.removeClass(HOVERED_KEY);
        }
    });
}

/* drop down */
$(".shop-name").click(() => {
    if(toggleNum1) {
        shopSub.slideDown(500);
    } else {
        shopSub.slideUp(500);
    }

    toggleNum1 = !toggleNum1;
});

$(".about-name").click(() => {
    if(toggleNum2) {
        aboutSub.slideDown(500);
    } else {
        aboutSub.slideUp(500);
    }

    toggleNum2 = !toggleNum2;
});

/* mobile menu */
$("label[for='mobile-menu']").click(() => {
    $(".menu-box").off("mouseover mouseleave");

    shopBurger.removeClass(HIDDEN_KEY);

    if(mobileMenu) {
        mobileMenuActive();
    } else {
        mobileMenuInactive();
    }

    mobileMenu = !mobileMenu;
});

$(window).resize(() => {
    if(window.innerWidth > 780) {
        mobileMenuInactive();

        mouseOverLeave();

        shopBurger.addClass(HIDDEN_KEY);
    } else if(window.innerWidth <= 780 && !mobileMenu) {
        mobileMenuActive();
        
        $(".menu-box").off("mouseover mouseleave");

        shopBurger.removeClass(HIDDEN_KEY);
    }
}).resize();

windowScroll();
mouseOverLeave();