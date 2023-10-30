export interface IUser {
    id: number,
    email: string,
    token: string,
}

export interface IUserData {
    email: string,
    password: string,
}

export interface IResponseUser {
    email: string,
    id: number,
    createdAt: string,
    updatedAt: string,
    password: string,
}
export interface IResponseUserData {
    token: string,
    user: IResponseUser,    
}

export interface ITransaction {
    amount: number,
    createdAt: string,
    updatedAt: string,
    title: string,
    type: string,
    id: number,
    category: ICategoryWoutTransactions,
}
export interface ICategory {
    title: string,
    id:  number,
    createdAt: string,
    updatedAt: string,
    transactions: any[],
}

export interface ICategoryWoutTransactions extends Omit<ICategory, 'transactions'> {}

export interface IResponseTransactionLoader {
    categories: ICategory[],
    transactions: ITransaction[],
    totalIncome: number,
    totalExpense: number,
}