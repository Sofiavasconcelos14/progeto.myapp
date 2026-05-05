import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Loja } from './loja/loja';
import { carrinho } from './carrinho/carrinho';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'sobre', component: About },
  { path: 'loja', component: Loja },
  { path: 'carrinho', component: carrinho },
];
  