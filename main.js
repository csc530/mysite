
(function () {

    const ready = document.readyState;
    if (ready === 'complete' || ready === 'interactive')
        setup();
    else
        document.addEventListener('DOMContentLoaded', setup);


    function setup() {
        console.log('rbtrbt')
        // so ugly
        const colour = window.matchMedia('(prefers-color-scheme: light)');
        const themeBtn = document.querySelector('button#theme');
        themeBtn.addEventListener('click', event => {
            const theme = colour.media;
            console.info('Super page going ', theme)
        });
    };
}());