// if (bool) { }

var x = 18;
var y;

if(x > 18){
    y = "maior";
}
else if (x == 18){
    y = "igual";
}
else{
    y = "maior";
}

// console.log(y);

switch(x){
    case 18:
      y = 'dezoito';
      break;
    case 19:
      y = 'dezenove';
      break;
    default:
      y = 'nao';
}

console.log(y); 