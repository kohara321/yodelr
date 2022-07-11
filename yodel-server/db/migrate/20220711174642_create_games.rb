class CreateGames < ActiveRecord::Migration[6.1]
  def change
      create_table :games do |t|
        t.integer :key,
        t.string :title,
        t.string :thumbnail,
        t.string :genre,
        t.string :short_description,
        t.string :description,
        t.string :publisher,
        t.string :developer,
        t.datetime :release_date,
        t.string :game_url
    end
  end
end
