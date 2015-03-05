# write some jbuilder to return some json about a board
# it should include the board
#  - its lists
#    - the cards for each list

json.extract! @board, :id, :title, :user_id, :updated_at, :created_at

json.lists @board.lists do |list|
  json.extract! list, :id, :title, :board_id, :ord, :updated_at, :created_at

  json.cards list.cards do |card|
    json.extract! card, :id, :title, :list_id, :ord, :updated_at, :created_at
  end
end
