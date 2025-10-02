import { JwtPayload, sign, verify } from "jsonwebtoken";
import { eq } from "drizzle-orm";
import { ACCESS_TOKEN_SECRETE, REFRESH_TOKEN_SECRETE } from "../config/constant";
import { db } from "../db/connection";
import { refreshTokens } from "../db/schema";

export type AUTH_TOKENS = {
    refreshToken: string;
    accessToken: string;
    refreshTokenExpiryDate: Date;
    accessTokenExpiryDate: Date;
  };

export interface TokenPayload extends JwtPayload {
  userId: string;
  exp: number;
}


export async function generateTokens(userId: string) {
  const accessToken = await sign(
    { userId, exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60 },
    ACCESS_TOKEN_SECRETE!,
    { algorithm: "HS256" }
  );

  const refreshToken = await sign(
    { userId, exp: Math.floor(Date.now() / 1000) + 30 * 24 * 60 * 60 },
    REFRESH_TOKEN_SECRETE!,
    { algorithm: "HS256" }
  );
  return { accessToken, refreshToken };
}


export async function verifyAccessToken(token: string): Promise<TokenPayload> {
  return verify(token, ACCESS_TOKEN_SECRETE!) as TokenPayload;
}

export async function verifyRefreshToken(token: string): Promise<TokenPayload> {
  return verify(token, REFRESH_TOKEN_SECRETE!) as TokenPayload;
}

export async function storeRefreshToken(params: { userId: string; token: string }) {
  const [stored] = await db
    .insert(refreshTokens)
    .values({
      userId: params.userId,
      token: params.token,
    })
    .returning();
  return stored;
}

export async function getRefreshToken(token: string) {
  const refreshToken = await db.query.refreshTokens.findFirst({
    where: (table, { eq }) => eq(table.token, token),
  });
  return refreshToken;
}

export async function deleteRefreshToken(token: string) {
  await db.delete(refreshTokens).where(eq(refreshTokens.token, token));
}

export async function deleteAllUserRefreshTokens(userId: string) {
  await db.delete(refreshTokens).where(eq(refreshTokens.userId, userId));
}