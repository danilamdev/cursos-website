export const sendEmail =  (formdata) => {

  const fetchOptions = {
    method: 'POST',
    body: formdata,
    Headers: {
      // 'Content-Type': 'application/json',
      'Content-Type': 'multipart/form-data',
      // "Access-Control-Allow-Origin": "*",
    }
  }

  return fetch('https://cursos-worker.danilamdev.workers.dev/', fetchOptions)
    .then(  response => {
      return response.json()
    })

}