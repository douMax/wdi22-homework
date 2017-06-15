class RpsController < ApplicationController

  def throw
    

  end

  def play

      player_throw = params["throw"]
      ai_throw = ["rock","paper","scissors"].sample

      @output_msg = "You throw #{player_throw}, AI throw #{ai_throw}, "

      outcome = {
        "rock" => {"rock" => "tie", "paper" => "lose", "scissors" => "win"},
        "paper" => {"rock" => "win", "paper" => "tie", "scissors" => "lose"},
        "scissors" => {"rock" => "lose", "paper" => "win", "scissors" => "tie"},
      }

      output = outcome[player_throw][ai_throw]

      output == "tie"? @output_msg += "it's a tie" : @output_msg += "you #{output}"

  end

end
