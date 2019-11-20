// Quote Button 
(function($){

    $('#newQuoteButton').on('click', function(event) {
        event.preventDefault();

        $.ajax({
            method: 'GET',
            url: qod_vars.rest_url + '/wp/v2/posts?filter[orderby]=rand&filter[posts_per_page]=1',
        }).done(function(data) {
            let newQuote = data[0]; 

            $('#entryContent').html(newQuote.excerpt.rendered);
            $('#entryMeta').html(newQuote.title.rendered);

            if(newQuote._qod_quote_source_url && newQuote._qod_quote_source) {
                $('#entryMeta').append(`<a href=" ${newQuote._qod_quote_source_url}"><span> , </span>${newQuote._qod_quote_source}</a>`);
            }else(newQuote)

        }).fail(function(error){
            console.log("an error occurred", error);
    });
    }); 
})(jQuery);

// Submit Form 


// .submit event