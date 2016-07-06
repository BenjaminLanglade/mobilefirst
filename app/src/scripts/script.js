$( document ).ready(function() {
    $( "#nav-toggle" ).click(function() {
      $(this).toggleClass( "active" );
      $('.nav').slideToggle('fast');
    });

    $('.panel-heading.annee').click(function() {
      $('.panel-body.annee').slideToggle('fast');
    });
    $('.panel-heading.thematique').click(function() {
      $('.panel-body.thematique').slideToggle('fast');
    });
    $('.panel-heading.cotation').click(function() {
      $('.panel-body.cotation').slideToggle('fast');
    });
    $('.about-us-button').click(function() {
      $('.about-us').slideToggle('fast');
    });
});
