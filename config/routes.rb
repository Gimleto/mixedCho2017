Rails.application.routes.draw do
  root 'items#index'
  get 'about' => 'items#about'
  get 'event' => 'items#event'
  get 'daily' => 'items#daily'

  get 'MoveIndex' => 'items#move_to_index'
  resources :items
end
