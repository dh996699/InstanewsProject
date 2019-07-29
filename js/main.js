$(function () {
 
    $('.loading').hide();

    function loadAjax(selected) {
        // console.log('loadAjax');
        $.ajax({
            method: 'get',
            url: 'https://api.nytimes.com/svc/topstories/v2/'+selected+'.json?api-key=loF5B7QAARl6Au2xTNto2IyPL2A7bmUt'

        })

            .done(function (data) {
                console.log(data);
                $('.article-link').html('');
                const results = data.results;
                // console.log(results);
        $.each(results, function(key, value) {
            // console.log(value.title);
            const title = value.title;
            const abstract = value.abstract;

        $('.article-link').append(`<div>${title, abstract}</div>`);
        });
                // // $each.()
                // // append an article template`<article><p>${abstract}</p></article>
                // $repoList.html('');
                // $.each(data, function(key, value) {
                //   // console.log(value.name);
                //   const name = value.name;
                //   $repoList.append(`<li>${name}</li>`);
                // });
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
            $('#article-select').before($('.loading').show());
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
