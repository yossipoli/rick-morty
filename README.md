# Rick & Morty Characters App

## Prerequisites
* [React](https://reactjs.org/)
* [Material-UI](https://mui.com/)
* [Rick & Morty API](https://rickandmortyapi.com/)
* [GitHub](https://github.com)

## Requirements
You will build a react.js app that will display a list of Rick and Morty characters.
The characters will be displayed in a table.
The list of characters will be taken from https://rickandmortyapi.com/


## Accepted Criteria
* The data should be displayed in a table.
* Each row should contain the following information:
  * Image
  * Character Name
  * Origin
  * Status
  * Species
  * Gender

* On initial load, the app should load the first 20 characters from the API.
* Implement A pagination mechanism that will load the next 20 characters when the user clicks the "Next" button.

* Implement a search mechanism that will search for characters by name. Make sure the search is implemented when the user stops writing into the input field(debounce).
* Implement a filter mechanism that will filter the characters by gender.
* Implement a filter mechanism that will filter the characters by status.

* When clicking on a character row, a modal should be opened with a picture of the character, the first episode the character appeared in and the last episode the character appeared in.

* If the search query is not found, a message should be displayed.

* Share the GitHub link of your project, try to work with small commits and not push to the entire app a single commit.


## Bonus (Optional)
* Add a second view (route, navigation) where you will display a chart where the x-axis is the episode name, and the y-axis is the number of characters featured in the episode (you can use a chart library of your choice).
* Be creative with more charts and data visualization.
* make the app responsive for mobile.
* build an alternative view to table view, changeable by toggle so that cards will replace the table


## Tips / Notes
* <b>Read the API docs in detail. You will need to know how to use the API in detail to complete all the tasks.</b>
* <b>The search, sorting and filteing functionality should be done using the api and not localy!</b>
* <b>The wireframe (gifs and images examples) is just a guideline, be creative with your design.</b>
* <b>Don't waste your time on the bonus features if the core features aren't working.</b> Get the app working with the core features. The bonus tasks are optional.
