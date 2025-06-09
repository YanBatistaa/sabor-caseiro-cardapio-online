
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { MenuItem, MenuCategory } from '@/types/menu';
import { initialMenuData } from '@/data/initialMenu';

interface MenuContextType {
  menu: MenuCategory[];
  addMenuItem: (item: Omit<MenuItem, 'id'>) => void;
  updateMenuItem: (id: string, item: Partial<MenuItem>) => void;
  deleteMenuItem: (id: string) => void;
  toggleMenuItemAvailability: (id: string) => void;
  loadMenuFromStorage: () => void;
  saveMenuToStorage: () => void;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error('useMenu must be used within a MenuProvider');
  }
  return context;
};

export const MenuProvider = ({ children }: { children: ReactNode }) => {
  const [menu, setMenu] = useState<MenuCategory[]>([]);

  // Load menu from localStorage on mount
  useEffect(() => {
    loadMenuFromStorage();
  }, []);

  // Save to localStorage whenever menu changes
  useEffect(() => {
    if (menu.length > 0) {
      saveMenuToStorage();
    }
  }, [menu]);

  const loadMenuFromStorage = () => {
    try {
      const savedMenu = localStorage.getItem('lanchonete-menu');
      if (savedMenu) {
        const parsedMenu = JSON.parse(savedMenu);
        setMenu(parsedMenu);
        console.log('Menu loaded from localStorage');
      } else {
        setMenu(initialMenuData);
        console.log('Using initial menu data');
      }
    } catch (error) {
      console.error('Error loading menu from localStorage:', error);
      setMenu(initialMenuData);
    }
  };

  const saveMenuToStorage = () => {
    try {
      localStorage.setItem('lanchonete-menu', JSON.stringify(menu));
      console.log('Menu saved to localStorage');
    } catch (error) {
      console.error('Error saving menu to localStorage:', error);
    }
  };

  const addMenuItem = (newItem: Omit<MenuItem, 'id'>) => {
    const item: MenuItem = {
      ...newItem,
      id: Date.now().toString(),
      available: true
    };

    setMenu(prevMenu => {
      const updatedMenu = [...prevMenu];
      const categoryIndex = updatedMenu.findIndex(cat => cat.name.includes(item.category));
      
      if (categoryIndex !== -1) {
        updatedMenu[categoryIndex] = {
          ...updatedMenu[categoryIndex],
          items: [...updatedMenu[categoryIndex].items, item]
        };
      } else {
        // Create new category if it doesn't exist
        updatedMenu.push({
          name: item.category,
          icon: '🍽️',
          items: [item]
        });
      }
      
      return updatedMenu;
    });
  };

  const updateMenuItem = (id: string, updatedItem: Partial<MenuItem>) => {
    setMenu(prevMenu => {
      return prevMenu.map(category => ({
        ...category,
        items: category.items.map(item =>
          item.id === id ? { ...item, ...updatedItem } : item
        )
      }));
    });
  };

  const deleteMenuItem = (id: string) => {
    setMenu(prevMenu => {
      return prevMenu.map(category => ({
        ...category,
        items: category.items.filter(item => item.id !== id)
      })).filter(category => category.items.length > 0);
    });
  };

  const toggleMenuItemAvailability = (id: string) => {
    setMenu(prevMenu => {
      return prevMenu.map(category => ({
        ...category,
        items: category.items.map(item =>
          item.id === id ? { ...item, available: !item.available } : item
        )
      }));
    });
  };

  return (
    <MenuContext.Provider value={{
      menu,
      addMenuItem,
      updateMenuItem,
      deleteMenuItem,
      toggleMenuItemAvailability,
      loadMenuFromStorage,
      saveMenuToStorage
    }}>
      {children}
    </MenuContext.Provider>
  );
};
