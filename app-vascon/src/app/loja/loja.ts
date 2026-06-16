import { Component, inject, signal } from '@angular/core';
import { Produto } from './models/produto';
import { CartService } from '../cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-loja',
  imports: [RouterLink],
  templateUrl: './loja.html',
  styleUrl: './loja.css',
})
export class Loja {
  produtos: Produto[] = [
    {
      id: 1,
      nome: 'Essencia de luar',
      descricao:
        'Um perfume suave e envolvente, trazendo delicadeza, elegância e conforto em cada borrifada.',
      preco: 200.0,
      imgs: ['image3.jpeg'],
      estoque: 15,
    },
    {
      id: 2,
      nome: 'Brisa de Safirra',
      descricao:
        ' Fresco e elegante, combina notas aquáticas com um fundo levemente amadeirado e sofisticado.',
      preco: 150.0,
      imgs: ['image4.jpeg'],
      estoque: 13,
    },
    {
      id: 3,
      nome: 'Doce Encanto',
      descricao:
        ' Uma fragrância marcante e feminina, com baunilha que deixam um rastro irresistível e delicado.',
      preco: 140.0,
      imgs: ['image5.jpeg'],
      estoque: 21,
    },

    {
      id: 4,
      nome: 'Veludo Noturno',
      descricao:
        '  Intenso e misterioso, mistura especiarias com madeira e âmbar, perfeito para noites especiais.',
      preco: 250.0,
      imgs: ['image6.jpeg'],
      estoque: 20,
    },

    {
      id: 5,
      nome: 'Aurora Floral',
      descricao:
        '  Leve e delicado, traz a pureza das flores recém-desabrochadas com toque cítrico refrescante.',
      preco: 350.0,
      imgs: ['image6.jpeg'],
      estoque: 5,
    },

    {
      id: 6,
      nome: 'Segredo de Âmbar',
      descricao:
        '   Quente e sedutor, com notas orientais que envolvem a pele como um abraço elegante.',
      preco: 175.0,
      imgs: ['image7.jpeg'],
      estoque: 16,
    },

    {
      id: 7,
      nome: 'Jardim dos Sonhos',
      descricao:
        ' Romântico e suave, mistura rosas, jasmim e um fundo adocicado que transmite leveza e fantasia.',
      preco: 180.0,
      imgs: ['image8.jpeg.jpg'],
      estoque: 14,
    },

    {
      id: 8,
      nome: 'Chama de Cristal',
      descricao:
        '   Moderno e vibrante, combina frutas cítricas com um toque doce e energético marcante.',
      preco: 120.0,
      imgs: ['image9.jpeg.jpg'],
      estoque: 23,
    },

    {
      id: 9,
      nome: 'Névoa de Lavanda',
      descricao:
        'Calmo e relaxante, perfeito para quem busca leveza, com notas aromáticas suaves e refrescantes.',
      preco: 260.0,
      imgs: ['image10.jpeg.jpg'],
      estoque: 25,
    },

    {
      id: 10,
      nome: 'Luxo de Orquídea',
      descricao:
        ' Elegante e sofisticado, com um floral marcante equilibrado por notas cremosas e envolventes.',
      preco: 300.0,
      imgs: ['imagem1.1.jpg'],
      estoque: 17,
    },
    {
      id: 11,
      nome: 'Noite de Pérolas',
      descricao:
        ' Perfume intenso e refinado, com notas marcantes que transmitem luxo, charme e sofisticação.',
      preco: 300.0,
      imgs: ['13.jpg'],
      estoque: 17,
    },
    {
      id: 12,
      nome: 'Encanto Rubi',
      descricao:
        ' Aroma delicado e apaixonante, combinando flores suaves com toque doce e extremamente elegante.',
      preco: 300.0,
      imgs: ['12.jpg'],
      estoque: 17,
    },
  ];

  private carteService = inject(CartService);

  adicionarAoCarrinho(prod: Produto) {
    this.carteService.adicionarAoCarrinho(prod);
  }
}
