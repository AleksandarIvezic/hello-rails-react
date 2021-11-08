class V1::MessagesController < ApplicationController
  def index 
    @message = Message.find(rand(1..5))
    @greeting = @message.greeting
    render json: {
      greeting: @greeting
    }
  end

end