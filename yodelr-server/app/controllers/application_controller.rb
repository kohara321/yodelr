require './config/environment'
require 'pry'
class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'

  configure do
    set :public_folder, 'public'
  end

  get "/games" do
    games = Game.find(Game.pluck(:id).sample(16))
    games.to_json
  end

  get "/games/:id" do
    game = Game.find(params[:id])
    game.to_json
  end

  get "/reviewed" do
    reviewed_games = Reviewed_game.all 
    reviewed_games.to_json(include: { game: { include: :reviews } })
  end

  post "/reviewed" do
    reviewed_games = Reviewed_game.create(
      title: params[:title],
      thumbnail: params[:thumbnail],
      short_description: params[:short_description],
      game_id: params[:game_id]
    )
    reviewed_games.to_json
  end

  get "/reviewed/:id" do
    reviewed_games = Reviewed_game.find(params[:id])
    reviewed_games.to_json 
  end

  delete "/reviewed/:id" do
    reviewed_games = Reviewed_game.find(params[:id])
    reviewed_games.destroy 
    reviewed_games.to_json 
  end

  get "/reviews" do
    review = Review.all
    review.to_json
  end

  get "/reviews/:id" do
    review - Review.find(params[:id])
    review.to_json
  end

  post "/reviews" do
    reviews = Review.create(
      game_id: params[:game_id],
      review: params[:review]
    )
    reviews.to_json
  end

  patch "/reviews/:id" do
    review = Review.find(params[:id])
    review.update(review: params[:review]).to_json
  end

  delete "/reviews/:id" do
    review = Review.find(params[:id])
    review.destroy
    review.to_json
  end

end
