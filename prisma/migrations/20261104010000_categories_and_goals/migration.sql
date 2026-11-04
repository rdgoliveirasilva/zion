BEGIN;
ALTER TABLE "Commitment" ADD COLUMN "estimated" BOOLEAN NOT NULL DEFAULT false;
CREATE TABLE "Category" (
  "value" TEXT NOT NULL PRIMARY KEY,
  "label" TEXT NOT NULL,
  "nameKey" TEXT NOT NULL UNIQUE,
  "color" TEXT NOT NULL DEFAULT '#8b5cf6',
  "archived" BOOLEAN NOT NULL DEFAULT false
);
CREATE TABLE "SpendingGoal" (
  "month" TEXT NOT NULL PRIMARY KEY,
  "amount" INTEGER NOT NULL CHECK ("amount" > 0),
  "updatedAt" TIMESTAMP(3) NOT NULL
);
INSERT INTO "Category" ("value", "label", "nameKey", "color") VALUES
('moradia', 'Moradia', 'moradia', '#8b5cf6'),
('alimentacao', 'Alimentação', 'alimentacao', '#f97316'),
('transporte', 'Transporte', 'transporte', '#3b82f6'),
('lazer', 'Lazer', 'lazer', '#ec4899'),
('saude', 'Saúde', 'saude', '#ef4444'),
('compras', 'Compras', 'compras', '#14b8a6'),
('educacao', 'Educação', 'educacao', '#6366f1'),
('outros', 'Outros', 'outros', '#6b7280');
COMMIT;
