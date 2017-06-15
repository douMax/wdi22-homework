class CreateMovies < ActiveRecord::Migration[5.0]
  def change
    create_table :movies do |t|
      t.text :title
      t.date :release_date
      t.text :description

      t.timestamps
    end
  end
end
