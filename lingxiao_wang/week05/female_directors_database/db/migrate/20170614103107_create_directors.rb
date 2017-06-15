class CreateDirectors < ActiveRecord::Migration[5.0]
  def change
    create_table :directors do |t|
      t.text :name
      t.date :dob
      t.text :nationality
      t.text :bio
      t.text :image

      t.timestamps
    end
  end
end
