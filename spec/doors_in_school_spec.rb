require 'doors_in_school'

describe "Basic tests" do
    it "returns the number of doors that are open" do
    expect(doors(1)).to eq 1
    expect(doors(5)).to eq 2
    expect(doors(10)).to eq 3
    expect(doors(100)).to eq 10
    end
  end