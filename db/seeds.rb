# Delete user if it already exists
user = User.find_by(email: 'eric')
user.destroy if user

Board.create!([
  {title: "Click here to get started!", user_id: 3}
])
Card.create!([
  {title: "The intuitive, flexible interface lets you add, sort, and delete tasks on the fly", list_id: 37, description: nil, ord: 0.0},
  {title: "Treyo is a task organization app based on Trello", list_id: 37, description: nil, ord: 0.0},
  {title: "Each list consists of cards", list_id: 17, description: nil, ord: 1.0},
  {title: "Cards can be dragged and dropped across lists", list_id: 17, description: nil, ord: 2.0},
  {title: "Add a list by clicking the button over to the right", list_id: 16, description: nil, ord: 2.0},
  {title: "You can edit a card's title or delete it altogether by clicking the pencil", list_id: 17, description: nil, ord: 3.0},
  {title: "Sort lists by dragging and dropping", list_id: 16, description: nil, ord: 3.0},
  {title: "Try adding a card below!", list_id: 17, description: nil, ord: 4.0},
  {title: "Double click a list's title to edit it", list_id: 16, description: nil, ord: 4.0},
  {title: "To delete a list, click the dropdown button in the upper right corner", list_id: 16, description: nil, ord: 5.0}
])
List.create!([
  {title: "Welcome to Treyo!", board_id: 8, ord: 1.0},
  {title: "This is a list", board_id: 8, ord: 2.0},
  {title: "Cards", board_id: 8, ord: 3.0}
])
User.create!([
  {email: "eric", password_digest: "$2a$10$1.B7XhRhJ0L9N64KgMPJ7eo/R1.f2nHCmluel8KnN5PKlMRsuLIO2", session_token: "aA4Hq3QW0rZBw346BtDYWQ"}
])
