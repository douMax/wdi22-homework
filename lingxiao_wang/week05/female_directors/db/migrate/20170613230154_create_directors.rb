class CreateDirectors < ActiveRecord::Migration[5.0]
  def change
    create_table :directors do |t|
      t.text :name
      t.text :nationality
      t.date :dob
      t.text :bio
      t.text :image

      t.timestamps null:false
    end
  end
end
