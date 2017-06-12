class MagicController < ApplicationController

  def question

  end



  def play

    magic = [
      ["It is certain", "Without a doubt", "Yes definitely"],
      ["Ask again later", "Better not tell you now", "Cannot predict now"],
      ["Don't count on it", "My reply is no", "My sources say no"] ]

    @question = params['question']
    @result = magic.sample.sample

  end

end
