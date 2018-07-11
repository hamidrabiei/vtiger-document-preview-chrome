chrome.webRequest.onHeadersReceived.addListener(
	function(details){
	console.log(details);
		var headers=details.responseHeaders;
		for(var i=0;i<headers.length;i++){
			if(headers[i].name.toLowerCase()=='content-disposition'){
				if(headers[i].value.indexOf('attachment')==0){
					headers.splice(i,1);
				}
				break;
			}
		}
		return {responseHeaders: headers};
	},
	{
		urls: ['<all_urls>'],
	},
	['blocking', 'responseHeaders']
);

