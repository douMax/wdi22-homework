# == Schema Information
#
# Table name: directors
#
#  id          :integer          not null, primary key
#  name        :text
#  dob         :date
#  nationality :text
#  bio         :text
#  image       :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Director < ApplicationRecord
  has_and_belongs_to_many :movies
end
