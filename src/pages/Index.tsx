
import React, { useState } from 'react';
import { CartProvider } from '@/contexts/CartContext';
import Header from '@/components/Header';
import MenuSection from '@/components/MenuSection';
import ShoppingCart from '@/components/ShoppingCart';
import { initialMenuData } from '@/data/initialMenu';

const Index = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartToggle = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-gradient-to-br from-warm-bg to-white">
        <Header onCartClick={handleCartToggle} />
        <MenuSection categories={initialMenuData} />
        <ShoppingCart 
          isOpen={isCartOpen} 
          onClose={() => setIsCartOpen(false)} 
        />
      </div>
    </CartProvider>
  );
};

export default Index;
