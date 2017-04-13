Rails.application.routes.draw do
  root 'items#index'
  get 'about' => 'items#about'
  get 'annualEvent' => 'items#annualEvent'
  get 'welcomeEvent' => 'items#welcomeEvent'
  get 'daily' => 'items#daily'

  get 'MoveIndex' => 'items#move_to_index'
  resources :items
end
