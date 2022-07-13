require './config/environment'
require 'pry'
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
    game = Game.order(:publisher)
    game.to_json
  end

  get "/developer" do
    game = Game.order(:developer)
    game.to_json
  end

  get "/release" do
    game = Game.order(:release_date)
    game.to_json
  end

  get "/reviewed" do
    reviewed_games = Reviewed_game.all 
    reviewed_games.to_json
  end

  post "/reviewed" do
    reviewed_games = Reviewed_game.create(
      title: params[:title],
      thumbnail: params[:thumbnail],
      short_description: params[:short_description]
    )
    reviewed_games.to_json
  end

  get "/reviews" do
    review = Review.all
    review.to_json
  end

  post "/reviews" do
    reviews = Review.create(
      game_id: params[:id]
    )
    reviews.to_json
  end

  patch "/reviews" do
    review = Review.find(params[:id])
    review.update(review: params[:review])
    review.to_json
  end

end
