require "net/http"
require "uri"
require "json"
require "sqlite3"
require "pry"

puts "Deleting old data..."

Game.destroy_all

amino = Array(1..50)

def the_method(arr)
  arr.each_with_index do |games, index|
    uri = URI.parse("https://www.freetogame.com/api/game?id=#{games}")
    response = Net::HTTP.get_response(uri)
    data = JSON.parse(response.body)
    insert(data, index)
  end
end

def insert(data, index)
    # title = data["title"]
    # puts title
    pp index
    # pp data[“data”][“title”]
    # fixed = index + 1
    key = data["id"]
    title = data["title"]
    thumbnail = data["thumbnail"]
    genre = data["genre"]
    short_description = data["short_description"]
    description = data["description"]
    publisher = data["publisher"]
    developer = data["developer"]
    release_date = data["release_date"]
    game_url = data["game_url"]

    Game.create(key: key, title: title, thumbnail: thumbnail, short_description: short_description, description: description, publisher: publisher, developer: developer, release_date: release_date, game_url: game_url)
    
    # db = SQLite3::Database.open “table”
    # db.execute “INSERT INTO artworks VALUES (#{index}, #{key}, ‘#{title}‘, ‘#{artist}‘, ‘#{img_link}’)”
end

the_method(amino)

# def games
#     response = RestClient.get("https://www.freetogame.com/api/games")
#     json = JSON.parse response

#     if !json.nil?
#         json["data"].map do |game| 
#             Game.create(title: "#{game["title"]}")
#         end
#     else
#         puts "Error seeding"
#     end
# end





puts "Done seeding..."