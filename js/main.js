

function send(){

    let nameForm=document.getElementById("name").value;
    let emailForm=document.getElementById("email").value;
    

    fetch('https://jsonplaceholder.typicode.com/posts',
    {

        method:'POST',
        body:JSON.stringify({

            name:nameForm,
            email:emailForm 

        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },

    }).then((response) => response.json())
    .then((json) => console.log(json));

}