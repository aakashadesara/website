$( document ).ready(function() {
    
    fillLibrary();

});

function getRating(n) {
    var rating = "";
    for (var i = 0; i < n; i++) {
        rating += '★'
    }
    return rating;
}

function generateBook(obj) {
    return '<div class="col-md-12 bookcontainer">' +
                '<div class="col-md-12 row smaller">' +
                 obj.emoji + obj.name + ' <span class="gray">(' + obj.author + ')</span>' + getRating(obj.rating) +
                '</div>' +
                '<div class="col-md-12 row bookdescription">' +
                    obj.description +
               ' </div>' +
            '</div>';
}

function bookCompare(A, B) {
    if (A.rating > B.rating) {
        return -1;
    } else {
        return 1;
    }
}

function fillLibrary() {

    var books = library.Library.books.sort(bookCompare);

    books.map(function (it) {
        var bookHtml = generateBook(it);
        $("#libraryContainer").html($("#libraryContainer").html() + bookHtml)

    })

    

}