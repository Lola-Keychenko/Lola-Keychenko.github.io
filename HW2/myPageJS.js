
var index = 1;
function addCard(id){
var tweet = $('<div class="card tCard" id='+twitterCIndex+' style="width: 18rem;"> \
<img src="images/redX.png" alt="redX" onclick="deleteCard('+index+')" width="25" height="25" > \
<br>\
<img class="mx-auto" src="#" alt="twitter logo" width="50" >\
<h3>Tweet</h3>\
<p>Sample tweet here</p>\
</div>');

    if(id == "card1"){
        tweet.appendTo('#card1');
    }
    else if(id == "card2"){
        tweet.appendTo('#card2');
    }
    else if(id == '#card3'){
        tweet.appendTo('#card3');
    }
    index++;
}

function deleteCard(id){
var remove = document.getElementById(id).remove();
}
