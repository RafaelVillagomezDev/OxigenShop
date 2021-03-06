/*Selector de precios*/
function selectorPrice(e) {
  const monedaSelect = e.target.value
  const priceBasic = document.querySelector('#price-text-basic')
  const priceProfesional = document.querySelector('#price-text-profesional')
  const pricePremium = document.querySelector('#price-text-premium')

  fetch(
    'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json',
  )
    .then((response) => {
      if (response.ok) {
        return response.json() //convierte la respuesta en un objeto
      }
    })
    .then((data) => {
      const valEur = data.usd['eur']
      const valGBP = data.usd['gbp']
      if (monedaSelect=='USD'){
        priceBasic.innerHTML =
        parseInt(parseInt(priceBasic.innerHTML.substring(0, 1)) ) +
        '$'
      priceProfesional.innerHTML =
        parseInt(
          parseInt(priceProfesional.innerHTML.substring(0, 2))) + '$'
      pricePremium.innerHTML =
        parseInt(parseInt(pricePremium.innerHTML.substring(0, 2))) +'$'
      }
      if (monedaSelect == 'EUR') {
        priceBasic.innerHTML =
          parseInt(parseInt(priceBasic.innerHTML.substring(0, 1)) * valEur) +
          '€'
        priceProfesional.innerHTML =
          parseInt(
            parseInt(priceProfesional.innerHTML.substring(0, 2)) * valEur,
          ) + '€'
        pricePremium.innerHTML =
          parseInt(parseInt(pricePremium.innerHTML.substring(0, 2)) * valEur) +
          '€'
      }
      if (monedaSelect == 'GBP') {
        priceBasic.innerHTML =
          parseInt(parseInt(priceBasic.innerHTML.substring(0, 1)) * valGBP) +
          '₤'
        priceProfesional.innerHTML =
          parseInt(
            parseInt(priceProfesional.innerHTML.substring(0, 2)) * valGBP,
          ) + '₤'
        pricePremium.innerHTML =
          parseInt(parseInt(pricePremium.innerHTML.substring(0, 2)) * valGBP) +
          '₤'
      }
    })
}

/* FORMULARIO  */

function send() {
  let nameForm = document.getElementById('name').value
  let emailForm = document.getElementById('email').value
  let checkBox = document.getElementById('check-val')

  /*Validaciones*/

  let valName = /^[a-zA-Z]{2,100}$/gi
  let valEmail = /(\w+)\@(\w+)\.(\w+)$/gi

  if (!valName.test(nameForm)) {
    // alert("ERROR VALIDACION NAME ");
    Swal.fire({
      title: '<a style="font-family:Raleway" >Invalid name<a>',
      text: 'Please enter a name with more than one character',
      confirmButtonColor: '#08a6e4',
    })
    return
  }

  if (!valEmail.test(emailForm)) {
    // alert("ERROR VALIDACION EMAIL");
    Swal.fire({
      title:
        '<a style="font-family:Raleway font-size:22px"  >Invalid email</a>',
      text: 'Please enter your email address in format: yourname@example.com',
      confirmButtonColor: '#08a6e4',
    })
    return
  }

  if (!checkBox.checked) {
    Swal.fire({
      title: '<a style="font-family:Raleway" >Error<a>',
      text: 'Confirm that you have read the terms',
      confirmButtonColor: '#08a6e4',
    })
    return
  }

  postForm(nameForm, emailForm)
}

function sendMail() {
  let mail = document.getElementById('emailText').value
  let checkBox2 = document.getElementById('check-val')
  let valMail = /(\w+)\@(\w+)\.(\w+)$/gi

  if (!valMail.test(mail)) {
    // alert("ERROR VALIDACION EMAIL");
    Swal.fire({
      title:
        '<a style="font-family:Raleway font-size:22px"  >Invalid email</a>',
      text: 'Please enter your email address in format: yourname@example.com',
      confirmButtonColor: '#08a6e4',
    })
    return
  }

  if (!checkBox2.checked) {
    Swal.fire({
      title: '<a style="font-family:Raleway" >Error<a>',
      text: 'Confirm that you have read the terms to send you new sales',
      confirmButtonColor: '#08a6e4',
    })
    return
  }

  postNews(mail)
}

function postForm(nameForm, emailForm) {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      name: nameForm,
      email: emailForm,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
}

function postNews(mail) {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      email: mail,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
}

/* MODAL */
window.onload = setTimeout(function () {
  document.querySelector('.popup').classList.remove('hidden')
}, 5000)

document.querySelector('#closeMark').addEventListener('click', () => {
  document.querySelector('.popup').classList.add('hidden')
})

/*Scroll Bar*/

window.onload = function () {
  update()
}

function update() {
  const progress = document.getElementById('progress-bar')
  progress.style.width = `${
    (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
  }%`
  requestAnimationFrame(update)
  //callback
}

/*Button Up */

document.getElementById('btn-up').addEventListener('click', () => {
  window.scrollTo(0, 0)
})

/*NAVBAR BURGUER*/

/*OPEN MENU BURGUER*/
document.getElementById('button-burguer').addEventListener('click', () => {
  document.querySelector('.nav-mobile').classList.remove('hidden-nav')
})

/*CLOSE MENU BURGUER*/

document.getElementById('close-nav').addEventListener('click', () => {
  document.querySelector('.nav-mobile').classList.add('hidden-nav')
})
