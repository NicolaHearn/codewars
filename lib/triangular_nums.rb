def sum_triangular_numbers(n)
    triangular_sum = n*(n+1)/2
    sum = 0
    range = 1..n
    range.each do |x|  
      sum += (x*(x+1)/2)
    end
    return sum
end