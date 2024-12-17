$(document).ready(() => {
    (function () {
        const $objects = $(".main-animate");

        const groups = [
            { elements: [$objects.eq(0), $objects.eq(3)], endPos: window.innerWidth / 2 },
            { elements: [$objects.eq(1), $objects.eq(4)], endPos: window.innerWidth / 2 * 0.66 },
            { elements: [$objects.eq(2), $objects.eq(5)], endPos: window.innerWidth / 2 * 0.33 }
        ];

        const scrollTarget = window.innerHeight / 3 * 4;

        const calculatePosition = (scrollTop, endPos) =>
            Math.min(scrollTop / scrollTarget, 1) * endPos;

        const handleScroll = () => {
            const scrollTop = $(window).scrollTop();
            const visible = scrollTop <= scrollTarget * 1.1;

            if (visible) {
                $objects.fadeIn(200);

                groups.forEach(({ elements, endPos }) => {
                    elements.forEach(obj => {
                        const direction = obj.hasClass("direction-right") ? "-" : "";
                        const posX = calculatePosition(scrollTop, endPos);
                        obj.css("transform", `translateX(${direction}${posX}px)`);
                    });
                });
            } else {
                $objects.fadeOut(200);
            }
        };

        $(window).on("scroll", handleScroll);
        handleScroll();
    })();    
});
