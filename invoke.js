function dizerOi(nome){
    console.log(this);
    console.log("Oi, " + nome);
}

dizerOi("Arya");

dizerOi.call(null,"Arya");

dizerOi.call(null,["Arya"]);