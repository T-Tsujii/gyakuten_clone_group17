document.addEventListener('turbolinks:load',function() {
    $("#search-text").keyup(function(){
        var val = $(this).val();
        $('.card-title').each(function() {
            if($(this).text().toLowerCase().indexOf(val.toLowerCase()) != -1){
                $(this).parents('#text').removeClass("hidden")
                $(this).parents('#text').addClass("d-flex")
            }else{
                $(this).parents('#text').removeClass("d-flex")
                $(this).parents('#text').addClass("hidden")
            }
        });

    });

});
