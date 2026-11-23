import { NextRequest, NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";
import { SEED_PROJECTS } from "@/sanity/seed-data";

export async function POST(req: NextRequest) {
  try {
    const authHeader = req.headers.get("authorization");
    const secretParam = req.nextUrl.searchParams.get("secret");

    const providedSecret =
      secretParam ||
      (authHeader?.startsWith("Bearer ") ? authHeader.slice(7) : null);

    const expectedSecret = process.env.SANITY_REVALIDATE_SECRET;

    // Secure authentication check: require token and reject unauthorized callers
    if (!providedSecret || (expectedSecret && providedSecret !== expectedSecret) || (!expectedSecret && process.env.NODE_ENV === "production")) {
      return NextResponse.json(
        { message: "Unauthorized: Invalid or missing authentication credentials" },
        { status: 401 }
      );
    }

    const body = await req.json().catch(() => ({}));
    const { _type, slug } = body;

    // Strict parameterization and bounded object-level validation (BOLA defense)
    const ALLOWED_TYPES = ["project", "certificate", "hackathon", "skill", "story", "page"];
    if (_type && (typeof _type !== "string" || !ALLOWED_TYPES.includes(_type))) {
      return NextResponse.json({ message: "Invalid entity type" }, { status: 400 });
    }

    if (slug) {
      if (typeof slug !== "object" || typeof slug.current !== "string" || !/^[a-z0-9-_]+$/i.test(slug.current)) {
        return NextResponse.json({ message: "Invalid resource slug format" }, { status: 400 });
      }

      // Object-Level Authorization: verify resource belongs to authorized project inventory
      if (_type === "project") {
        const isKnownProject = SEED_PROJECTS.some((p) => p.slug === slug.current);
        if (!isKnownProject && !process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
          return NextResponse.json(
            { message: "Forbidden: Object does not exist or caller lacks access to this resource identifier" },
            { status: 403 }
          );
        }
      }
    }

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
