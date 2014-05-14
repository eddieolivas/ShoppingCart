$(document).ready(function(){
		
	$("button#erase").on('click', function() {
		$(this).parent().remove();
	})
	
	$(".food").on("click",function(event) {
			var target = $(event.target);
			var checkbox = $(this).find("input[type='checkbox']");
    		if (target.is('input:checkbox') && !checkbox.prop("checked")) {
    			checkbox.prop("checked", true);
    		}
    		else if (target.is('input:checkbox') && checkbox.prop("checked")){
    			checkbox.prop("checked",false);
    		}
			
			if( !checkbox.prop("checked") ){
	        	checkbox.prop("checked",true);
		    } 
		    else if(checkbox.prop("checked")) {
		    	checkbox.prop("checked", false);
		    }
		    else {
		        checkbox.prop("checked",false);
		    }
		    
    		$(this).toggleClass("strike");
	})
	
	$('#add').on('click', function() {
		var value = $("#item").val();
    	$('#list').append('<li class="food"><input type="checkbox" name="food" value="New Value">' + value + '<button id="erase">X</button></li>');
    	$("button#erase").on('click', function() {
				$(this).parent().remove();

		})
	
			$(".food").on("click",function(event) {
					var target = $(event.target);
					var checkbox = $(this).find("input[type='checkbox']");
		    		if (target.is('input:checkbox') && !checkbox.prop("checked")) {
		    			checkbox.prop("checked", true);
		    		}
		    		else if (target.is('input:checkbox') && checkbox.prop("checked")){
		    			checkbox.prop("checked",false);
		    		}
					
					if( !checkbox.prop("checked") ){
			        	checkbox.prop("checked",true);
				    } 
				    else if(checkbox.prop("checked")) {
				    	checkbox.prop("checked", false);
				    }
				    else {
				        checkbox.prop("checked",false);
				    }
				    
		    		$(this).toggleClass("strike");
			})
	})

    $('#item').keyup(function(event) {
        if (event.keyCode == 13) {
        	var value = $(this).val();
         	$('#list').append('<li class="food"><input type="checkbox" name="food" value="New Value">' + value + '<button id="erase">X</button></li>');
		 	
			$("button#erase").on('click', function() {
				$(this).parent().remove();

			})
	
			$(".food").on("click",function(event) {
					var target = $(event.target);
					var checkbox = $(this).find("input[type='checkbox']");
		    		if (target.is('input:checkbox') && !checkbox.prop("checked")) {
		    			checkbox.prop("checked", true);
		    		}
		    		else if (target.is('input:checkbox') && checkbox.prop("checked")){
		    			checkbox.prop("checked",false);
		    		}
					
					if( !checkbox.prop("checked") ){
			        	checkbox.prop("checked",true);
				    } 
				    else if(checkbox.prop("checked")) {
				    	checkbox.prop("checked", false);
				    }
				    else {
				        checkbox.prop("checked",false);
				    }
				    
		    		$(this).toggleClass("strike");
			})
			
    	} 
		

	})

});

