user = User.find_by(email: 'eric')
board = Board.find_by(title: "Click here to get started!") || user.boards.create!({title: "Click here to get started!"})
user.boards.where("id != ?", board.id).destroy_all

board.lists.destroy_all
list_welcome = board.lists.create!({title: "Welcome to Treyo!", ord: 1.0})
list_list = board.lists.create!({title: "This is a list", ord: 2.0})
list_cards = board.lists.create!({title: "Cards", ord: 3.0})

list_welcome.cards.create!({title: "Treyo is a task organization app based on Trello", description: nil, ord: 1.0})
list_welcome.cards.create!({title: "The intuitive, flexible interface lets you add, sort, and delete tasks on the fly", description: nil, ord: 2.0})
list_list.cards.create!({title: "Sort lists by dragging and dropping", description: nil, ord: 1.0})
list_list.cards.create!({title: "Double click a list's title to edit it", description: nil, ord: 2.0})
list_list.cards.create!({title: "Add a list by clicking the button over to the right", description: nil, ord: 3.0})
list_list.cards.create!({title: "To delete a list, click the dropdown button in the upper right corner", description: nil, ord: 4.0})
list_cards.cards.create!({title: "Each list consists of cards", description: nil, ord: 1.0})
list_cards.cards.create!({title: "Cards can be dragged and dropped across lists", description: nil, ord: 2.0})
list_cards.cards.create!({title: "You can edit a card's title or delete it altogether by clicking the pencil", description: nil, ord: 3.0})
list_cards.cards.create!({title: "Try adding a card below!", description: nil, ord: 4.0})
