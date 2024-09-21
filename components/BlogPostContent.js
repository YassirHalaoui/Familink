'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, ArrowRight } from 'lucide-react';

const BlogPostContent = ({ post, previousPost, nextPost }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto mt-24"
    >
      <div className="relative h-96 w-full">
        <Image
          src={post.coverImage || '/images/default-blog-cover.jpg'}
          alt={post.title}
          layout="fill"
          objectFit="cover"
          className="transition-opacity duration-300"
        />
      </div>
      
      <div className="p-8">
        <Link href="/blog" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-6">
          <ArrowLeft size={20} className="mr-2" />
          Retour aux articles
        </Link>

        <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">{post.title}</h1>
        <div className="flex items-center text-sm text-gray-600 dark:text-gray-300 mb-6">
          <Calendar size={16} className="mr-2" />
          <span className="mr-4">{new Date(post.date).toLocaleDateString('fr-FR')}</span>
          <Clock size={16} className="mr-2" />
          <span>{post.readTime} min de lecture</span>
        </div>
        
        <div 
          className="prose dark:prose-invert max-w-none text-lg text-gray-800 dark:text-gray-200"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
        
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="font-semibold text-xl text-gray-800 dark:text-white">{post.author}</p>
          <p className="text-gray-600 dark:text-gray-300">{post.authorTitle}</p>
        </div>
      </div>

      <div className="flex justify-between items-center bg-gray-100 dark:bg-gray-900 p-6">
        {previousPost ? (
          <Link href={`/blog/${previousPost.slug}`} className="flex items-center text-blue-600 dark:text-blue-400 hover:underline">
            <ArrowLeft size={20} className="mr-2" />
            <div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Article précédent</div>
              <div className="text-gray-800 dark:text-white">{previousPost.title}</div>
            </div>
          </Link>
        ) : (
          <div></div>
        )}
        {nextPost && (
          <Link href={`/blog/${nextPost.slug}`} className="flex items-center text-blue-600 dark:text-blue-400 hover:underline text-right">
            <div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Article suivant</div>
              <div className="text-gray-800 dark:text-white">{nextPost.title}</div>
            </div>
            <ArrowRight size={20} className="ml-2" />
          </Link>
        )}
      </div>
    </motion.article>
  );
};

export default BlogPostContent;