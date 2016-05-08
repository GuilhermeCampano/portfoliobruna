$(function(){
  var createCard = function(imageName,title,tags){
    var imagePath = 'app/assets/img/cases/'+imageName;
    var template = '';
    template += '<div class="col s12 m4 l3">';
    template += '<div class="card small">';
    template += '<div class="card-image">';
    template += '<img src="'+imagePath+'">';
    template += '</div>';
    template += '<p class="title">'+title+'</p>';
    template += '<p class="tags">'+tags+'</p>';
    template += '</div>';
    template += '</div>';
    template += '</div>';
    $("#cases-content").append(template);
  }
  $.ajax({
    url: "app/services/cases.json",
    dataType: "json"
  })
  .done(function(cases) {
    console.log(cases.data);
    $.each(cases.data, function( index, item ) {
      console.log(index);
      createCard(item.thumbnail,item.title,item.tags.join(' | '));
    });
  });

});
