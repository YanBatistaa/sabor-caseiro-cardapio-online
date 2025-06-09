
import { MenuCategory } from '@/types/menu';

export const initialMenuData: MenuCategory[] = [
  {
    name: "🍔 Lanches",
    icon: "🍔",
    items: [
      { id: "1", name: "X-Burguer", price: "12.00", category: "Lanches", available: true },
      { id: "2", name: "X-Salada", price: "14.00", category: "Lanches", available: true },
      { id: "3", name: "X-Bacon", price: "16.00", category: "Lanches", available: true },
      { id: "4", name: "X-Egg", price: "15.00", category: "Lanches", available: true },
      { id: "5", name: "X-Tudo", price: "18.00", category: "Lanches", available: true },
      { id: "6", name: "Misto Quente", price: "10.00", category: "Lanches", available: true }
    ]
  },
  {
    name: "🥪 Sanduíches Naturais",
    icon: "🥪",
    items: [
      { id: "7", name: "Frango com Salada", price: "13.00", category: "Sanduíches Naturais", available: true },
      { id: "8", name: "Atum com Cenoura", price: "14.00", category: "Sanduíches Naturais", available: true },
      { id: "9", name: "Vegetariano", price: "12.00", category: "Sanduíches Naturais", available: true }
    ]
  },
  {
    name: "🍟 Porções",
    icon: "🍟",
    items: [
      { id: "10", name: "Batata Frita (Pequena)", price: "10.00", category: "Porções", available: true },
      { id: "11", name: "Batata Frita (Grande)", price: "18.00", category: "Porções", available: true },
      { id: "12", name: "Porção de Calabresa", price: "22.00", category: "Porções", available: true },
      { id: "13", name: "Isca de Frango", price: "25.00", category: "Porções", available: true }
    ]
  },
  {
    name: "🥤 Bebidas",
    icon: "🥤",
    items: [
      { id: "14", name: "Refrigerante Lata", price: "6.00", category: "Bebidas", available: true },
      { id: "15", name: "Refrigerante 600ml", price: "8.00", category: "Bebidas", available: true },
      { id: "16", name: "Suco Natural", price: "10.00", category: "Bebidas", available: true },
      { id: "17", name: "Água Mineral", price: "4.00", category: "Bebidas", available: true },
      { id: "18", name: "Água com Gás", price: "5.00", category: "Bebidas", available: true }
    ]
  },
  {
    name: "🍰 Sobremesas",
    icon: "🍰",
    items: [
      { id: "19", name: "Pudim de Leite", price: "7.00", category: "Sobremesas", available: true },
      { id: "20", name: "Mousse de Maracujá", price: "6.00", category: "Sobremesas", available: true },
      { id: "21", name: "Brownie com Sorvete", price: "12.00", category: "Sobremesas", available: true }
    ]
  }
];
