import React from 'react';
import { getAllPosts } from '../../lib/api';
import BlogPostCard from '../../components/BlogPostCard';

export const metadata = {
  title: 'Blog | FamaLink',
  description: 'Découvrez nos derniers articles sur la gestion de l\'e-réputation et le personal branding.',
};

export default function BlogList() {
  const posts = getAllPosts();

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-12 relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-gray-100 via-blue-100 to-gray-100 dark:from-gray-900 dark:via-blue-900 dark:to-gray-900 w-full">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mt-24 text-center mb-12 text-gray-800 dark:text-white">
          Notre Blog
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {posts.map((post, index) => (
            <BlogPostCard key={post.slug} post={post} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}