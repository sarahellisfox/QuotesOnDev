// Quote Button 
(function ($) {

    $('#newQuoteButton').on('click', function (event) {
        event.preventDefault();

        $.ajax({
            method: 'GET',
            url: qod_vars.rest_url + '/wp/v2/posts?filter[orderby]=rand&filter[posts_per_page]=1',
        }).done(function (data) {
            let newQuote = data[0];

            $('#entryContent').html(newQuote.excerpt.rendered);
            $('#entryMeta').html("— " + newQuote.title.rendered);

            if (newQuote._qod_quote_source_url && newQuote._qod_quote_source) {
                $('#entryMeta').append(`<a href=" ${newQuote._qod_quote_source_url}"><span> , </span>${newQuote._qod_quote_source}</a>`);
            } else (newQuote)

        }).fail(function (error) {
            console.log("an error occurred", error);
        });
    });
})(jQuery);

// Submit Form 

$('#quoteSubmissionForm').on('submit', function (event) {
    event.preventDefault();

    const formData = {
        title: $('#quote-author').val(),
        content: $('#quote').val(),
        _qod_quote_source_url: $('#quote-location').val(),
        _qod_quote_source: $('quote-url').val()
    }

    $.ajax({
        method: 'POST',
        url: qod_vars.rest_url + '/wp/v2/posts',
        data: formData,
        success: function (formData) {
           alert('Submission was successful.');
            console.log(formData);
        },
        error: function(formData) {
           alert('An error occurred.');
            console.log(formData);
        }
    });
})(jQuery);

// // this is the id of the form
// $("#idForm").submit(function(e) {

//     e.preventDefault(); // avoid to execute the actual submit of the form.

//     var form = $(this);
//     var url = form.attr('action');

//     $.ajax({
//            type: "POST",
//            url: url,
//            data: form.serialize(), // serializes the form's elements.
//            success: function(data)
//            {
//                alert(data); // show response from the php script.
//            }
//          });


// });