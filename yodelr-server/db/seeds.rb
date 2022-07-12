require "net/http"
require "uri"
require "json"
require "sqlite3"
require "pry"

puts "Deleting old data..."

Game.destroy_all

game_ids = Array(1..500)

def the_method(arr)
  arr.each_with_index do |games, index|
    uri = URI.parse("https://www.freetogame.com/api/game?id=#{games}")
    response = Net::HTTP.get_response(uri)
    data = JSON.parse(response.body)
    insert(data, index)
  end
end

def insert(data, index)
    pp index
    # pp data["title"]
    title = data["title"]
    thumbnail = data["thumbnail"]
    # genre = data["genre"]
    short_description = data["short_description"]
    # description = data["description"]
    publisher = data["publisher"]
    developer = data["developer"]
    release_date = data["release_date"]
    game_url = data["game_url"]

    Game.create(title: title, thumbnail: thumbnail, short_description: short_description, publisher: publisher, developer: developer, release_date: release_date, game_url: game_url)
    sleep 4
end

the_method(game_ids)


puts "Done seeding..."