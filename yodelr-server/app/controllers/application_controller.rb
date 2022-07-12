require './config/environment'

class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'

  configure do
    set :public_folder, 'public'
  end

  get "/games" do
    games = Game.find(Game.pluck(:id).sample(40))
    games.to_json
  end

  get "/publisher" do
    game = Game.find_all(:publisher)
    game.to_json
  end

  get "/developer" do
    game = Game.find_all(:developer)
    game.to_json
  end

  get "/release" do
    game = Game.find_all(:release_date)
    game.to_json
  end





end
