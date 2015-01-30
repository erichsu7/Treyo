module Api
  class ItemsController < ApiController
    def create
      @items = Item.new(item_params)

      if @items.save
        render json: @items
      else
        render json: @items.errors.full_messages, status: :unprocessable_entity
      end
    end

    def update
      @item = Item.find(params[:id])

      if @item.update(item_params)
        render json: @item
      else
        render json: @item.errors.full_messages, status: :unprocessable_entity
      end
    end

    def destroy
      @item = Item.find(params[:id])
      @item.destroy
      render json: { message: 'destroyed!' }
    end

    private

    def item_params
      params.require(:item).permit(:done, :title, :card_id)
    end
  end
end
