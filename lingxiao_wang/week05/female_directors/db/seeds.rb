# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "planting seeds...."

Director.destroy_all

d1 = Director.create({
    name: "Kathryn Bigelow",
    nationality: "American",
    dob: "1951/11/27",
    bio: "",
    image: "http://www.awardsdaily.com/wp-content/uploads/2015/01/kathryn-bigelow-e1383061637534.jpg"
})

d2 = Director.create({
    name: "Amma Asante",
    nationality: "British",
    dob: "1969/09/13",
    bio: "",
    image: "https://enewsgh.com/wp-content/uploads/2016/09/amma-asante.jpg"
})

d3 = Director.create({
    name: "Mira Nair",
    nationality: "Indian",
    dob: "1957/10/15",
    bio: "",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/MN_main.jpg/800px-MN_main.jpg"
})




puts "done"
