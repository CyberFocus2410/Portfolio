import { NextRequest, NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";

const REVALIDATE_SECRET = process.env.SANITY_REVALIDATE_SECRET || "dev-revalidate-secret";

export async function POST(req: NextRequest) {
  try {
    const authHeader = req.headers.get("authorization");
    const secretParam = req.nextUrl.searchParams.get("secret");

    const providedSecret =
      secretParam ||
      (authHeader?.startsWith("Bearer ") ? authHeader.slice(7) : null);

    if (providedSecret !== REVALIDATE_SECRET && process.env.NODE_ENV === "production") {
      return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
    }

    const body = await req.json().catch(() => ({}));
    const { _type, slug } = body;

    // Revalidate affected routes
    revalidatePath("/");
    revalidatePath("/work");
    revalidatePath("/certificates");
    revalidatePath("/hackathons");
    revalidatePath("/skills");
    revalidatePath("/my-story");

    if (_type === "project" && slug?.current) {
      revalidatePath(`/work/${slug.current}`);
      revalidatePath(`/projects/${slug.current}`);
    }

    revalidateTag("sanity-data");

    return NextResponse.json({
      revalidated: true,
      now: Date.now(),
      type: _type || "all",
    });
  } catch (err: any) {
    return NextResponse.json(
      { message: "Error revalidating", error: err?.message },
      { status: 500 }
    );
  }
}
