var list = [1, 2, 3];
var p1 = ['chrid', 44]; //tuple
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {}));
; //enum
var c = Color.Green;
console.log(c);
//any type
var random = 10;
random = true;
random = 'viswas';
