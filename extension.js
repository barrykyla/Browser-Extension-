(function() {

	var food = [ 'https://mindbodygreen-res.cloudinary.com/image/upload/w_767,q_auto:eco,f_auto,fl_lossy/org/screen_shot_2017-01-06_at_12.18.48_pm.png', 'https://greenblender.com/smoothies/wp-content/uploads/2017/07/The-Best-Healthy-Food-Instagram-Accounts-thedelicious.png', 'https://media1.popsugar-assets.com/files/thumbor/fVnCPOZRV2hzKnVL1qFc9yskr4k/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2016/03/29/228/n/28443503/9ca2824c_edit_img_image_40728888_1459212236_thumb/i/Healthy-Food-Inspiration-From-Instagram.jpg' ];

	$('img').each( function() {
		var which = Math.floor(Math.random() * food.length);
		var urls = [ 'http://www.thisisbeauty.org/'];
		var quotes = [ ' YOU ARE BEAUTIFUL '];

$('*').css( { 'background-color': 'rgb(239,165,178)'});	

$('a').attr('href', 'https://www.nhlbi.nih.gov/health/educational/lose_wt/eat/calories.htm');

		$('p').each( function() {
			var words = $(this).text().split(' ');	
			var output = '';						
			for (i=0; i<words.length; i++) {
				output += words[i];					
				if (Math.random() < 0.01) {		
					output += '<a href="' + urls + '">  '+ quotes +' </a>';	
				}
				output += ' ';	
		}
			$(this).html(output);
		});
	});
})();

//BELOW IS MY FAILED ATTEMPT AT TRYING TO CHANGE IMAGES. In theory this should work but the code on it doesnt actuallty do what it needs to
	// var food = [ 'https://mindbodygreen-res.cloudinary.com/image/upload/w_767,q_auto:eco,f_auto,fl_lossy/org/screen_shot_2017-01-06_at_12.18.48_pm.png', 'https://greenblender.com/smoothies/wp-content/uploads/2017/07/The-Best-Healthy-Food-Instagram-Accounts-thedelicious.png', 'https://media1.popsugar-assets.com/files/thumbor/fVnCPOZRV2hzKnVL1qFc9yskr4k/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2016/03/29/228/n/28443503/9ca2824c_edit_img_image_40728888_1459212236_thumb/i/Healthy-Food-Inspiration-From-Instagram.jpg' ];

	// $('img').each( function() {
	// 	var which = Math.floor(Math.random() * food.length);
	// 	$(this).attr('src', 'https://mindbodygreen-res.cloudinary.com/image/upload/w_767,q_auto:eco,f_auto,fl_lossy/org/screen_shot_2017-01-06_at_12.18.48_pm.png' + food[which]);







