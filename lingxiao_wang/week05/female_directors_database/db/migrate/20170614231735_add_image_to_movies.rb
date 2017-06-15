class AddImageToMovies < ActiveRecord::Migration[5.0]
  def change
    add_column :movies, :image, :text
  end
end
