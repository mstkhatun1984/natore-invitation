function showPage(page){

    let pages = document.querySelectorAll('.page');

    pages.forEach(function(item){
        item.classList.remove('active');
    });

    document.getElementById('page' + page).classList.add('active');

    window.scrollTo(0, 0);

}
