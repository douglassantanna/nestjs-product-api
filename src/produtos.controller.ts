import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Produto } from './produto';
import { ProdutoService } from './produto.service';

@Controller('produtos')
export class ProdutosController {
  constructor(private produtoService: ProdutoService) {
  }
  @Get()
  async obterTodos(): Promise<Produto[]> {
    return this.produtoService.obterTodos();
  }

  @Get(':id')
  async obterPorId(@Param() params) {
    return this.produtoService.obterPorId(params.id);
  }

  @Post()
  async criar(@Body() produto: Produto) {
    this.produtoService.criar(produto);
  }

  @Put()
  async alterar(@Body() produto: Produto): Promise<[number, Produto[]]> {
    return this.produtoService.alterar(produto);
  }

  @Delete(':id')
  async excluir(@Param() params) {
    return this.produtoService.excluir(params.id)
  }
}
