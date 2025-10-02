import { relations } from "drizzle-orm";
import { pgTable, boolean, varchar, timestamp, pgEnum, uuid, primaryKey, index, jsonb } from "drizzle-orm/pg-core";

export const userRole = pgEnum("user_role", ["admin", "user", "agent", "app_admin"]);



export const users = pgTable("users", {
    id: uuid("id").primaryKey().defaultRandom(),
    dynamicId: varchar("dynamic_id").notNull().unique(),
    name: varchar("name"),
    role: userRole("role").notNull().default("user"),
    email: varchar("email").unique(),
    phone: varchar("phone").notNull().unique(),
    emailVerified: boolean("email_verified").notNull().default(false),
    phoneVerified: boolean("phone_verified").notNull().default(false),
    onboardingAgentId: uuid("onboarding_agent_id"),
    walletAddress: varchar("wallet_address"),
    twitterUsername: varchar("twitter_username"),
    telegramUsername: varchar("telegram_username"),
    discordUsername: varchar("discord_username"),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow(),
    kycCompleted: boolean("kyc_completed").notNull().default(false),
}, (table) => [
    primaryKey({ columns: [table.id] }),
    index("dynamic_id_idx").on(table.dynamicId),
    index("phone_idx").on(table.phone),
]);


export const userKycs = pgTable("user_kycs", {
    id: uuid("id").primaryKey().defaultRandom(),
    userId: uuid("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
    kycId: varchar("kyc_id").notNull(),
    provider: varchar("provider").notNull(),
    status: varchar("status").notNull(),
    data: jsonb("data"),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow(),
}, (table) => [
    primaryKey({ columns: [table.id] }),
    index("user_kycs_user_id_idx").on(table.userId),
]);

export const refreshTokens = pgTable("refresh_tokens", {
    id: uuid("id").primaryKey().defaultRandom(),
    userId: uuid("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
    token: varchar("token").notNull(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow(),
  }, (table) => [
    primaryKey({ columns: [table.id] }),
    index("refresh_tokens_user_id_idx").on(table.userId),
]);


export const referrals = pgTable("referrals", {
    id: uuid("id").primaryKey().defaultRandom(),
    userId: uuid("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
    referralCode: varchar("referral_code").notNull(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const referralCodes = pgTable("referral_codes", {
    id: uuid("id").primaryKey().defaultRandom(),
    code: varchar("code").notNull(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const referralTransactions = pgTable("referral_transactions", {
    id: uuid("id").primaryKey().defaultRandom(),
    userId: uuid("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
    referralCode: varchar("referral_code").notNull(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow(),
});


// userRelations

export const userRelations = relations(users, ({ many }) => ({
    referrals: many(referrals),
    referralTransactions: many(referralTransactions),
    userKycs: many(userKycs),
    refreshTokens: many(refreshTokens),
}));

export const referralRelations = relations(referrals, ({ many }) => ({
    users: many(users),
}));

export const referralCodeRelations = relations(referralCodes, ({ many }) => ({
    referrals: many(referrals),
}));

export const referralTransactionRelations = relations(referralTransactions, ({ many }) => ({
    users: many(users),
}));



export const table = {
    users,
    userKycs,
    refreshTokens,
    referrals,
    referralCodes,
    referralTransactions,
} as const

export type Table = typeof table