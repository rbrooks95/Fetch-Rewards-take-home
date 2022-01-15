# Fetch-Rewards-take-home
# HTML FOCUS

This project consists of HTML , CSS , Javascript and the library axios to handle api calls. 

I made a form with the following fields
- first name
- last name
- phone number
- select
 I kept this empty because .... i will explain in Javascript section
- password 
- confirm password

For all fields need to filled i used a built in form attribute called required which made it possible that a user needed to fill in all spaces
For validation of password i used regex to make sure 1 of each (uppercase, lowercase, numer) was needed
 


# CSS FOCUS

theres not that much details in this. i looked up some very simple form template design with css. used flexbox to center the form. i used the valid pseudo class on the input boxes and selct thst validates the entries based on the html form. so for valid i used the color green and for invalid i used the color red. 




# JAVASCRIPT FOCUS




- select
 I used axios which  is easier to use  especially with less syntax written. In Javascript I created the option element and the data looped from the api I was then able to set it to the option. I did the same exact process with occupation. So now this feature presents choices of states and occupations to choose from

- password 
I started thinking in a DS&A mindset. It came to me by simply using an if statement and .value lol. So I did if password1.value === password2.value then the boolean would be set to true. 

- submit form
I used fetch this time to POST. The function I created to collect the data, i used that to POST to the api with JSON.stringify() to turn the data into json. in addition to the html required I created a if statement to make sure the form became filled and the passwords match to send the data.




















i started with grabbing the from, passwords, submit button, messasge/ message container in JavaScript, unfortunately theres but so much you can do in html. the form i made an even listener for "submit". so when pressing the submit button it works but refresh everytime pressed so used a method called preventDefault() so nothing leaves. so the way i modeled this was theres two main parts, one that validates inputs and the other to send the data to the server. i made a global boolean of false. used this to confirm that if the form filled out was false the message below would change to "please fill out all fields". I then started working on validating making sure passwords entered in the create and confirm input matched, unfortunately html doesnt do this and can take you only so far. i created a boolean for this and set it to false. so i cant lie now looking back its very simple but clever on how to see if the passwords matched. after researching and didnt really see anything (maybe i didn’t look hard enough) i started thinking in a DS&A mindset. it came to me by simply using an if statement and .value lol. so i simply did if paswword1.value === password2.value then the boolean would be set to true 🤯. yea simple i know but i spent some time on it. i made another function to store the data collected. in the function i made an object that with help of the html attribute "name" i was able to see the data that was collected so i can later turn into json. now lets talk about how i used GET with axios to fetch the data  and use in the select element to to show the occupation and states options from the api. so i never actually pulled data and placed it in a select element so this was totally new for me. i used axios which i became more comfy using more than built in fetch and in my opinion its easier to use  especially with less syntax being written. so if you know the select drop bar has a child attribute called option where you manually place all the options to choose from i tried to loop the data from the api but it wouldnt go for some reason so i went back to my html left the select blank and came back to my javascipt and created a element which was "option" and the data being looped from the api i was then able to set it to that i did the same exact process with occupation. so now that i think about it i never really submitted data to an api only pulled, so i went back to the drawing board and used fetch this time to POST.so with the function i created to collect the data, i used that to POST to the api with JSON.stringify() to turn the data into json. lastly i created a if staement to make sure the form was filled and the passwords match to send the data

heres the link, i made it live using netlify
https://vibrant-hypatia-86dcaa.netlify.app


PS i included a number input, i was so in the zone i didnt check the requirements and added that because when i thought of a submit form i thought about how some of them ask for your number so sorry about that lol. 
