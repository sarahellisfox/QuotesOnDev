(function($){

    $('#newQuoteButton').on('click', function(event) {

        $.ajax({
            method: 'GET',
            url: qod_vars.rest_url + '/wp/v2/posts?filter[orderby]=rand&filter[posts_per_page]=1',
        }).done(function(data) {
            let newQuote = data[0]; 

            $('#entryContent').html(newQuote.excerpt.rendered);
            $('#entryMeta').html(newQuote.title.rendered);

        }).fail(function(error){
            console.log("an error occurred", error);
    });
    }); 
})(jQuery);

    // add a click event for the "Show Me Another" btn and then run the AJAX code below
    // 1: get request to grab random post and append to the DOM
    // append the quote to the DOM
    // 2: post a new quote using the post method
    // using a form to submit a quote so a .submit event