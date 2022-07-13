class CreateReviewedGames < ActiveRecord::Migration
  def change
    create_table :reviewed_games do |t|
      t.string :title
      t.string :thumbnail
      t.string :short_description
    end
  end
end
