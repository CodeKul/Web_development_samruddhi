//404  Not found
//500 Internal server Error
//200 success
//400 


async function fetchData404() {
    const response = await fetch('/oops');
    
    response.ok;  
    response.status; 
  
    const text = await response.text();
    return text;
  }
  
  fetchData404().then(text => {
    text; 
  });


//   When fetching the URL '/oops' the server responds with status 404 and text 
//'Page not found'. Surprisingly, fetch() doesn't throw an error for a missing URL,
// but considers this as a completed HTTP request.

// fetch() rejects only if a request cannot be made or a response cannot be retrieved. This can happen during network problems: no internet connection, host not found, the server is not responding.

// Fortunately, response.ok property lets you distinguish good from bad HTTP response statuses. The property is set to true only if the response has status 200-299.

// In the above example, the response.ok property is false because the response has the status 404.

// To throw an error on a bad HTTP status (outside of the range 200-299), check the value of response.ok property and throw an error manually:

