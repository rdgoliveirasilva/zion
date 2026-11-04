// Share the same small read projection across the Home and transactions API.
export const transactionViewSelect = {
  id: true, description: true, amount: true, date: true, type: true,
  status: true, category: true, isBillPayment: true,
  account: { select: { name: true, type: true } },
} as const;
