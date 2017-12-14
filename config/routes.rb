Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'homes#index'
  resources :homes
  resources :plans
  resources :services
  resources :installs
  resources :actives
  resources :abouts
  resources :infos
end
