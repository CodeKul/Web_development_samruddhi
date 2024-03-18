// To perform parallel fetch requests use the Promise.all() helper function.

async function fetchDataAndCategories() {
  const [dataResponse, categoriesResponse] = await Promise.all([
    fetch("/data"),
    fetch("/categories"),
  ]);
  const data = await dataResponse.json();
  const categories = await categoriesResponse.json();

  return [data, categories];
}
//promise.allsettled
fetchDataAndCategories()
  .then(([data, categories]) => {
    data; // fetched data fail
    categories; // fetched categories
  })
  .catch((error) => {
    // /data or /categories request failed
  });

//await Promise.all([...]) starts fetch requests in parallel, and waits until all of them are resolved.

//If any request fails, then the whole parallel promise gets rejected right away with the failed request error.

//In case if you want all parallel requests to complete, despite any of them fail, consider using Promise.allSettled().
