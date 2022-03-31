/* FORMULARIO  */

function send(){

    let nameForm=document.getElementById("name").value;
    let emailForm=document.getElementById("email").value;
    let checkBox=document.getElementById("check-val");
    
    /*Validaciones*/

    let valName=/^[a-zA-Z]{2,100}$/gi;
    let valEmail=/(\w+)\@(\w+)\.(\w+)$/gi;

  
    
    if(!valName.test(nameForm)){
     
        // alert("ERROR VALIDACION NAME ");
        Swal.fire({
            title:'<a style="font-family:Raleway" >Error name<a>',
            confirmButtonColor: '#08a6e4',
        })
        return;
        
    }

    if(!valEmail.test(emailForm)){
     
        // alert("ERROR VALIDACION EMAIL");
        Swal.fire({
            title:'<a style="font-family:Raleway" >Error email<a>',
            confirmButtonColor: '#08a6e4',
        })
        return;
        
    }

    if(!checkBox.checked){
        Swal.fire({
            title:'<a style="font-family:Raleway" >Error<a>',
            text:'Confirm that you have read the terms',
            confirmButtonColor: '#08a6e4',
        })
        return;
    }
 
    postForm(nameForm,emailForm);
}


function sendMail(){

    let mail=document.getElementById("emailText").value;
    let checkBox2=document.getElementById("check-val");
    let valMail=/(\w+)\@(\w+)\.(\w+)$/gi;

    if(!valMail.test(mail)){
     
        // alert("ERROR VALIDACION EMAIL");
        Swal.fire({
            title:'<a style="font-family:Raleway" >Error email<a>',
            confirmButtonColor: '#08a6e4',
        })
        return;
        
    }

    if(!checkBox2.checked){
        Swal.fire({
            title:'<a style="font-family:Raleway" >Error<a>',
            text:'Confirm that you have read the terms to send you new sales',
            confirmButtonColor: '#08a6e4',
        })
        return;
    }


    postNews(mail);


}


function postForm(nameForm,emailForm){
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

function postNews(mail){

    fetch('https://jsonplaceholder.typicode.com/posts',
    {

        method:'POST',
        body:JSON.stringify({

            email:mail 

        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },

    }).then((response) => response.json())
    .then((json) => console.log(json));

}

/* MODAL */
 window.onload=setTimeout(function(){

    document.querySelector(".popup").classList.remove('hidden');
    

},5000)


document.querySelector("#closeMark").addEventListener('click',function(){

    document.querySelector(".popup").classList.add('hidden');

});


/*Scroll Bar*/

window.onload=function(){
    
    update();
}

function update(){
    const progress=document.getElementById("progress-bar");
    progress.style.width=`${((window.scrollY)/(document.body.scrollHeight - window.innerHeight)*100)}%`;
    requestAnimationFrame(update);
    //callback
}