require 'rubygems'
require 'bundler'
begin
  Bundler.setup(:default, :development)
rescue Bundler::BundlerError => e
  $stderr.puts e.message
  $stderr.puts "Run `bundle install` to install missing gems"
  exit e.status_code
end
require 'rake'

VERSION = "1.2.2"
BOOTSTRAP_CSS = "bootstrap-#{VERSION}.css"
BOOTSTRAP_MIN_CSS = "bootstrap-#{VERSION}.min.css"
BOOTSTRAP_LATEST = "bootstrap-latest.min.css"

SASS_COMMAND = "sass --load-path lib --style"

task BOOTSTRAP_CSS do |target|
  sh "#{SASS_COMMAND} expanded lib/bootstrap.scss:#{target}"
  css = IO.read(target.to_s)
  css.gsub!('@DATE', `date`.strip)
  File.open(target.to_s, 'w+') { |f| f.write(css) }
end

task BOOTSTRAP_MIN_CSS do |target|
  sh "#{SASS_COMMAND} compressed lib/bootstrap.scss:#{target}"
end

task BOOTSTRAP_LATEST do |target|
  sh "#{SASS_COMMAND} compressed lib/bootstrap.scss:#{target}"
end

desc "build regular and compresed versions of bootstrap"
task :build => [BOOTSTRAP_CSS, BOOTSTRAP_MIN_CSS, BOOTSTRAP_LATEST]

desc "rebuild regular version of bootstrap when modifications are made"
task :watch do
  sh "#{SASS_COMMAND} expanded --watch lib"
end

task :default => :build
