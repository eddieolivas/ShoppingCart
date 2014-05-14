$(document).ready(function(){
		
	$("#list").on('click', ".erase", function() {
		$(this).parent().remove();
	});
	
	$("#list").on("click", ".food", function(event) {
			var checkbox = $(this).siblings("input");
			var checkboxValue = checkbox.prop("checked");
			$(this).toggleClass("strike");
			checkbox.prop("checked", !checkboxValue);
	});

	$("#list").on("click", "input", function(event) {
			$(this).siblings(".food").toggleClass("strike");
	});

	$("#list").on("click", "input", function(event) {
			var checkbox = $(this).find("input[type='checkbox']");
			$(this).toggleClass("strike");
			$(this).siblings("input").trigger("click");
	});
	
	$('#add').on('click', function() {
		var value = $("#item").val();
		$('#list').append('<li><input type="checkbox"><span class="food">' + value + '</span><button class="erase">X</button></li>');
    
    });

    $('#item').keyup(function(event) {
        if (event.keyCode == 13) {
			var value = $(this).val();
			$('#list').append('<li><input type="checkbox"><span class="food">' + value + '</span><button class="erase">X</button></li>');
		}
	});
});



