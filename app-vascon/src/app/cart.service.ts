import { computed, Injectable, signal } from '@angular/core';
import { Produto } from './loja/models/produto';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  carrinho = signal<{ produto: Produto; quantidade: number }[]>([]);

  total = computed(() => {
    return this.carrinho().reduce((acc, item) => acc + item.produto.preco * item.quantidade, 0);
  });

  adicionarAoCarrinho(prod: Produto) {
    if (prod.estoque <= 0) {
      console.log('Produto sem estoque');
      return;
    }
    const itemNoCarrinho = this.carrinho().find((item) => item.produto.id === prod.id);
    console.log('porduto no carrinho: ' + this.carrinho);
    if (itemNoCarrinho) {
      itemNoCarrinho.quantidade += 1;
    } else {
      this.carrinho.set([...this.carrinho(), { produto: prod, quantidade: 1 }]);
    }
  }

  atualizarQuantidade(produtoid: number, quantidade: number) {
    this.carrinho.update((item) =>
      item.map((i) => {
        if (i.produto.id === produtoid) {
          const novaQtd = Math.max(1, Math.min(quantidade, i.produto.estoque) );
            return { ...i, quantidade: novaQtd };
        }
        return i;
      }),
    );
  }

  removerDoCarrinho(produtoid: number) {
    this.carrinho.update((item) => item.filter((i) => i.produto.id !== produtoid));
  }
}
