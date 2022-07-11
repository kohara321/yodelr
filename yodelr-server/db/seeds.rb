require "net/http"
require "uri"
require "json"
require "sqlite3"

puts "Deleting old data..."

Game.destroy_all

amino = Array(1..5)

def the_method(arr)
  arr.each_with_index do |games, index|
    uri = URI.parse("https://www.freetogame.com/api/game?id=#{games}")
    response = Net::HTTP.get_response(uri)
    data = JSON.parse(response.body)
    insert(data, index)
  end
end

def insert(data, index)
  if data["status"]
    puts "Status 404"
  else
    # title = data[“data”][“title”]
    # puts title
    pp index
    # pp data[“data”][“title”]
    # fixed = index + 1
    key = data["data"]["id"]
    title = data["data"]["title"]
    thumbnail = data["data"]["thumbnail"]
    genre = data["data"]["genre"]
    short_description = data["data"]["short_description"]
    description = data["data"]["description"]
    publisher = data["data"]["publisher"]
    developer = data["data"]["developer"]
    release_date = data["data"]["release_date"]
    game_url = data["data"]["game_url"]

    # data["data"].map do |game| 
    #     Artwork.create(key: id, title: title, thumbnail: thumbnail, short_description: short_description, description: description, publisher: publisher, developer: developer, release_date: release_date, game_url: game_url)
    # end

    Artwork.create(key: key, title: title, thumbnail: thumbnail, short_description: short_description, description: description, publisher: publisher, developer: developer, release_date: release_date, game_url: game_url)
    
    # db = SQLite3::Database.open “table”
    # db.execute “INSERT INTO artworks VALUES (#{index}, #{key}, ‘#{title}‘, ‘#{artist}‘, ‘#{img_link}’)”
  end
end
the_method(amino)

puts "Done seeding..."