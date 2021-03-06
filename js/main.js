$(function () {

    $('#article-select').on('mouseenter', () => {
        $('#article-select').animate({
            fontSize: '24px'
        }, 200)
    })

    $('#article-select').on('mouseleave', () => {
        $('#article-select').animate({
            fontSize: '16px'
        }, 200)
    })

    $('#article-select').before($('.loading').hide());
    $('#article-select').on('change', function () {
        const select = $(this).val();

        $('.articles').html('');
        $('.logo-header').addClass('is-active');
        $('#article-select').before($('.loading').show());


        $.ajax({
            method: 'GET',
            url: 'https://api.nytimes.com/svc/topstories/v2/' + select + '.json?api-key=loF5B7QAARl6Au2xTNto2IyPL2A7bmUt'

        }).done(function (data) {
            const filteredData = data.results.filter(function (item) {
                return item.multimedia[4] !== undefined;
            }).slice(0, 12);

            $.each(filteredData, function (key, value) {
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

            if ($('select').val() == "section") {
                $('.logo-header').removeClass('is-active');
            }
            $('.article').on('mouseenter', () => {
                $('.article-info').show()
            });

            $('.article').on('mouseleave', () => {
                $('.article-info').hide()
            });
        });
    });

}); //End of document ready.
