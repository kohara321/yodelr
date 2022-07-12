class Game < ActiveRecord::Base
    has_many :reviews
    has_many :users, through: :reviews

    def self.delete_empty
        self.where(title: nil).destroy_all
    end
end