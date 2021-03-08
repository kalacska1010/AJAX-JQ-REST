
$(function(){

// rákattintunk a gombra akkor az adatok egy divbe íródjanak ki

$("#beolvas").on("click", beolvas);
$("#kuld").on("click", adBeir);

});
var telefonkonyvem=[];
function kiir(){
    //article tagbe
// var nev= telefonkonyvem;
//        var tel= $("#tel").val();
//        var kep= $("#kep").val();
    for (var i = 0; i < telefonkonyvem.length; i++) {
        var nev= telefonkonyvem[i].nev;
        var tel= telefonkonyvem[i].tel;
        var kep= telefonkonyvem[i].kep;
         $("article").empty();
    var elem = "<div><h2>"+nev+"</h2><p>"+tel+"</p><p>"+kep+"</p><button class='torol'>Töröl</button></div>";
    
   
    }
 
}


function beolvas(){
    $.ajax({
        type:"GET",
        url: "feldolgoz.php",    
        success: function(result){
        $("#div1").html(result);
            console.log(result);//JSON formátumban várjuk az ab eredményeit
            telefonkonyvem= JSON.parse(result);
            console.log(telefonkonyvem);
            kiir();
            
    },
    error: function(){
            alert("hiba az adatok betöltésekor!");
    }
  });
    
}

function adBeir(){
    // kiolvassuk az űrlapról az adatokat
        var szemely ={
            nev: $("#nev").val(),
            tel: $("#tel").val(),
            kep: $("#kep").val()
            
        };
        
    //elküldjük a beir.php nak 
        $.ajax({
        type:"POST",
        url: "beir.php",
        data:szemely,
        success: function(ujSzemely){
            console.log(ujSzemely);//JSON formátumban várjuk az ab eredményeit
            telefonkonyvem.push(JSON.parse(ujSzemely));
            console.log(telefonkonyvem);
            kiir();
            
        },
        error: function(){
                alert("hiba az adatok mentésekor!");
        }
     });
    
    //űrlap adatokat a képernyőre is kiírjuk.
}