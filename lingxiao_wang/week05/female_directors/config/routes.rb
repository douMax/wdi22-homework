Rails.application.routes.draw do

  get '/directors/new' => 'directors#new'
  post '/directors' => 'directors#create'

  get '/directors' => 'directors#index'
  get '/directors/:id' => 'directors#show'

  get '/directors/:id/edit' => 'directors#edit'
  post '/directors/:id' => 'directors#update'


  get '/directors/delete'




  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
