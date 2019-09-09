
$(document).ready(function () {
    $('.submit'.click(function (event) {
        event.preventDefault()
        console.log('clicked button')

        var title = $('.title').val()
        var fullname =$('.fullname').val()
        var email = $('.email').val() 
        var sendmessage = $('.sendmessage').val() 
        var statusElm = $('.status')
        statusElm.empty()         
        
        if(email.lenght > 6 && email.includes('@') && email.includes('.')) {
            statusElm.append('Email is valid')
        }else {
            statusElm.append('Email is not valid')
        }

        if(Fullname.lenght >4) {
            statusElm.append('Fullname is valid')
        }else {
            statusElm.append('Fullname is not valid')

        if(Message.lenght >20) {
            statusElm.append('message is valid')
        }else {
            statusElm.append('Message is not valid')
        }  
    })                
})
    
    
    