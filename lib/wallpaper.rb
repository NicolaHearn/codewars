def wallpaper(l, w, h)
#     p "l: #{l} w: #{w} h: #{h}"
#   num_cols_l = l/0.52
#   p "num_cols: #{num_cols_l}"
#   length_req = h* num_cols_l
#   p "length_req one wall #{length_req}"
#   p "length_req two walls #{length_req*2}"
#   rolls_req_l = (length_req * 2)/10.ceil
#   p "rolls req: #{rolls_req_l}"
    numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve","thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"]
    if l == 0 || w == 0 || h == 0
      req_rolls = 0
    else 
      req_rolls = (((l*2+w*2)/0.52) * h)/10
      req_rolls += (req_rolls * 0.15)
    end
    numbers[req_rolls.ceil]


#   num_cols_w = w/0.52
#   width_req = h * num_cols_w
#   p "width_req one wall #{width_req}"
#   p "width req two walls #{width_req * 2}"
#   rolls_req_w = (width_req *2)/10.ceil
#   p "rolls req: #{rolls_req_w}"

#   total = rolls_req_l + rolls_req_w
#   p "total: #{total}"
end