// Route : /products/[slug] — aiguillage uniquement, la vue est dans frontend/views.
import type { Metadata } from "next";
import { fetchProductBySlug } from "@/backend/lib/products";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = await fetchProductBySlug(slug);
  return { title: product?.name ?? "Produit" };
}

export { default } from "@/frontend/views/public/ProductDetailView";
