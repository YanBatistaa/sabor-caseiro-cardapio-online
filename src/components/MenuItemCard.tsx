
import React from 'react';
import { Plus } from 'lucide-react';
import { MenuItem } from '@/types/menu';
import { useCart } from '@/contexts/CartContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface MenuItemCardProps {
  item: MenuItem;
}

const MenuItemCard = ({ item }: MenuItemCardProps) => {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    if (item.available) {
      addItem(item);
      console.log(`Added ${item.name} to cart`);
    }
  };

  return (
    <Card className={`group transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
      !item.available ? 'opacity-50 grayscale' : 'hover:warm-shadow'
    }`}>
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h3 className="font-semibold text-gray-800 group-hover:text-food-brown transition-colors">
              {item.name}
            </h3>
            {item.description && (
              <p className="text-sm text-gray-600 mt-1">{item.description}</p>
            )}
            <div className="mt-2">
              <span className="text-xl font-bold text-food-orange">
                R$ {item.price}
              </span>
              {!item.available && (
                <span className="ml-2 text-xs text-red-500 font-medium">
                  Indisponível
                </span>
              )}
            </div>
          </div>
          
          <Button
            onClick={handleAddToCart}
            disabled={!item.available}
            size="sm"
            className={`ml-4 rounded-full w-10 h-10 p-0 transition-all duration-300 ${
              item.available
                ? 'bg-gradient-to-r from-food-orange to-food-red hover:shadow-lg hover:scale-110'
                : 'bg-gray-300 cursor-not-allowed'
            }`}
          >
            <Plus size={18} />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default MenuItemCard;
