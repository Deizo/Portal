          $( document ).ready( function(){
                $( "#main" ).load( "main.html" );
			});



  function main() {
    $( document ).ready( function(){
                $( "#main" ).load( "main.html" );
			});
 document.getElementById("main").style.display = "inline";
 document.getElementById("ramais").style.display = "none";
 document.getElementById("instrucoes").style.display = "none";
 document.getElementById("contas").style.display = "none";
 document.getElementById("servicos").style.display = "none";
} 

  function ramais() {
 document.getElementById("main").style.display = "none";
 document.getElementById("instrucoes").style.display = "none";
 document.getElementById("contas").style.display = "none";
 document.getElementById("servicos").style.display = "none";
 $( document ).ready( function(){
                $( "#ramais" ).load( "ramais.html" );
			});
document.getElementById("ramais").style.display = "inline";
}

  function instrucoes() {
 document.getElementById("main").style.display = "none";
 document.getElementById("ramais").style.display = "none";
 document.getElementById("contas").style.display = "none";
 document.getElementById("servicos").style.display = "none";
 $( document ).ready( function(){
                $( "#instrucoes" ).load( "instrucoes.html" );
			});
document.getElementById("instrucoes").style.display = "inline";
}

  function contas() {
 document.getElementById("main").style.display = "none";
 document.getElementById("ramais").style.display = "none";
 document.getElementById("instrucoes").style.display = "none";
 document.getElementById("servicos").style.display = "none";
 $( document ).ready( function(){
                $( "#contas" ).load( "contas.html" );
			});
document.getElementById("contas").style.display = "inline";
}

  function servicos() {
 document.getElementById("main").style.display = "none";
 document.getElementById("ramais").style.display = "none";
 document.getElementById("instrucoes").style.display = "none";
 document.getElementById("contas").style.display = "none";
 $( document ).ready( function(){
                $( "#servicos" ).load( "servicos.html" );
			});
document.getElementById("servicos").style.display = "inline";
}
