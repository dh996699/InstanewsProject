$(function () {
    $('#article-select').before($('.loading').hide());
    $('#article-select').on('change', function () {
        const select = $(this).val();
        $('.articles').html('');
        $('#article-select').before($('.loading').show());

        $('.logo-header').toggleClass('is-active');

        $.ajax({
            method: 'GET',
            url: 'https://api.nytimes.com/svc/topstories/v2/' + select + '.json?api-key=loF5B7QAARl6Au2xTNto2IyPL2A7bmUt'

        }).done(function (data) {
            console.log(data);
            const filteredData = data.results.filter(function (item) {
                return item.multimedia[4] !== undefined;
                // if (item.multimedia[4] !== undefined) {
                //     return true
                // } else { return false }
            }).slice(0, 12);

            // const results = image.slice(0, 12)

            $.each(filteredData, function (key, value) {
                console.log(value);
                const abstract = value.abstract;
                const pic = value.multimedia[4].url;
                const link = value.short_url;

                const htmlTemplate = `
                    <a href="${link}" class="article" style="background: url(${pic}) center/cover;">
                        <p class="article-info">${abstract}</p>
                    </a>
                `;

                $('.articles').append(htmlTemplate);


            })

        }).fail(function () {
            console.log("Please try again!");
        }).always(function () {
            // end of loadAjax
            // hide loading gif
            $('.loading').hide();
            // $('.logo').css({
            //     'width': '150px',
            //     'height': '150px'
            // });
        });
    });

}); //End of document ready.
