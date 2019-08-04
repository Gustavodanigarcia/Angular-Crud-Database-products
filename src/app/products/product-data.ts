import { Product } from './product';

export class ProductData {

  static products: Product[] = [
    {
      'id': 1,
      'productName': 'Buzo canguro',
      'productCode': 'GDN-0011',
      'description': 'Buzo algodon con capucha, tela suave',
      'price': 780,
      'categoryId': 1,
      'supplierIds': [1, 2],
     
    },
    {
      'id': 2,
      'productName': 'Buzo simple',
      'productCode': 'GDN-0023',
      'description': 'Buzo algodon, tela suave',
      'price': 600,
      'categoryId': 1,
      'supplierIds': [1, 3]
    },
    {
      'id': 5,
      'productName': 'Remera modal hombre',
      'productCode': 'TBX-0048',
      'description': 'Remera tela modal rustica',
      'price': 420,
      'categoryId': 3,
      'supplierIds': [1, 4]
    },
    {
      'id': 8,
      'productName': 'Remera modal mujer',
      'productCode': 'TBX-0022',
      'description': 'Remera tela modal rustica',
      'price': 320,
      'categoryId': 3,
      'supplierIds': [2, 4]
    },
    {
      'id': 10,
      'productName': 'Mayorista',
      'productCode': 'GMG-0042',
      'description': 'Cantidad 15 unidades',
      'price': 3500,
      'categoryId': 5,
      'supplierIds': [2, 3]
    }
  ];
}
