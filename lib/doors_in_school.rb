def doors(n)
    # Enjoy
  doors = Hash.new("doors")
  range = 1..n
  doors_open = 0
  
  range.each do |num|
    doors[num] = false 
  end

  range.each do |num|
    doors.each {|door, state| 
        if door % num == 0 
          doors[door] = !doors[door]
        else
          next
        end
        }
        doors_open = doors.select {|door, state| state == true}.size
    end
    return doors_open
end
