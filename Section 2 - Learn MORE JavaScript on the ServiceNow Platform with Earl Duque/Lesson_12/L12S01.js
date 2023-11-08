//
// L12S01 - Setting up the client side
//

// Client-side script to call a server-side script include named 'MyServerCode'.
var ga = new GlideAjax('MyServerCode');
ga.addParam('sysparm_name', 'getServerTime');
ga.getXML(handleResponse);

function handleResponse(response) {
  var serverTime = response.responseXML.documentElement.getAttribute("answer");
  alert("Server time is: " + serverTime);
}
