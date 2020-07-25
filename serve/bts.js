let Snake = function (name, age=5) {
    this.name = name;
    this.age = age;
    Object.defineProperty(this, 'bio', {
        // get: function(){return "hi " + name + " gg " + age}, //this doesnt work
        get: function(){return "name- " + this.name + " age-" + this.age},
        set: function(params){
            this.name = params.name;
            this.age = params.age;
        }
    })
}

var snake1 = new Snake('lazy')
Snake.prototype.run = function(){console.log("running")}
let snake2 = new Snake("verylazy", 6)


// let butt = document.createElement('button');
// butt.className = "bb";
// butt.innerHTML = "foobutton";
// document.querySelector('body').appendChild(butt);


setTimeout(function(){console.log("timer out")}, 2000);
// setTimeout(console.log("timer out"), 2000); //this doesnt work
document.querySelector('.bb').addEventListener('click', function(){
    console.log("clicked");
})

function gg(){
    for(let i=0; i<50; i+=10) {
        setTimeout(function(){
            document.getElementById('bar').style = "margin-left: "+ i+ 'px';
            console.log("margin "+i);
        },2000);
    }
}

function xd(i){
    if(i>=50) return null;
    else 
        setTimeout(function(){
            document.getElementById('bar').style = "margin-left: "+ i+ 'px';
            console.log("margin "+i);
            xd(i+=10, arr);   //i+=10 returns 10 unlike cpp
        },500);
}

// function xd(i, arr){
//     if(i>=50) return null;
//     else 
//         arr.push(setTimeout(function(){
//             document.getElementById('bar').style = "margin-left: "+ i+ 'px';
//             console.log("margin "+i);
//             xd(i+=10, arr);   //i+=10 returns 10 unlike cpp
//         },500));
// }


// let hh = [];
// function xd(i, arr){
//     if(i>=50) return null;
//     else 
//         arr.push(setTimeout(function(){
//             document.getElementById('bar').style = "margin-left: "+ i+ 'px';
//             console.log("margin "+i);
//             xd(i+=10, arr);   //i+=10 returns 10 unlike cpp
//         },2000));
// }
// xd(0, hh);
// clearTimeout(hh.pop());

// var interv = 0;
function interval(){
    return setInterval(function(){
        // var interv = 0;
        // let interv = 0;
        window.interv; 
        if(window.interv === undefined) window.interv = 0;
        console.log("interval", interv+=10);
    }, 500)
}