import TransactionsRepository from '../repositories/TransactionsRepository';
import Balance from '../models/Balance';

interface Request {
  income: number;
  outcome: number;
  total: number;
}

interface RequestTransaction {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class BalanceTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public calculate({ title, value, type }: RequestTransaction);

  public execute({ income, outcome, total }: Request): Balance {
    const balance = this.transactionsRepository.getBalance({
      income,
      outcome,
      total,
    });
    return balance;
  }
}

export default BalanceTransactionService;
