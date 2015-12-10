require 'fileutils'

students = ['yang','jc','jb','locky','lj','md','luke']

students.each do |student|
  folder_name = student #.gsub(' ','_').downcase
  FileUtils.mkdir folder_name
  FileUtils.chdir folder_name do
    FileUtils.touch '.gitkeep'
  end
end