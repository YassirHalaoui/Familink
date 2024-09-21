import { getPostBySlug, getAllPosts } from '../../../lib/api';
import BlogPostContent from '../../../components/BlogPostContent';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default async function Post({ params }) {
  const post = await getPostBySlug(params.slug);
  
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-12 ">
      <div className="container mx-auto px-4 max-w-3xl">
        <BlogPostContent post={post} />
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.slug);
  return {
    title: post.title,
    description: post.excerpt,
  };
}