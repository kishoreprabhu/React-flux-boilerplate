module.exports = {
	serverRequest( ajaxOptions ) {
		return new Promise(function(resolve, reject) {
			let req = new XMLHttpRequest();
			var url = ajaxOptions.url,
				method = ajaxOptions.method,
				dataObj = ajaxOptions.dataObj;
			req.open(method, url, true);
			req.withCredentials = true;
			req.setRequestHeader("Content-type", "application/json");
			req.onload = function() {
				var response = {};
				if (req.status === 200) {
					response.status = req.status;
					response.success = true;
					response.data = req.responseText ? JSON.parse( req.responseText ) : {};
					resolve( response );
				} else {
					response.status = req.status;
					response.success = false;
					console.log(req.responseText, "error");
					response.data = typeof req.responseText === "object" ? JSON.parse( req.responseText ) : {};
					reject( response );
				}
			};
	 
			req.onerror = function() {
				reject(new Error("Network error"));
			};
			
			
			if ( dataObj ) {
				req.send( JSON.stringify( dataObj ));
			} else {
				req.send();
			}
		});
	}
}
