import { SignJWT, jwtVerify } from "jose";

const alg = "HS256";

function getSecret() {
  const secret = process.env.JWT_SECRET;
  if (!secret) throw new Error("JWT_SECRET is not set");
  return new TextEncoder().encode(secret);
}

export async function signSession(userId: string): Promise<string> {
  return new SignJWT({ sub: userId })
    .setProtectedHeader({ alg })
    .setIssuedAt()
    .setExpirationTime("30d")
    .sign(getSecret());
}

export async function verifySession(token: string): Promise<string> {
  const { payload } = await jwtVerify(token, getSecret());
  if (typeof payload.sub !== "string") throw new Error("Sessiya noto'g'ri");
  return payload.sub;
}
