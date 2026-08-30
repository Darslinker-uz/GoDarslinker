import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyTelegramInitData } from "@/lib/telegram-auth";
import { signSession } from "@/lib/jwt";

export async function POST(req: NextRequest) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  if (!botToken) {
    return NextResponse.json({ error: "Server sozlanmagan" }, { status: 500 });
  }

  const body = await req.json().catch(() => null);
  const initData = body?.initData;
  if (typeof initData !== "string") {
    return NextResponse.json({ error: "initData kerak" }, { status: 400 });
  }

  let verified;
  try {
    verified = verifyTelegramInitData(initData, botToken);
  } catch {
    return NextResponse.json({ error: "Telegram tasdiqlash muvaffaqiyatsiz" }, { status: 401 });
  }

  const { user } = verified;
  const telegramId = String(user.id);

  const dbUser = await prisma.user.upsert({
    where: { telegramId },
    update: {
      username: user.username,
      firstName: user.first_name,
      photoUrl: user.photo_url,
      lastActiveDate: new Date(),
    },
    create: {
      telegramId,
      username: user.username,
      firstName: user.first_name,
      photoUrl: user.photo_url,
      lastActiveDate: new Date(),
    },
  });

  const token = await signSession(dbUser.id);

  return NextResponse.json({
    token,
    user: {
      id: dbUser.id,
      firstName: dbUser.firstName,
      username: dbUser.username,
      photoUrl: dbUser.photoUrl,
      totalBall: dbUser.totalBall,
      channelSubscribed: dbUser.channelSubscribed,
    },
  });
}
