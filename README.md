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
I used fetch this time to POST. The function I created to collect the data, I used that to POST to the api with JSON.stringify() to turn the data into json. In addition to the html required I created a if statement to make sure the form became filled and the passwords match to send the data.








heres the link, i made it live using netlify
https://vibrant-hypatia-86dcaa.netlify.app


PS i included a number input, i was so in the zone i didnt check the requirements and added that because when i thought of a submit form i thought about how some of them ask for your number so sorry about that lol. 
