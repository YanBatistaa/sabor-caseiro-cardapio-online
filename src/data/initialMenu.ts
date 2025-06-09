
import { MenuCategory } from '@/types/menu';

export const initialMenuData: MenuCategory[] = [
  {
    name: "🍔 Lanches",
    icon: "🍔",
    items: [
      { id: "1", name: "X-Burguer", description: "Pão, hambúrguer bovino, queijo prato, alface, tomate e maionese.", price: "12.00", category: "Lanches", available: true, image: "" },
      { id: "2", name: "X-Salada", description: "Pão, hambúrguer bovino, queijo prato, presunto, alface, tomate e maionese.", price: "14.00", category: "Lanches", available: true, image: "" },
      { id: "3", name: "X-Bacon", description: "Pão, hambúrguer bovino, queijo prato, bacon, alface, tomate e maionese.", price: "16.00", category: "Lanches", available: true, image: "" },
      { id: "4", name: "X-Egg", description: "Pão, hambúrguer bovino, queijo prato, ovo, alface, tomate e maionese.", price: "15.00", category: "Lanches", available: true, image: "" },
      { id: "5", name: "X-Tudo", description: "Pão, hambúrguer bovino, queijo prato, presunto, ovo, bacon, alface, tomate, maionese, ketchup e mostarda.", price: "18.00", category: "Lanches", available: true, image: "" },
      { id: "6", name: "Misto Quente", description: "Pão de forma, presunto e queijo prato na chapa.", price: "10.00", category: "Lanches", available: true, image: "" }
    ]
  },
  {
    name: "🥪 Sanduíches Naturais",
    icon: "🥪",
    items: [
      { id: "7", name: "Frango com Salada", description: "Pão integral, frango desfiado, alface, tomate, cenoura e maionese.", price: "13.00", category: "Sanduíches Naturais", available: true, image: "" },
      { id: "8", name: "Atum com Cenoura", description: "Pão integral, atum, cenoura ralada, alface e maionese.", price: "14.00", category: "Sanduíches Naturais", available: true, image: "" },
      { id: "9", name: "Vegetariano", description: "Pão integral, queijo branco, alface, tomate, cenoura, pepino e maionese.", price: "12.00", category: "Sanduíches Naturais", available: true, image: "" }
    ]
  },
  {
    name: "🍟 Porções",
    icon: "🍟",
    items: [
      { id: "10", name: "Batata Frita (Pequena)", description: "Porção de batata frita crocante.", price: "10.00", category: "Porções", available: true, image: "" },
      { id: "11", name: "Batata Frita (Grande)", description: "Porção grande de batata frita crocante.", price: "18.00", category: "Porções", available: true, image: "" },
      { id: "12", name: "Porção de Calabresa", description: "Calabresa acebolada com batata frita.", price: "22.00", category: "Porções", available: true, image: "" },
      { id: "13", name: "Isca de Frango", description: "Isca de frango empanado com batata frita.", price: "25.00", category: "Porções", available: true, image: "" }
    ]
  },
  {
    name: "🥤 Bebidas",
    icon: "🥤",
    items: [
      { id: "14", name: "Refrigerante Lata", description: "Coca-Cola, Guaraná ou Fanta - 350ml.", price: "6.00", category: "Bebidas", available: true, image: "" },
      { id: "15", name: "Refrigerante 600ml", description: "Coca-Cola, Guaraná ou Fanta - 600ml.", price: "8.00", category: "Bebidas", available: true, image: "" },
      { id: "16", name: "Suco Natural", description: "Suco de frutas frescas: laranja, limão, maracujá ou acerola.", price: "10.00", category: "Bebidas", available: true, image: "" },
      { id: "17", name: "Água Mineral", description: "Água mineral sem gás - 500ml.", price: "4.00", category: "Bebidas", available: true, image: "" },
      { id: "18", name: "Água com Gás", description: "Água mineral com gás - 500ml.", price: "5.00", category: "Bebidas", available: true, image: "" }
    ]
  },
  {
    name: "🍰 Sobremesas",
    icon: "🍰",
    items: [
      { id: "19", name: "Pudim de Leite", description: "Pudim caseiro de leite condensado com calda de caramelo.", price: "7.00", category: "Sobremesas", available: true, image: "" },
      { id: "20", name: "Mousse de Maracujá", description: "Mousse cremoso de maracujá.", price: "6.00", category: "Sobremesas", available: true, image: "" },
      { id: "21", name: "Brownie com Sorvete", description: "Brownie de chocolate com sorvete de creme.", price: "12.00", category: "Sobremesas", available: true, image: "" }
    ]
  }
];
