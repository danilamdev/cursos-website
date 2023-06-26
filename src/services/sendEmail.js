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
 
    return fetch('http://localhost:8787', fetchOptions )
      .then(response => response.json())

}