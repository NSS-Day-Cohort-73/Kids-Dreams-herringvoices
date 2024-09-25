# Events and Debugging Assessment

Time to assess how well you have learned to use the debugging tools in Chrome Dev Tools, and writing click event listeners. This application is to show kids with illnesses and the memories the would like to make. Celebrities sign up to help kids make memories.

> 🧨 Make sure you answer the vocabulary and understanding questions at the end of this document before notifying your coaches that you are done with the project

## Event Listeners to Create

1. When the kid name is clicked, it should display their wish.
1. When the celebrity name is clicked, it should display their sport.
1. The pairings list should should contain the pairing in the following format.
    ```html
    {child name} will be making memories with {celebrity name}, a {celebrity sport} star, by {child wish}
    ```

Below is an animation showing how the application should look when complete and how the event listeners should work.

<img src="./images/debugging-events-assessment.gif" width="700px">

## Setup

Your instruction team will provide a link for you to create your assessment repository. Once your repo is created, clone it to your machine.

1. Make sure you are in your `workspace` directory.
1. `git clone {github repo SSH string}`.
1. `cd` into the directory it creates.
1. `code .` to open the project code.
1. Use the `serve` command to start the web server.
1. Open the URL provided in Chrome.

Make sure your Developer Tools are open at all times while working on this project. Use the messages provided in the Console to determine what code needs to be fixed or implemented, and use breakpoints in the Sources tab to step through your code as you debug.

## Vocabulary and Understanding

Before you click the "Complete Assessment" button on the Learning Platform, add your answers below each question and make a commit.

The kids module contains the code that handles the click event. An event listener is added to the document, which listens for any click that occurs on the page. When the user clicks, the browser creates an object called `event` that holds the state of the clicked element and other details about the interaction. This event object is passed into the function as an argument. Inside the function, the state of the clicked element’s `dataset` property is stored in a variable called `targetData`, making it easier to access the current state of the element’s data attributes. The program then checks if the `targetData` contains a state called "type" and whether its value is equal to "child". If this condition is true, a window alert is generated, displaying a message that incorporates the name and wish state of the clicked element. If `targetData.type` is not equal to "child", the program does not execute any additional logic, though the event listener still records the click event.


2. In the **Pairings** module, why must the `findCelebrityMatch()` function be invoked inside the `for..of` loop that iterates the kids array?
   > The `findCelebrityMatch()` function must be included inside the `for...of` loop because the loop processes each child individually from the `kids` array. On each loop iteration, the current child object is assigned to the `kid` variable. The `findCelebrityMatch()` function is then called, passing in the current `kid` object and the `celebrities` array as arguments. The function iterates through the `celebrities` array, looping through each object, assigning it to the variable `item`, and comparing each `item` object to the `kid` object passed through as an argument to find the celebrity whose `id` matches the `celebrityId` of the current `kid`. By placing the `findCelebrityMatch()` inside the loop, it ensures that each child is processed one object at a time, with a unique celebrity match being found and returned on each iteration. This matched celebrity, assigned to the `kidsStar` variable, is used to generate an appropriate HTML message for each child and celebrity pairing. If `findCelebrityMatch()` were not called within the loop, the code would not be able to generate these individual pairings, since each invocation relies on the specific child being passed in during each loop iteration.

3. In the **CelebrityList** module, can you describe how the name of the sport that the celebrity plays can be displayed in the window alert text?
   > Within the `Celebrities()` function, there is a `for...of` loop that iterates through the `celebrities` array. It starts at the object at index [0], assigns it to the variable `celebrity`, and runs its code, wherein it creates a string containing html that will eventually be added to the DOM. As it does, it accesses the data from the current `celebrity` and assigns state to the list item it is generating based on the data contained within the `celebrities` array. One aspect of state added is the `data-sport` field, whose value is set to the value of the `sport` key of the current `celebrity` object. This happens for each object in the `celebrity` array, ensuring that the proper state is included in the DOM once the `Celebrities()` function is invoked in `main`. When the click event happens, all the information stored in the clicked element is assigned to the variable `event` and passed through as an argument of the function tied to that event listener. This includes the state generated in the `Celebrities()` function, which includes the information on the sport the celebrity plays. The click event function then stores all the state generated in the `Celebrity()` function in the `targetData` variable and uses dot notation to access the specific state attributes it needs, such as `targetData.sport`. It then creates a `window.alert` that displays the information appropriately.

4. Can you describe, in detail, the algorithm that is in the `main` module?
   > The `main` module begins by importing the `Pairings()` `Celebrities()` and `Kids()` functions from Pairings.js, CelebrityList.js, and Kids.js respectively. 
   >It then assigns the state of the element with an id of `container` to the variable `mainContainer`.
   >It then assigns a string containing HTML formatted elements to the variable `applicationHTML` and assigns that string to the innerHTML of the `mainContainer` variable mentioned previously.
   >The HTML string contains a header, an article containing two sections with secondary headers with the text "Kids" and "Celebrities" respectively, and another article containing another secondary header with the tex "Pairings."
   >Beneath the "Kids" and "Celebrities" headers, functions are invoked (`Kids()` and `Celebrities()`) that generate more HTML based on data in database.js. These functions both work similarly. They start by declaring a variable called `html` and setting its value equal to "<ol>" to create an ordered list. Then then contain `for...of` loops, which iterate through the `kids` and `celebrities` arrays respectively. The loops go object by object through these arrays, temporarily assigning them a variable of either `kid` or `celebrity` as they run the code of the loop before going to the next object in the array and doing the same. These arrays contain data on kids and celebrities. That data is used to generate list items containing the name of the current `kid` or `celebrity` object the loop is on in its iteration process. It also generates state within the list item that click events use to display more information to the user within an alert message. Each iteration adds the list item's html to the `html` variable before looping through to the next item in the array. Once the loop is done iterating, the closing tag for the ordered list is added to the array and the function returns the entirety of the `html` string, which places the entire ordered list at the place it was invoked within the `main` module. 
   >Beneath the heading with the text "Pairings" the `Pairings()` function is invoked. This function also iterates using a `for...of` loop as described previously(looping through the `kids` array), but differs in that it runs a function (`findCelebrityMatch()`) that iterates through an array within the original `for...of` loop. This function passes the current `kid` object and the `celebrities` array as arguments. It then uses the `find()` function to iterate through the `celebrities` array and find the specific celebrity whose id is associated with the `celebrityId` of the current `kid` object. It returns the `celebrity` object for whom that is true and returns them. The `Pairings()` function then stores that return in the `kidStar` variable, which is used along with the data in the current `kid` object, to generate the string of HTML formatted elements returned by the `Pairings()` function to update the DOM in the `main` module.
