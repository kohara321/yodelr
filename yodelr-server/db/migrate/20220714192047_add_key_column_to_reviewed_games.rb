class AddKeyColumnToReviewedGames < ActiveRecord::Migration
  def change
    add_column :reviewed_games, :game_id, :integer
  end
end
