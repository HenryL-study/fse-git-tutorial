$(document).ready(function(){
	$('.check-tag').attr('value','false');
	$('#user-dropdown')
  		.dropdown()
	;
	$('#user-dropdown-two')
  		.dropdown()
	;

	$('#book-image')
		.popup({
			inline:true
		})
	;
	$('#add-tag')
		.popup({
			inline:true
		})
	;
	$('#self-rate')
  		.rating({
    		initialRating: 2,
    		maxRating: 4
  		})
	;
	$('#ladders-rate')
  		.rating({
    		initialRating: 2,
    		maxRating: 4
  		})
	;
	$('#catalog-open').click(function(){
		if($(this).attr('class') === 'ui positive button active'){
			$(this).attr('class','ui button');
			$('#catalog-close').attr('class','ui positive button active');
			$('#catalog-part').removeClass('show')
			$('#catalog-part').addClass('hide')
			$('#catalog-all').removeClass('hide')
			$('#catalog-all').addClass('show')
		}
	});
	$('#catalog-close').click(function(){
		if($(this).attr('class') === 'ui positive button active'){
			$(this).attr('class','ui button');
			$('#catalog-open').attr('class','ui positive button active');
			$('#catalog-part').removeClass('hide')
			$('#catalog-part').addClass('show')
			$('#catalog-all').removeClass('show')
			$('#catalog-all').addClass('hide')
		}
	});
	$('#tag-ok').click(function(){
		
	});
	$('#tag-cancel').click(function(){
		$('.check-tag').each(function(){
			if($(this).attr('value') == "true"){
				$(this).attr('value','false');
				$(this).removeClass('active');
				newhtml = $(this).html().split('<')[0];
				$(this).html(newhtml);

			}
		});
		$('#tag-display').removeClass('hide').addClass('show');
		$('#tag-check').removeClass('show').addClass('hide');
		$('#tag-input').removeClass('show').addClass('hide');
		$('#select-label').removeClass('show').addClass('hide');
		$('#add-tag').removeClass('hide').addClass('show');
		$('#tag-check').remove($(".temp"));

	});
	$('#add-tag').click(function(){
		$(this).removeClass('show').addClass('hide');
		$('#tag-display').removeClass('show').addClass('hide');
		$('#tag-check').removeClass('hide').addClass('show');
		$('#tag-input').removeClass('hide').addClass('show');
		$('#select-label').removeClass('hide').addClass('show');

	});
	$('.check-tag').click(function(){
		if($(this).attr('value') == "false"){
			$(this).attr('value','true');
			$(this).addClass('active');
			var i = $("<i id = 'check-tag-i'+$(this).attr('id') class = 'delete icon'></i>");
			$(this).append(i);
		}
		else{
			$(this).attr('value','false');
			$(this).removeClass('active');
			newhtml = $(this).html().split('<')[0];
			$(this).html(newhtml);
		}
	});
	
	/*$("#self-rate").click(function(){
		rate = $(this).children('.active').length;
		console.log(rate);
		href = window.location.href;
		id = href.split(':')[2].split('/')[2];
		$.ajax({
            type:"POST",
            dataType:"text", 
            url:"/book/"+id+"/add_one_tag",
            data: {                
                tag_name:val,
            },
            success: function(data){ 
				alert(data);
            },
            error: function(xhr, textStatus, errorThrown){
                alert("error");
            },
        });   	
	}
	return false;
	});
	$("#favourate").click(function(){
		rate = $(this).children('.active').length;
		console.log(rate);
		href = window.location.href;
		id = href.split(':')[2].split('/')[2];
		$.ajax({
            type:"POST",
            dataType:"text", 
            url:"/book/"+id+"/add_one_tag",
            data: {                
                tag_name:val,
            },
            success: function(data){ 
				alert(data);
            },
            error: function(xhr, textStatus, errorThrown){
                alert("error");
            },
        });   	
	}
	return false;
	});*/
});