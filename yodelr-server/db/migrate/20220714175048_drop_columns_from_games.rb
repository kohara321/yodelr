class DropColumnsFromGames < ActiveRecord::Migration
  def change
    remove_column :games, :publisher
    remove_column :games, :developer
    remove_column :games, :release_date
    remove_column :games, :game_url
  end
end
