// function removeSpace(text){
//     return text.replace(' ', '')
// }
// function reverseText(text){
//     return text.split("").reverse().join("");
// }
// function updateVowels(text){
//     let vocal = ['a','i','u','e','o']
//     var result = ''
//     for(var i = 0; i < text.length; i++){
//         if(vocal.includes(text[i])){
//             result += String.fromCharCode(text[i].charCodeAt() + 1)
//         } else{
//             result += text[i]
//         }
//     }
//     return result
// }

// var password = "dimitri w"
// var noSpaces = removeSpace(password)
// var reversed = reverseText(password)
// var encyptedPassword = updateVowels(password)

// console.log(encyptedPassword);

$(document).ready(function(){
    // console.log($('#title'))
    // console.log($('.page-box'))
    // $('#title').click(function(){
    //     alert('Saya click page title')
    // })

    $('#submitButton').click(function(e){
        e.preventDefault()
        let username = $('#username').val()
        let username = $('input[]').val()
        console.log(username)
    })
})