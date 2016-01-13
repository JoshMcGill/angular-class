var app = angular.module('Brony');

app.service('ModelService', ['$http', function ($http) {
    this.ponies = [
        {
            ponyName: "Twilight Sparkle",
            imgUrl: "http://pre02.deviantart.net/8872/th/pre/i/2012/206/7/d/twilight_sparkle_by_hankofficer-d46dfaw.png"
        },
        {
            ponyName: "Applejack",
            imgUrl: "http://vignette4.wikia.nocookie.net/mlpfanart/images/f/ff/Applejack_3_by_xpesifeindx-d5gsde5.png/revision/latest?cb=20131015231355"
        },
        {
            ponyName: "Fluttershy",
            imgUrl: "http://vignette2.wikia.nocookie.net/mlp-gameloft/images/6/6a/Fluttershy_Vector.png/revision/latest?cb=20141214215316"
        },
        {
            ponyName: "Rarity",
            imgUrl: "http://1.bp.blogspot.com/-IrxWMAAa59Y/VJcwMUclj1I/AAAAAAAAAYo/WrLGJd5dc9I/s1600/Tumblr_mxzwafbm7w1s88ss5o1_1280.png"
        },
        {
            ponyName: "Pinkie Pie",
            imgUrl: "http://vignette4.wikia.nocookie.net/mlp-gameloft/images/a/a9/Pinkie_Pie_Vector.png/revision/latest?cb=20141214220055"
        },
        {
            ponyName: "Rainbow Dash",
            imgUrl: "http://img07.deviantart.net/5ecb/i/2012/217/5/e/rainbow_dash_has_a_cunning_plan_by_ponyengineer-d59m2wq.png"
        },
        {
            ponyName: "Spike",
            imgUrl: "http://vignette4.wikia.nocookie.net/mugen/images/b/b7/Spike_the_Dragon.png/revision/latest?cb=20130918052802"
        }
    ]

    this.favoritePonies = [
        {
            ponyName: "FlutterButt",
            imgUrl: "http://vignette2.wikia.nocookie.net/mlp-gameloft/images/d/d8/Fluttershy_vector.png/revision/latest?cb=20131128034059",
            youtube: "VP0AgmMw32k",
            userName: "JoshMcGill"
        },
        {
            ponyName: "Sunshine Buttercup",
            imgUrl: "https://s-media-cache-ak0.pinimg.com/736x/1d/2c/f8/1d2cf8a3bbafbe1e527c55f538a624e5.jpg",
            youtube: "cAvdurD6zyo",
            userName: "DerrJo" 
        },
        {
            ponyName: "Icecream Fudge",
            imgUrl: "http://images5.fanpop.com/image/photos/29800000/My-Little-Pony-Pictures-my-little-pony-friendship-is-magic-29829689-2380-2560.png",
            youtube: "ptiLPlFR2wY",
            userName: "MyPonyFan"   
        }
    ];

}]);