const submit = document.querySelector('.submit-btn')
let name = document.getElementById('name')
let mail = document.getElementById('mail')
let phone = document.getElementById('name')
let message = document.getElementById('message')



console.log(phone)

submit.addEventListener('click', ()=>{
    let formData={
        name: name.value,
        mail: mail.value,
        phone: phone.value,
        message: message.value
    }
    Swal.fire(
        'Message sent!',
        'We will contact you soon',
        'success'
      )
    let xhr = new XMLHttpRequest()
    xhr.open('POST', '/')
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.send(JSON.stringify(formData))
   name.value = ''
   mail.value = ''
   phone.value = ''
   message.value = ''
})

