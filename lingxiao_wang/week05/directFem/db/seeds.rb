# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


puts "planting......"
puts "-" * 50

Director.destroy_all
d1 = Director.create name: "Kathryn Bigelow"
d2 = Director.create name: "Mira Nair"
d3 = Director.create name: "Amma Asante"
d4 = Director.create name: "Susanne Bier"
d5 = Director.create name: "Niki Caro"

puts Director.all.pluck :name
puts "#{Director.all.length} directors planted...."
puts "-" * 50

Movie.destroy_all
m1 = Movie.create title: "The Hurt Locker"
m2 = Movie.create title: "Zero Dark Thirty"
m3 = Movie.create title: "Queen of Katwe"
m4 = Movie.create title: "A United Kingdom"
m5 = Movie.create title: "In a Better World"
m6 = Movie.create title: "The Zookeeper's Wife"
m7 = Movie.create title: "Whale Rider"

puts Movie.all.pluck :title
puts "#{Movie.all.length} movies planted...."
puts "-" * 50

Genre.destroy_all
g1 = Genre.create name: "Drama"
g2 = Genre.create name: "Action"
g3 = Genre.create name: "Thriller"
g4 = Genre.create name: "Biography"


g1.movies << m3 << m5 << m7
g2.movies << m1 << m2
g3.movies << m2
g4.movies << m3 << m4 << m6


d1.movies << m1 << m2
d2.movies << m3
d3.movies << m4
d4.movies << m5
d5.movies << m6 << m7

puts "Movies assigned with Directors"
puts "-" * 50

puts "Completedz!!!"
