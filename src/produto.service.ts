import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Produto } from './produto';

@Injectable()
export class ProdutoService {
  constructor(
    @InjectModel(Produto)
    private produtoModel: typeof Produto
  ) {

  }
  async obterTodos(): Promise<Produto[]> {
    return this.produtoModel.findAll();
  }

  async obterPorId(id: number): Promise<Produto> {
    return this.produtoModel.findByPk(id);
  }

  async criar(produto: Produto) {
    return this.produtoModel.create(produto);
  }

  async alterar(produto: Produto): Promise<[number, Produto[]]> {
    return this.produtoModel.update(produto, {
      where: {
        id: produto.id
      }
    });
  }

  async excluir(id: number) {
    const produto: Produto = await this.obterPorId(id);
    produto.destroy();
  }
}
