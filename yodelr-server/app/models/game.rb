class Game < ActiveRecord::Base
    has_many :reviews

    def self.delete_empty
        self.where(title: nil).destroy_all
    end
end