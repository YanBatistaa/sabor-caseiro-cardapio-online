
import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ShoppingCartProps {
  isOpen: boolean;
  onClose: () => void;
}

const ShoppingCart = ({ isOpen, onClose }: ShoppingCartProps) => {
  const { items, updateQuantity, removeItem, getTotalPrice, clearCart } = useCart();

  const handleWhatsAppOrder = () => {
    if (items.length === 0) return;

    const orderText = items.map(item => 
      `${item.quantity}x ${item.name} - R$ ${(parseFloat(item.price) * item.quantity).toFixed(2)}`
    ).join('\n');
    
    const total = getTotalPrice().toFixed(2);
    const message = `🍔 *Pedido - Lanchonete Sabor Caseiro*\n\n${orderText}\n\n💰 *Total: R$ ${total}*\n\nObrigado!`;
    
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    clearCart();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Overlay */}
      <div 
        className="flex-1 bg-black/50"
        onClick={onClose}
      />
      
      {/* Cart Sidebar */}
      <div className="w-full max-w-md bg-white h-full overflow-y-auto">
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-food-brown flex items-center space-x-2">
              <ShoppingBag size={24} />
              <span>Seu Pedido</span>
            </h2>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X size={20} />
            </Button>
          </div>
        </div>

        <div className="flex-1 p-4">
          {items.length === 0 ? (
            <div className="text-center py-8">
              <ShoppingBag size={48} className="mx-auto text-gray-300 mb-4" />
              <p className="text-gray-500">Seu carrinho está vazio</p>
              <p className="text-sm text-gray-400 mt-1">
                Adicione alguns itens deliciosos!
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <Card key={item.id} className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-800">{item.name}</h4>
                      <p className="text-food-orange font-semibold">
                        R$ {item.price}
                      </p>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 p-0"
                      >
                        <Minus size={14} />
                      </Button>
                      
                      <span className="w-8 text-center font-medium">
                        {item.quantity}
                      </span>
                      
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 p-0"
                      >
                        <Plus size={14} />
                      </Button>
                      
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-700 ml-2"
                      >
                        <X size={16} />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="mt-2 text-right">
                    <span className="font-bold text-food-brown">
                      R$ {(parseFloat(item.price) * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </Card>
              ))}
              
              <div className="border-t pt-4 mt-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-bold text-gray-800">Total:</span>
                  <span className="text-2xl font-bold text-food-orange">
                    R$ {getTotalPrice().toFixed(2)}
                  </span>
                </div>
                
                <Button
                  onClick={handleWhatsAppOrder}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3"
                >
                  Finalizar via WhatsApp
                </Button>
                
                <Button
                  variant="outline"
                  onClick={clearCart}
                  className="w-full mt-2 text-red-600 border-red-600 hover:bg-red-50"
                >
                  Limpar Carrinho
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
