import React from 'react';
import { Package, Edit3, Trash2 } from 'lucide-react';

const inventoryItems = [
  { id: 1, item: 'Test Tubes', quantity: 340, status: 'In Stock' },
  { id: 2, item: 'Centrifuge Machine', quantity: 2, status: 'Low Stock' },
  { id: 3, item: 'Sample Bottles', quantity: 120, status: 'In Stock' },
];

export default function InventoryManagement() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Package className="w-6 h-6 text-blue-600" />
        <h2 className="text-xl font-semibold text-gray-800">Inventory Overview</h2>
      </div>
      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="px-4 py-3 text-left">Item</th>
              <th className="px-4 py-3 text-left">Quantity</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {inventoryItems.map(({ id, item, quantity, status }) => (
              <tr key={id} className="border-t">
                <td className="px-4 py-3">{item}</td>
                <td className="px-4 py-3">{quantity}</td>
                <td className="px-4 py-3">{status}</td>
                <td className="px-4 py-3 text-right space-x-2">
                  <button className="text-blue-600 hover:underline">
                    <Edit3 className="inline-block w-4 h-4" />
                  </button>
                  <button className="text-red-600 hover:underline">
                    <Trash2 className="inline-block w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
