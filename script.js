//javascript

//filter array

let filterarray = [];

let clothesarray = [
    {
        id: 1,
        name: "t-shirt",
        src: "https://images.pexels.com/photos/2220316/pexels-photo-2220316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc: "This is a premium t-Shirt."
    },
    {
        id: 2,
        name: "kurti",
        src: "https://images.pexels.com/photos/19556879/pexels-photo-19556879/free-photo-of-young-woman-wearing-a-blue-kurti.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc: "This is a premium Kurti."
    },
    {
        id: 3,
        name: "saree",
        src: "https://images.pexels.com/photos/9419149/pexels-photo-9419149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc: "This is a premium Saree."
    },
    {
        id: 4,
        name: "jeans",
        src: "https://images.pexels.com/photos/2062324/pexels-photo-2062324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc: "This is a premium jeansmens."
    },
    {
        id: 5,
        name: "joggers",
        src: "https://images.pexels.com/photos/26891541/pexels-photo-26891541/free-photo-of-man-in-trainers-joggers-over-shirt-and-hoodie-standing-by-lake.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc: "This is a premium joggers."
    },
    {
        id: 6,
        name: "shirts",
        src: "https://images.pexels.com/photos/7671168/pexels-photo-7671168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc: "This is a premium shirts."
    },
]

// Create a function to show clothes
showClothe(clothesarray);
function showClothe(currarray) {

document.getElementById("card").innerText = "";

    for(var i=0; i<currarray.length; i++){
        document.getElementById("card").innerHTML += `
        <div class="col-md-4 mt-3">
        <div class="card p-3 ps-5 pe-5">
        <h4 class="text-capitalize text-center ">${currarray[i].name}</h4>
        <img src="${currarray[i].src} width="100%" height="320px"/>
        <p class="mt-2">${currarray[i].desc}</p>
        <button class="btn btn-primary w-100 mx-auto">More</button>
        </div>
        </div>
        `
    }
}

//live searching using input

document.getElementById("myinput").addEventListener("keyup",function(){
    let text = document.getElementById("myinput").value;

    filterarray = clothesarray.filter(function(a){
        if(a.name.includes(text) ){
            return a.name;
        }
    });

    if(this.value == ""){
        showClothe(clothesarray);
    }
    else{
        if(filterarray == ""){
            document.getElementById("para").style.display = "block";
            document.getElementById("card").innerHTML = "";
        }
        else{
            showClothe(filterarray);
            document.getElementById("para").style.display = "none";
        }
    }
})