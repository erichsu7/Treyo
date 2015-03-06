class StaticPagesController < ApplicationController
  # before_action :require_signed_in!

  def root
    if signed_in?
      render :root
    else
      render :splash
    end
  end
end
