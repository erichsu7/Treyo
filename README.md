# Treyo

Treyo clones the popular drag-and-drop task organization app, Trello. Users create boards for their projects then divide them up into lists and cards. Since goals and priorities are always changing, lists and cards can be reorganized dynamically by dragging and dropping across the screen. They can also be edited and deleted at one or two clicks of a button.

[Take a look at it here!](http://treyo.erichsu.io)

## Technological Highlights

### Overview

Treyo is a one-page **Backbone** app consuming a **Rails** API. The ubiquitous drag-and-drop functionality relies heavily on **jQuery UI Sortable**.

### Back-end

A RESTful Rails API handles user authentication and the CRUD process for boards, lists, and cards.

### Front-end

The entire app is displayed on one page by incorporating composite views into Backbone. A `View#board_show` contains `View#list_show` elements which further contain `View#card_show` elements. Lists and cards can be edited and deleted on the fly by adding form views. Styling is handled with CSS and a hint of Bootstrap.

### Object Oriented Design

The front-end preserves Rails associations between boards, lists, and cards by overwriting Backbone's `Model#parse` function to assign the JSON response's collection (represented as an array) to the Backbone model.

### Drag-and-drop

jQuery UI's Sortable library facilitates the dragging and dropping of lists and cards. When a list or card is sorted, the new order of elements is persisted via an AJAX request.
