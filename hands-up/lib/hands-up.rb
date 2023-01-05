def get_positions(s)
  # p1 = 0
  # p2 = 0
  # p3 = 1

  # pattern_range = (0..27).to_a

  # pattern_range.each do |num|
  #   if s == 0
  #     p1 = 0
  #     p2 = 0
  #     p3 = 0
  #   end

  #   if s % 3 == 0
  #     p1 = 0
  #   elsif (s + 2) % 3 == 0
  #     p1 = 1
  #   elsif (s + 1) % 3 == 0
  #     p1 = 2
  #   end

  #   if pattern_range[7..9].include?(num) && (s + num) % 9 == 0 
  #     p2 = 0 
  #   elsif pattern_range[4..6].include?(num) && (s + num) % 9 == 0
  #     p2 = 1
  #   elsif pattern_range[1..3].include?(num) && (s + num) % 9 == 0
  #     p2 = 2
  #   end

  #   if pattern_range[19..27].include?(num) && (s + num) % 27 == 0
  #     p3 = 0
  #   elsif pattern_range[10..18].include?(num) && (s + num) % 27 == 0
  #     p3 = 1
  #   elsif pattern_range[1..9].include?(num) && (s + num) % 27 == 0
  #     p3 = 2
  #   end
  # end
  
  [s%3, s%9, s%27]

end
