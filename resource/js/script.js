window.onload = function(){
    var http = new XMLHttpRequest();
    var json;
    http.onreadystatechange = function(){
        if(http.readyState == 4 && http.status == 200){
            json = JSON.parse(this.responseText);
//            console.log(json);
            var conteudo = document.getElementById('product-shelf');
            conteudo.innerHTML = "<div class='wrapper-crossproducts>'"
            for(var i = 0; i < json[0].data.recommendation.length; i++){
                conteudo.innerHTML +=
                                "<div class='box-product f-left'>" +
                                "<img src=" + json[0].data.recommendation[i].imageName + " />" +
                                "<div class='wrapper-info-product' > " +
                                "<div class='divh-product-name'><p>" + json[0].data.recommendation[i].name + "</p> </div>" +
                                "<p> por: " + json[0].data.recommendation[i].price + "</p>" +
                                "<p>" + json[0].data.recommendation[i].productInfo.paymentConditions + "</p>" +
                                "</div> <!--wrapper-info-product -->" +
                                "</div>";
            }
            conteudo.innerHTML += "</div>"
        }
    }
    http.open("GET", "../service/products.json", true);
    http.send();


    //Clamp
//    var item = $('.p3');
//    $clamp(item[0], {
//      clamp: 1
//    });


};

$(function(){
//    var item = $('.divh-product-name p');
//    $clamp(item[0], {
//      clamp: 1
//    });

    var p = $('.divh-product-name p');
    var divh = $('.divh-product-name').height();
    while ($(p).outerHeight() > divh) {
        if($(p).height() > divh){
            $(p).text(function (index, text) {
                return text.replace(/\W*\s(\S)*$/, '...');
            });
        }else{
            return null;
        }
    }
})
