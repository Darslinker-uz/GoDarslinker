import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifySession } from "@/lib/jwt";

export async function GET(req: NextRequest) {
  const auth = req.headers.get("authorization");
  const token = auth?.startsWith("Bearer ") ? auth.slice(7) : null;
  if (!token) return NextResponse.json({ error: "Sessiya yo'q" }, { status: 401 });

  let userId: string;
  try {
    userId = await verifySession(token);
  } catch {
    return NextResponse.json({ error: "Sessiya yaroqsiz" }, { status: 401 });
  }

  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) return NextResponse.json({ error: "Foydalanuvchi topilmadi" }, { status: 404 });

  return NextResponse.json({
    id: user.id,
    firstName: user.firstName,
    username: user.username,
    photoUrl: user.photoUrl,
    totalBall: user.totalBall,
    currentStreak: user.currentStreak,
    longestStreak: user.longestStreak,
    channelSubscribed: user.channelSubscribed,
  });
}
