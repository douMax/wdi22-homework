class SecretController < ApplicationController

  def play

    guess = params["guess"].to_i
    answer = Random.rand(10)
    @message = "Not quite"

    if guess == answer
      @message = "you guessed it"
    end

    @message

  end



end
