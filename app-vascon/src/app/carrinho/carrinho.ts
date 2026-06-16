import { Component, inject } from '@angular/core';
import { CartService } from '../cart.service';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-carrinho',
  imports: [RouterLink],
  templateUrl: './carrinho.html',
  styleUrl: './carrinho.css',
})
export class carrinho {
  private carteService = inject(CartService);

  total = this.carteService.total;

  itens = this.carteService.carrinho;

  removerProduto(id: number) {
    this.carteService.removerDoCarrinho(id);
  }
  incrementar(id: number, atual: number, estoque: number) {
    if (atual < estoque) {
      this.carteService.atualizarQuantidade(id, atual + 1);
    }
  }
  decrementar(id: number, atual: number) {
    if (atual > 1) {
      this.carteService.atualizarQuantidade(id, atual - 1);
    }
    this.removerProduto(id);
  }
}
