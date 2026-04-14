import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-app');

}

export interface Produto{
  id: number;
  nome: string;
  descrincao: string;
  preco: number;
  imgs: string ;
  estoque: number;
}

export class Loja {
produtos: Produto[] = [
{
id: 1,
nome: 'Essencia de luar',
descricao: 'Um perfume suave e envolvente.',
preco: 200,00,
imgs:[
per1
],

estoque: 15,
},

{
id: 2,
nome: 'Brisa de Safira,
descricao: ' Fresco e elegante, combina notas aquáticas com um fundo levemente amadeirado',
preco: 150,00,
imgs:[

],

estoque: 13,
},

{
id: 3,
nome: 'Doce Encanto',
descricao: ' Uma fragrância marcante e feminina, com baunilha e frutas vermelhas que deixam um rastro irresistível.',
preco: 140,00,
imgs:[

],

estoque: 21,
},

{
id: 4,
nome: 'Veludo Noturno',
descricao: '  Intenso e misterioso, mistura especiarias com madeira e âmbar, perfeito para noites especiais.',
preco: 250,00,
imgs:[

],

estoque: 20,
},

{
id: 5,
nome: 'Aurora Floral',
descricao: '  Leve e delicado, traz a pureza das flores recém-desabrochadas com um toque cítrico refrescante.,
preco: 350,00,
imgs:[

],

estoque: 5,
},

{
id: 6,
nome: 'Segredo de Âmbar',
descricao: '   Quente e sedutor, com notas orientais que envolvem a pele como um abraço.',
preco: 175,00,
imgs:[

],

estoque: 16,
},

{
id: 7,
nome: 'Jardim dos Sonhos',
descricao: ' Romântico e suave, mistura rosas, jasmim e um fundo adocicado que transmite leveza e fantasia. com cheiro floral',
preco: 180,00,
imgs:[

],

estoque: 14,
},

{
id: 8,
nome: 'Chama de Cristal',
descricao: '   Moderno e vibrante, combina frutas cítricas com um toque doce e energético.',
preco: 120,00,
imgs:[

],

estoque: 23,
},

{
id: 9,
nome: 'Névoa de Lavanda',
descricao: 'Calmo e relaxante, perfeito para quem busca leveza, com notas aromáticas e frescas perfume com cheiro floral',
preco: 260,00,
imgs:[

],

estoque: 25,
},

{
id: 10,
nome: 'Luxo de Orquídea',
descricao: ' Elegante e sofisticado, com um floral marcante equilibrado por notas cremosas e envolventes perfume com cheiro floral',
preco: 300,00,
imgs:[

],

estoque: 17,
},























]
}

