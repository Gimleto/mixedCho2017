Rails.application.routes.draw do
  root 'items#index'
  get 'about' => 'itemss#about'
  get 'event' => 'items#event'
  get 'daily' => 'items#daily'
  resources :items
end
