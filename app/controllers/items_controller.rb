class ItemsController < ApplicationController
 def index
 end

 def event
 end

 def move_to_index
    unless user_signed_in?
      redirect_to action: :index
 end
end
