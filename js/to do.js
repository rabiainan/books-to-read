	$(document).ready(function(){ 

   $("#newItemForm").submit(function(e){
	   
	  e.preventDefault(); 
	var text=$("input:text").val();  
	   
	$("ul").append("<li>"+ text + "</li>");
	
	$("input:text").val("");
	
   });
   
   
   $("ul").on("click","li",function(){
	   
	   $(this).remove();
	   
   });
    
	});