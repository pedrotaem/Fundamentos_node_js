import Transaction from '../models/Transaction';
import Balance from '../models/Balance';

interface BalanceDTO {
  income: number;
  outcome: number;
  total: number;
}
interface CreateTransactionDTO {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}
class TransactionsRepository {
  private transactions: Transaction[];

  private balances: Balance;

  constructor() {
    this.transactions = [];
    this.balances = {
      income: 0,
      outcome: 0,
      total: 0,
    };
  }

  public all(): Transaction[] {
    return this.transactions;
  }

  public getBalance({ income, outcome, total }: BalanceDTO): Balance {
    const balance = new Balance({ income, outcome, total });
    this.balances = balance;
    return balance;
  }

  public create({ title, value, type }: CreateTransactionDTO): Transaction {
    const transaction = new Transaction({ title, value, type });
    this.transactions.push(transaction);
    return transaction;
  }
}

export default TransactionsRepository;
