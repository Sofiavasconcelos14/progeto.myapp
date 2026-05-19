import { Injectable, signal } from '@angular/core';
import { Produto } from './loja/models/produto';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  carrinho = signal<{ produto: Produto; quantidade: number }[]>([]);

  // carrinho = this._items.asReadonly();

  adicionarcarrinho(prod: Produto) {
    if (prod.estoque <= 0) {
      console.log('Produto sem estoque');
      return;
    }
    const itemNoCarrinho = this.carrinho().find((item) => item.produto.id === prod.id);
    console.log('porduto no carrinho: ' + itemNoCarrinho);
    if (itemNoCarrinho) {
      itemNoCarrinho.quantidade += 1;
    } else {
      this.carrinho.set([...this.carrinho(), { produto: prod, quantidade: 1 }]);
    }
  }
}
