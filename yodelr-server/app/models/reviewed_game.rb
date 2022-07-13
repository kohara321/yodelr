class Reviewed_game < ActiveRecord::Base
    def self.delete_empty
        self.where(title: nil).destroy_all
    end 
end