class Reviewed_game < ActiveRecord::Base
    belongs_to :game

    def self.delete_empty
        self.where(title: nil).destroy_all
    end 
end