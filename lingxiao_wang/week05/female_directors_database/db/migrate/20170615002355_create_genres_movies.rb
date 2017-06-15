class CreateGenresMovies < ActiveRecord::Migration[5.0]
  def change
    create_table :genres_movies do |t|
      t.integer :genre_id
      t.integer :movie_id
    end
  end
end
