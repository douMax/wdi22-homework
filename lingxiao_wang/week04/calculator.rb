puts "<=== Welcome to super calculator ===>"

#methods
def addition
  puts "Addition. Enter the first number:"
  first_number = gets.to_i
  puts ">>Enter the second number:"
  second_number = gets.to_i
  puts "#{first_number} + #{second_number} = #{first_number + second_number} "
end

def substraction
  puts "Substraction. Enter the first number:"
  first_number = gets.to_i
  puts ">>Enter the second number:"
  second_number = gets.to_i
  puts "#{first_number} - #{second_number} = #{first_number - second_number} "
end

def multiplication
  puts "multiplication. Enter the first number:"
  first_number = gets.to_i
  puts ">>Enter the second number:"
  second_number = gets.to_i
  puts "#{first_number} * #{second_number} = #{first_number * second_number} "
end

def divide
  puts "Divide. Enter the first number:"
  first_number = gets.to_i
  puts "Enter the second number:"
  second_number = gets.to_i
  if second_number == 0
    puts "can not divide by 0, enter a new number:"
    second_number = gets.to_i
  end
  puts "#{first_number} / #{second_number} = #{first_number / second_number} "
end

def exponents
  puts "Exponets. Please enter the base:"
  base_number = gets.to_i
  puts "Enter the exponents:"
  exponents_number = gets.to_i
  puts "#{base_number} to the power of #{exponents_number} is #{base_number ** exponents_number}"
end

def squareroot
  puts "Square root. Please enter one number:"
  first_number = gets.to_i
  puts "Square root of #{first_number} is #{Math.sqrt(first_number)}"
end

def body_mass_index
  puts "BMI. Enter height(cm):"
  height = gets.to_f / 100
  puts "Enter weight(kg):"
  weight = gets.to_f
  bmi = weight / (height**2)
  puts "BMI is #{bmi}"
  case bmi
  when 0...18.5
    puts "Underweight"
  when 18.5...25.0
    puts "Heathy weight range"
  when 25.0...30.0
    puts "Overweight"
  when 30.0...35.0
    puts "Obesity I"
  when 35.0...40.0
    puts "Obesity II"
  else
    puts "Obesity III"
  end
end



def main_menu
  puts " => Please enter number to select:
  [1] +
  [2] -
  [3] *
  [4] /
  [5] Exponents
  [6] Square root
  [7] Mortgage
  [8] BMI
  [9] Trip
  [0] Quit
  "
  return gets.chomp.upcase
end

selected = main_menu

while selected != "0" && selected != "Q"

  case selected
  when "1"
    addition
  when "2"
    substraction
  when "3"
    multiplication
  when "4"
    divide
  when "5"
    exponents
  when "6"
    squareroot
  when "7"
    puts "Not supported. Come back later"
  when "8"
    body_mass_index
  when "9"
    puts "Not supported. Come back later"
  end

  selected = main_menu

end

puts "Bye bye"
