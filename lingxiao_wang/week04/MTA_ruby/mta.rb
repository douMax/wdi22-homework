require "pry"

$mta = {
  "n" => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
  "6" => ["8th", "6th", "Union Square", "3rd", "1st"],
  "l" => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"],
  "interchange" => "Union Square"
}

def trip_single_line line_name, on_stop, off_stop

  line = $mta[line_name]
  on = line.index on_stop
  off = line.index off_stop

  if on < off
    stops = line[on+1..off]
  else
    stops = line[off...on].reverse
  end
  return stops
end


def plan_trip on_line, on_stop, off_line, off_stop

  case on_line
  when off_line
    stops = trip_single_line on_line, on_stop, off_stop
    puts"Travel through #{stops.join ", "}, #{stops.length} stops in total"
  else  # interchange needed
    inter = $mta["interchange"]
    stops1 = trip_single_line on_line, on_stop, inter
    stops2 = trip_single_line off_line, inter, off_stop
    puts "Travel through #{stops1.join ", "};"
    puts "Change at #{inter};"
    puts "Continue through #{stops2.join ", "};"
    puts "#{stops1.length + stops2.length} stops in total."
  end

end

# binding.pry

puts "****** Welcome to MTA trip planner ******"
puts "#{$mta}"
puts "Please enter your starting line:"
on_line = gets.chomp.downcase
puts "Please enter your starting stop:"
on_stop = gets.chomp
puts "Please enter your ending line:"
off_line = gets.chomp.downcase
puts "Please enter your ending stop:"
off_stop = gets.chomp



plan_trip on_line, on_stop, off_line, off_stop


# test:
# plan_trip "n","Times Square", "l","Grand Central"
# from Line N, Times Square, to Line L, Grand Central
# from Line 6, 1st, to Line L, Astor Place
# from Line L, 33rd, to Line 6,
