// Share the same small read projection across the Home and transactions API.
export const transactionViewSelect = {
  id: true, accountId: true, description: true, amount: true, date: true, type: true,
  status: true, category: true, categorySource: true, pluggyTransactionId: true, isBillPayment: true,
  account: { select: { name: true, type: true } },
} as const;
