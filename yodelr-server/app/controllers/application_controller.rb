require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
  end

  get "/" do
    erb :welcome
  end

  get "/games" do
    games = Game.all 
    game.to_json
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
