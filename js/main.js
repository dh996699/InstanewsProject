$(function () {

    function loadAjax(selected) {
        console.log('load ajax');
        $.ajax({
            method: 'get',
            url: 'https://api.nytimes.com/svc/topstories/v2/'+selected+'.json?api-key=loF5B7QAARl6Au2xTNto2IyPL2A7bmUt'

        })
            .done(function (data) {
                console.log(data);
                const results = data.result;
                // // $each.()
                // // append an article template`<article><p>${abstract}</p></article>

            })
            .fail(function (err) {
                console.log(err);
            })

            .always(function () {
                // hide loading gif
            });
    }// end of loadAjax


    $('#article-select').on('change', function () {
        console.log('change');
        const select = $(this).val();
        if (select !== '') {
            loadAjax(select);
        }
    });



 }); //End of document ready.
