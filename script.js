function showPage(page) {

    const pages = document.querySelectorAll('.page');

    pages.forEach(function(p) {
        p.classList.remove('active');
    });

    document.getElementById('page' + page).classList.add('active');

    window.scrollTo(0, 0);
}