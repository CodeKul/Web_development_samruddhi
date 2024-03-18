// The response object, returned by the await fetch(),is a generic placeholder for multiple data formats.

// For example, you can extract the JSON object from a fetch response:

async function fetchDataJSON() {
    const response = await fetch('/data');
    const data = await response.json();
    return data;
  }
  
  fetchDataJSON().then(data => {
    data; 
  });
  

//  response.json() is a method of the Response object that allows a JSON object to be extracted from the response. 
//  The method returns a promise, so you have to wait for the JSON: await response.json().

// The Response object offers a lot of useful methods (all returning promises):

// response.json() returns a promise resolved to a JSON object
// response.text() returns a promise resolved to raw text
// response.formData() returns a promise resolved to FormData
// response.blob() returns a promise resolved to a Blob (a file-like object of raw data)
// response.arrayBuffer()() returns a promise resolved to an ArryBuffer (raw generic binary data)