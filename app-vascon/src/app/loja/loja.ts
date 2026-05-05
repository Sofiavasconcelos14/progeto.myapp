import { Component, signal } from '@angular/core';

export interface Produto {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  imgs: string[];
  estoque: number;
}

@Component({
  selector: 'app-loja',
  imports: [],
  templateUrl: './loja.html',
  styleUrl: './loja.css',
})
export class Loja {
  produtos: Produto[] = [
    {
      id: 1,
      nome: 'Essencia de luar',
      descricao: 'Um perfume suave e envolvente.',
      preco: 200.0,
      imgs: ['image3.jpeg'],
      estoque: 15,
    },
    {
      id: 2,
      nome: 'Brisa de Safirra',
      descricao: ' Fresco e elegante, combina notas aquáticas com um fundo levemente amadeirado',
      preco: 150.0,
      imgs: ['image4.jpeg'],
      estoque: 13,
    },
    {
      id: 3,
      nome: 'Doce Encanto',
      descricao:
        ' Uma fragrância marcante e feminina, com baunilha que deixam um rastro irresistível.',
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
        '  Leve e delicado, traz a pureza das flores recém-desabrochadas com um toque cítrico refrescante.',
      preco: 350.0,
      imgs: ['image6.jpeg'],
      estoque: 5,
    },

    {
      id: 6,
      nome: 'Segredo de Âmbar',
      descricao: '   Quente e sedutor, com notas orientais que envolvem a pele como um abraço.',
      preco: 175.0,
      imgs: ['image7.jpeg'],
      estoque: 16,
    },

    {
      id: 7,
      nome: 'Jardim dos Sonhos',
      descricao:
        ' Romântico e suave, mistura rosas, jasmim e um fundo adocicado que transmite leveza e fantasia. com cheiro floral',
      preco: 180.0,
      imgs: ['image8.jpeg.jpg'],
      estoque: 14,
    },

    {
      id: 8,
      nome: 'Chama de Cristal',
      descricao: '   Moderno e vibrante, combina frutas cítricas com um toque doce e energético.',
      preco: 120.0,
      imgs: ['image9.jpeg.jpg'],
      estoque: 23,
    },

    {
      id: 9,
      nome: 'Névoa de Lavanda',
      descricao:
        'Calmo e relaxante, perfeito para quem busca leveza, com notas aromáticas e frescas perfume com cheiro floral',
      preco: 260.0,
      imgs: ['image10.jpeg.jpg'],
      estoque: 25,
    },

    {
      id: 10,
      nome: 'Luxo de Orquídea',
      descricao:
        ' Elegante e sofisticado, com um floral marcante equilibrado por notas cremosas e envolventes perfume com cheiro floral',
      preco: 300.0,
      imgs: ['imagem1.1.jpg'],
      estoque: 17,
    },
  ];



carrinho = signal<{ produto: Produto; quantidade: number }[]>([]);


adicionarcarrinho(prod: Produto){
  if(prod.estoque <= 0) {
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

}}