# == Schema Information
#
# Table name: movies
#
#  id           :integer          not null, primary key
#  title        :text
#  release_date :date
#  description  :text
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Movie < ApplicationRecord
  has_and_belongs_to_many :directors
  has_and_belongs_to_many :genres
end
