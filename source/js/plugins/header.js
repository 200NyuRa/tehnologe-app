export default function(){
    const $header = $(this),
        $headerMenuBtn = $header.find('.header__menu-btn');

    $headerMenuBtn.on('click', () => {
        $header.toggleClass('header_open-menu');
    });
}
