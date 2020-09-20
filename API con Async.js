function getProcessedData(url) {
  return downloadData(url) // returns a promise
    .catch(e => {
      return downloadFallbackData(url)  // returns a promise
    })
    .then(v => {
      return processDataInWorker(v); // returns a promise
    });
}

//SOLUCION CON ASYNC
async function getProcessedData(url) {
    try {
      const response = await fetch(url);
      const post = await response.json();
  
      console.log(post);
      return post;
    } catch (e) {
      console.error(e.message);
    }
  };