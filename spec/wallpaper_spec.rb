require 'wallpaper'

RSpec.describe "wallpaper" do
  it "calculates the amount of wallpaper needed for a room" do
  expect(wallpaper(6.3, 4.5, 3.29)).to eq("sixteen"), "wallpaper(6.3, 4.5, 3.29)"
  expect(wallpaper(7.8, 2.9, 3.29)).to eq("sixteen"), "wallpaper(7.8, 2.9, 3.29)"
  expect(wallpaper(6.3, 5.8, 3.13)).to eq("seventeen"), "wallpaper(6.3, 5.8, 3.13)"
  expect(wallpaper(6.1, 6.7, 2.81)).to eq("sixteen"), "wallpaper(6.1, 6.7, 2.81)"
  expect(wallpaper(0.0, 5.4, 3.33)).to eq("zero"), "wallpaper(0.0, 5.4, 3.33)"
  end
end