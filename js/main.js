$(function () {
 $('.loading').show();

    function loadAjax(selected) {
        // console.log('loadAjax');
        $.ajax({
            method: 'get',
            url: 'https://api.nytimes.com/svc/topstories/v2/'+selected+'.json?api-key=loF5B7QAARl6Au2xTNto2IyPL2A7bmUt'

        })

            .done(function (data) {
                // console.log(data);
                const results = data.result;
                // // $each.()
                // // append an article template`<article><p>${abstract}</p></article>

            })
            .fail(function (err) {
                // console.log(err);
            })

            .always(function () {
                // hide loading gif
            });
    }// end of loadAjax


    $('#article-select').on('change', function () {
        // console.log('change');
        const select = $(this).val();
        if (select !== '') {
            // $('#article-select').before(`<img class="loading" src="./assets/images/ajax-loader.gif" alt="Waiting for loading" height="100" width="100">`);
            loadAjax(select);
        }
    });



    // $repoList.html('');
    //   $.each(data, function(key, value) {
    //     // console.log(value.name);
    //     const name = value.name;
    //     $repoList.append(`<li>${name}</li>`);
    //   });

 }); //End of document ready.
