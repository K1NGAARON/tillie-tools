function changeReviews() {
    const reviews = [
        {
            name: 'Kim',
            review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit quasi, debitis cupiditate esse facilis explicabo dolore iusto excepturi cum maxime?',
        },
        {
            name: 'Gery',
            review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit quasi, debitis cupiditate esse facilis explicabo dolore iusto excepturi cum maxime?',
        },
        {
            name: 'Yoshi',
            review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit quasi, debitis cupiditate esse facilis explicabo dolore iusto excepturi cum maxime?',
        },
        {
            name: 'Nena',
            review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit quasi, debitis cupiditate esse facilis explicabo dolore iusto excepturi cum maxime?"
        },
        {
            name: 'Carol',
            review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit quasi, debitis cupiditate esse facilis explicabo dolore iusto excepturi cum maxime?"
        },
        {
            name: 'Liesa',
            review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit quasi, debitis cupiditate esse facilis explicabo dolore iusto excepturi cum maxime?"
        }
    ];

    $('.dot').removeClass('active');
    $(this).addClass('active');

    const dotIndex = $('.dot').index(this);
    const reviewContainer = $('.review-wrapper');

    reviewContainer.find('.review-author').text(reviews[dotIndex].name);
    reviewContainer.find('.review-body').text(reviews[dotIndex].review);
};

$('.dot').click(changeReviews);

document.addEventListener( 'DOMContentLoaded', function() {
    new Splide( '#gallery-slides', {
        heightRatio: 0.3,
        perPage: 3,
        perMove: 1,
        breakpoints: {
            1000: {
                heightRatio: 0.5,
                perPage: 2,
            }
        },
        type: 'loop',
        speed: 3000,
    }).mount();
});