
import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

interface HeaderProps {
  onCartClick: () => void;
}

const Header = ({ onCartClick }: HeaderProps) => {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-orange-100 warm-shadow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-food-orange to-food-red rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">🏠</span>
          </div>
          <h1 className="text-xl font-bold text-food-brown">
            Lanchonete Sabor Caseiro
          </h1>
        </div>
        
        <button
          onClick={onCartClick}
          className="relative p-3 bg-gradient-to-r from-food-orange to-food-red text-white rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
        >
          <ShoppingCart size={20} />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-food-red text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-bounce-in">
              {totalItems}
            </span>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
