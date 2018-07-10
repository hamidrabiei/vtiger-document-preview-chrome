$(document).ready(function() {
	setTimeout(() => {
		console.log($('#documentRelatedRecord a'));

		// Find the link element
		urls = $('#documentRelatedRecord a');
		console.log(urls);
		$.each(urls, (i, obj) => {
			console.log("URLHODLER");
			console.log(obj);		
			url = obj.href;
			console.log(url);
			$.get(url).then(function(data) {
				console.log($(data));
				var k = $(data).find('#Documents_detailView_fieldValue_filename a');
				console.log(k);
				console.log(k[0].href);
				$('#documentRelatedRecord').append('<img height="200" width="200" src=' + k[0].href +  ' />');
			});
		});
	}, 5000);
});
