class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.string :title
      t.string :thumbnail
      t.string :short_description
      t.string :publisher
      t.string :developer
      t.datetime :release_date
      t.string :game_url
    end
  end
end
