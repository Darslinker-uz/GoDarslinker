import { createHmac } from "crypto";

interface TelegramUser {
  id: number;
  first_name?: string;
  username?: string;
  photo_url?: string;
}

interface VerifiedInitData {
  user: TelegramUser;
  authDate: number;
}

const MAX_AUTH_AGE_SECONDS = 24 * 60 * 60;

export function verifyTelegramInitData(initData: string, botToken: string): VerifiedInitData {
  const params = new URLSearchParams(initData);
  const hash = params.get("hash");
  if (!hash) throw new Error("initData: hash yo'q");
  params.delete("hash");

  const dataCheckString = [...params.entries()]
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([key, value]) => `${key}=${value}`)
    .join("\n");

  const secretKey = createHmac("sha256", "WebAppData").update(botToken).digest();
  const computedHash = createHmac("sha256", secretKey).update(dataCheckString).digest("hex");

  if (computedHash !== hash) {
    throw new Error("initData: imzo mos kelmadi");
  }

  const authDate = Number(params.get("auth_date"));
  if (!authDate || Date.now() / 1000 - authDate > MAX_AUTH_AGE_SECONDS) {
    throw new Error("initData: muddati o'tgan");
  }

  const userRaw = params.get("user");
  if (!userRaw) throw new Error("initData: user ma'lumoti yo'q");
  const user = JSON.parse(userRaw) as TelegramUser;

  return { user, authDate };
}
