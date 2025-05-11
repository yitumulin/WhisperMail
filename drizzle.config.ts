import type { Config } from "drizzle-kit";

export default {
  schema: "./app/lib/schema.ts",
  out: "./drizzle/migrations",
  dialect: "sqlite", // ← drizzle-kit 必需字段，不可省略
  dbCredentials: {
    url: "file:local.db" // ← 使用本地 SQLite 文件模拟 D1
  }
} satisfies Config;
