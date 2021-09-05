//for, for in, while, do while

var x = 0;

do{
    console.log("X é igual a "+ x);
    x = x + 1;
}
while(x > 1);

for(var y = 0; y < 10; y = y + 1){
   console.log('este e o for: '+ y);
}

var obj = {
   nome: 'Bruno',
   sobrenome: 'Carvalho'
};

for(var prop in obj){
  console.log(obj[prop]);
}


