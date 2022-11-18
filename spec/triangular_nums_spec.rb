require 'triangular_nums'

describe "Basic Tests" do
    it "Static Ones" do
      expect(sum_triangular_numbers(6)).to eq 56
      expect(sum_triangular_numbers(34)).to eq(7140)
      expect(sum_triangular_numbers(-291)).to eq(0)
      expect(sum_triangular_numbers(943)).to eq(140205240)
      expect(sum_triangular_numbers(-971)).to eq(0)
    end
  end