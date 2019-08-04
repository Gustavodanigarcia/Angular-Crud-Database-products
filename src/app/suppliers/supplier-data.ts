import { Supplier } from './supplier';

export class SupplierData {

    static suppliers: Supplier[] = [
        {
            'id': 1,
            'name': 'Precio Mayorista',
            'costo': 600,
            'minCantidad': 12
        },
        {
            'id': 2,
            'name': 'IVA 21%',
            'costo': 15.95,
            'minCantidad': 24
        },

        {
            'id': 3,
            'name': 'Precio Mayorista',
            'costo': 12,
            'minCantidad': 6
        },
        {
            'id': 4,
            'name': 'Precio Mayorista',
            'costo': 25,
            'minCantidad': 2
        }
        
    ];
}
