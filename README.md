# Fetch-Rewards-take-home
HTML FOCUS
so this project was made with HTML , CSS , Javascript with an addition too axios, a library that handles HTTP for cliet and node.js which i woild explain its actions later on . I started with the HTML first to provide the UI. so i made a form and you know did the labels with the input and select for the drop down. in each input i put what type i was expecting so the form can expect it whether it was text, email, number, password etc doing this it validates any of the data entered in. the select i kept empty on purpose. the password input i put two, one for the password creation the other to confirm the password. after i placed a error/success message. lastly a submit button. i used some form validation from html that was already built in and easier to accomplish exactly what i needed. so the very first attribute i used was "required", this made it that all fields in the form needed to be completed. "min/max length" attributes  i used for the name input to avoid people from putting a single chracter as the full name. "type" attribute i used for the email which a big part of validating this is by detecting the @. "pattern" attribute uses regex (regular expression) to see the pattern on how you want the number entered. i used this also for the password input, regex to watch the pattern i wanted to be entered 1 uppercase, 1 number, 1 lowercase and 8 characters long. so i found out about a "title" attribute built in html that displays a error pop up in the input box so iused that to tell users if not filled out properly i need at least ("1 uppercase, 1 number, 1 lowercase and 8 characters long") which was pretty cool and saved time.the "name" attribute uses a key value pair system that i used to store the data submitted so i could use it for the api when submit is pressed. 


CSS FOCUS
theres not that much details in this. i looked up some very simple form template design with css. used flexbox to center the form. i used the valid pseudo class on the input boxes and selct thst validates the entries based on the html form. so for valid i used the color green and for invalid i used the color red. 




JAVASCRIPT FOCUS
i started with grabbing the from, passwords, submit button, messasge/ message container in JavaScript, unfortunately theres but so much you can do in html. the form i made an even listener "submit". so when pressing the submit button it works but refresh everytime pressed so used a method called preventDefault() so nothing leaves. so the wat i modeled this was thers two main parts one that validates inputs and the other to send the data to the server. i made a global boolean of false. used this to confirm that if the form filled out was flase the message below would change to "please fill out all fields". i then started working on validating making sure passwords entered in the create and confirm input matched, unfortunately html doesnt do this and can take you only so far. i created a boolean for this and set it to false. so i cant lie now looking back its very simple but clever on how to see if the passwords matched. after researching and didnt really see anything (maybe i didn’t look hard enough) i started thinking in a DS&A mindset. i came to me by simply using an if statement and .value lol. so i simply did if paswword1.value === password2.value then the boolean would be set to true 🤯. yea simple i know but i spent some time on it. imade anoter function to store the data collected. in the function i made an object that with help of the html attribute "name" i was able to see the data that was collected so i can later turn into json. now lets talk about how i used GET with axios to fetch the data  and use in the select element to to show the occupation and states options from the api. so i never actually pulled data and placed it in a select element so this was totally new for me. 
