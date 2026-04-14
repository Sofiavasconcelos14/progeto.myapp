import { Component } from '@angular/core';

@Component({
  selector: 'app-loja',
  imports: [],
  templateUrl: './loja.html',
  styleUrl: './loja.css',
})
export class Loja {
  id: number;
  nome: string;
  descrincao: string;
  preco: number;
  imgs: string ;
  estoque: number;
}

@Component{
  selector:'app-vascon',
  inports:[MatCardM]
}