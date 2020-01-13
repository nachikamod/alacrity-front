var i = 0;

function timeStamper(){

    firebase.database().ref("alc_front_visitor_counter/count/").once('value',function(value){
        
        firebase.database().ref("alc_front_visitor_counter/count/").set(value.val() + 1); 

        document.getElementById("count").innerHTML = value.val();

    });
    

}

