
import React, { useState } from 'react';
import { Plus, Edit, Trash2, ToggleLeft, ToggleRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MenuItem } from '@/types/menu';
import { initialMenuData } from '@/data/initialMenu';

const Admin = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>(() => {
    return initialMenuData.flatMap(category => category.items);
  });
  
  const [editingItem, setEditingItem] = useState<MenuItem | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: ''
  });

  const categories = ['Lanches', 'Sanduíches Naturais', 'Porções', 'Bebidas', 'Sobremesas'];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingItem) {
      // Edit existing item
      setMenuItems(prev => prev.map(item =>
        item.id === editingItem.id
          ? { ...item, ...formData, available: editingItem.available }
          : item
      ));
    } else {
      // Add new item
      const newItem: MenuItem = {
        id: Date.now().toString(),
        ...formData,
        available: true
      };
      setMenuItems(prev => [...prev, newItem]);
    }
    
    // Reset form
    setFormData({ name: '', description: '', price: '', category: '' });
    setEditingItem(null);
  };

  const handleEdit = (item: MenuItem) => {
    setEditingItem(item);
    setFormData({
      name: item.name,
      description: item.description || '',
      price: item.price,
      category: item.category
    });
  };

  const handleDelete = (id: string) => {
    setMenuItems(prev => prev.filter(item => item.id !== id));
  };

  const handleToggleAvailability = (id: string) => {
    setMenuItems(prev => prev.map(item =>
      item.id === id ? { ...item, available: !item.available } : item
    ));
  };

  const cancelEdit = () => {
    setEditingItem(null);
    setFormData({ name: '', description: '', price: '', category: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-bg to-white">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-food-brown mb-2">
            Painel Administrativo
          </h1>
          <p className="text-gray-600">
            Gerencie o cardápio da Lanchonete Sabor Caseiro
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form Section */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="text-food-brown">
                {editingItem ? 'Editar Item' : 'Adicionar Item'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Nome do Produto</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="description">Descrição (opcional)</Label>
                  <Input
                    id="description"
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                  />
                </div>
                
                <div>
                  <Label htmlFor="price">Preço (R$)</Label>
                  <Input
                    id="price"
                    type="number"
                    step="0.01"
                    value={formData.price}
                    onChange={(e) => handleInputChange('price', e.target.value)}
                    required
                  />
                </div>
                
                <div>
                  <Label>Categoria</Label>
                  <Select 
                    value={formData.category} 
                    onValueChange={(value) => handleInputChange('category', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione uma categoria" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map(category => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="flex space-x-2">
                  <Button 
                    type="submit" 
                    className="flex-1 bg-gradient-to-r from-food-orange to-food-red"
                  >
                    {editingItem ? 'Atualizar' : 'Adicionar'}
                  </Button>
                  {editingItem && (
                    <Button type="button" variant="outline" onClick={cancelEdit}>
                      Cancelar
                    </Button>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Items List Section */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-food-brown">Items do Cardápio</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {menuItems.map((item) => (
                  <div
                    key={item.id}
                    className={`p-4 border rounded-lg transition-all ${
                      item.available ? 'bg-white' : 'bg-gray-50 opacity-75'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3">
                          <h3 className="font-semibold text-gray-800">
                            {item.name}
                          </h3>
                          <span className="text-sm bg-gray-100 px-2 py-1 rounded">
                            {item.category}
                          </span>
                        </div>
                        {item.description && (
                          <p className="text-sm text-gray-600 mt-1">
                            {item.description}
                          </p>
                        )}
                        <p className="text-food-orange font-semibold mt-1">
                          R$ {item.price}
                        </p>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleToggleAvailability(item.id)}
                          className={`p-2 ${
                            item.available ? 'text-green-600' : 'text-gray-400'
                          }`}
                        >
                          {item.available ? (
                            <ToggleRight size={20} />
                          ) : (
                            <ToggleLeft size={20} />
                          )}
                        </Button>
                        
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleEdit(item)}
                          className="p-2 text-blue-600 hover:text-blue-800"
                        >
                          <Edit size={16} />
                        </Button>
                        
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDelete(item.id)}
                          className="p-2 text-red-600 hover:text-red-800"
                        >
                          <Trash2 size={16} />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
                
                {menuItems.length === 0 && (
                  <div className="text-center py-8 text-gray-500">
                    Nenhum item no cardápio. Adicione o primeiro item!
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Admin;
