1.//Fetch Api through Http Methods
// The Fetch API accesses resources across the network.
//  You can make HTTP requests (using GET, POST and other methods), download, and upload files.

// resource: the URL string, or a Request object
// options: the configuration object with properties like method, headers, body, credentials

// fetch() starts a request and returns a promise. When the request completes,
// the promise is resolved with the Response object.
// If the request fails due to some network problems, the promise is rejected.

//async/await syntax fits great with fetch()
// because it simplifies the work with promises with syntactic sugar.

async function fetchData() {
  const response = await fetch("/data");
  console.log(response);
}

// fetchADat() is an asynchronous function since it's marked with the async keyword.

// await fetch('/data') starts an HTTP request to '/datA' URL. Because the await keyword is present,
//the asynchronous function is paused until the request completes.

// When the request completes, response is assigned with the response object of the request.
// Let's see in the next section how to extract useful data, like JSON or plain text, from the response.
