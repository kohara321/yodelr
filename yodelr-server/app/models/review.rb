class Review < ActiveRecord::Base
    belongs_to :reviewed_game
    belongs_to :game

    def self.delete_empty
        self.where(review: nil).destroy_all
    end
end