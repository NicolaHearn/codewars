require 'hands-up'

describe 'hands-up' do
  it "returns the pattern that corresponds to the number given" do
    expect(get_positions(18)).to eq [0, 0, 2]
    # expect(get_positions(54)).to eq [0, 0, 0]
    # expect(get_positions(98)).to eq [2, 2, 1]
    # expect(get_positions(3)).to eq [0, 1, 0]
  end
end