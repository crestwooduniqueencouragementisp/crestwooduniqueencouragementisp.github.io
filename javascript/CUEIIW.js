//Template
// "0":{
//     "source":"",
//     "artist":"",
//     "quoter":""
// }

var image_library = null;

function pageLoad(page){
    $.getJSON("javascript/image_library.json", function(json) {
        //console.log(json);
        image_library = json;

        if(page == 'rand'){
            generate_rand_img();
        }
        else{
            rand_img_load();
        }
        
    });
}

function rand_img_load(){
    var img_total = 0;
    //console.log(image_library);
    for(each_img in image_library){
        img_total++;
    }

    var chosen_img = RNG(img_total);
    document.getElementById("img_display").src = image_library[chosen_img]["source"];
    console.log("loaded")
}

function generate_rand_img(){
    var img_total = 0;
    //console.log(image_library);
    for(each_img in image_library){
        img_total++;
    }

    var chosen_img = RNG(img_total);

    document.getElementById("img_display").src = image_library[chosen_img]["source"];
    document.getElementById("source_artist").innerHTML = "Artist: " + image_library[chosen_img]["artist"];
    document.getElementById("source_quote").innerHTML = "Quote Source: " + image_library[chosen_img]["quoter"];
}

// Clamp number between two values with the following line:
const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

function RNG(OutOf){
    return Math.floor((Math.random() * OutOf));
}
