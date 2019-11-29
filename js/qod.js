
(function ($) {

    $(function () {

        // Quote Button

        let lastPage = '';

        $('#newQuoteButton').on('click', function (event) {
            event.preventDefault();

            lastPage = document.URL;

            $.ajax({
                method: 'get',
                url: qod_vars.rest_url + '/wp/v2/posts?filter[orderby]=rand&filter[posts_per_page]=1',
            }).done(function (data) {
                const newQuote = data[0];

                history.pushState(null, null, qod_vars.home_url + '/' + newQuote.slug);

                $('#entryContent').html(newQuote.excerpt.rendered);
                $('#entryMeta').html("— " + newQuote.title.rendered);

                if (newQuote._qod_quote_source_url && newQuote._qod_quote_source) {
                    $('#entryMeta').append(`<a href=" ${newQuote._qod_quote_source_url}"><span> , </span>${newQuote._qod_quote_source}</a>`);
                } else (newQuote)

            }).fail(function (error) {
                console.log("an error occurred", error);
            });
            $(window).on('popstate', function () {
                window.location.replace(lastPage);
            });
        });

        // Submit Form 

        $('#quoteSubmissionForm').on('submit', function (event) {
            event.preventDefault();

            const formData = {
                title: $('#quoteAuthor').val(),
                content: $('#quote').val(),
                _qod_quote_source_url: $('#quote-location').val(),
                _qod_quote_source: $('quote-url').val()
            };
            console.log(formData);

            $.ajax({
                method: 'post',
                url: `${qod_vars.rest_url}wp/v2/posts/`,
                data: formData,
                beforeSend: function (xhr) {
                    xhr.setRequestHeader('X-WP-Nonce', qod_vars.wpapi_nonce);
                },
            }).done(function (response) {
                console.log(response)

                $('#quoteSubmissionForm').slideUp(function () {
                    $('#submitSuccessMessage').append(`<p>Thank you for submitting your quote!</p>`)
                    $('#submitSuccessMessage').show();

                });

            }).fail(function () {
                alert('There is a problem! Please try again or contact your local administrator.');
            })
        });
    });

})(jQuery);



