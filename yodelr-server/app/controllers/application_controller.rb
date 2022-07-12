require './config/environment'

class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'

  configure do
    set :public_folder, 'public'
  end

  get "/games" do
    games = Game.all.limit(5)
    games.to_json
  end

end
