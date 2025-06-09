
import React from 'react';
import { MenuCategory } from '@/types/menu';
import MenuItemCard from './MenuItemCard';

interface MenuSectionProps {
  categories: MenuCategory[];
}

const MenuSection = ({ categories }: MenuSectionProps) => {
  return (
    <div className="pt-20 pb-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-food-brown mb-2">
            Nosso Cardápio
          </h2>
          <p className="text-gray-600">
            Deliciosos sabores caseiros preparados com muito carinho
          </p>
        </div>

        {categories.map((category) => (
          <section key={category.name} className="mb-8">
            <div className="flex items-center space-x-3 mb-6">
              <span className="text-3xl">{category.icon}</span>
              <h3 className="text-2xl font-bold text-food-brown">
                {category.name}
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.items.map((item) => (
                <MenuItemCard key={item.id} item={item} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default MenuSection;
