Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'games#welcome'


  get '/games/magic' => 'magic#question'
  get '/games/magic/play' => 'magic#play'
  # get '/games/magic/play' => 'magic#play'

  get '/games/secret/:guess' => 'secret#play'

  get '/games/rps' => 'rps#throw'
  get '/games/rps/:throw' => 'rps#play'



end
