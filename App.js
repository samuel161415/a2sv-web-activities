const axios = require('axios')


axios.get('https://jsonplaceholder.typicode.com/posts')
  .then((response) => {
    // View the response data in the console
    console.log('All post data',response.data);
  })
  .catch((error) => {
    // Handle any errors 
    console.error('Error:', error);
  });


  axios.post('https://jsonplaceholder.typicode.com/posts', {
  userId: 1,
  title: 'New Post Title',
  body: 'New Post Body',
})
  .then((response) => {
    console.log('added data',response.data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });



