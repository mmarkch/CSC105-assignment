// var keys = "", values = "";
// var booklist = new Array("Chinese", "English", "Jap");
// booklist.newField1 = "Something";

// for(var key in booklist){
//     keys += key + " ";
//     values += booklist[counter] +" ";
// }

////////////////////////////////////////////////////////////////

var obj = new Object(); //Creating an object

// Adding three properties to obj
obj.prop1 = 123;
obj.prop2 = "456";
obj.["prop3"] = true; //same as obj.prop3 = true

var keys = "", values=" ";
for(var p in obj){
    keys += p +" ";
    values += obj[p] + " ";
}

alert(keys);
//Show "prop1 prop2 prop3"

alert(values);
//Show "123 456 true"