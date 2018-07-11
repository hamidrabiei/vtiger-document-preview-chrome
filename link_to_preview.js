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
				var url = $(data).find('#Documents_detailView_fieldValue_filename a')[0].href;
				var fileType = $(data).find('#Documents_detailView_fieldValue_filetype')[0].innerText.trim();

				console.log(url);
				console.log(fileType);
				if (fileType.startsWith('image')) {
					$(obj).append('<img height="200" width="200" src=' + url +  ' />');
				}
			});
		});
	}, 5000);
});
