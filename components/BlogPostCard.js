
'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const BlogPostCard = ({ post, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
    >
      <div className="relative h-48 w-full">
        <Image
          src={post.coverImage || '/images/default-blog-cover.jpg'}
          alt={post.title}
          layout="fill"
          objectFit="cover"
          className="transition-opacity duration-300 hover:opacity-80"
        />
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
          <Link href={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
          <Calendar size={16} className="mr-2" />
          <span className="mr-4">{new Date(post.date).toLocaleDateString('fr-FR')}</span>
          <Clock size={16} className="mr-2" />
          <span>{post.readTime} min de lecture</span>
        </div>
        <Link 
          href={`/blog/${post.slug}`}
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300"
        >
          Lire la suite
          <ArrowRight size={16} className="ml-2" />
        </Link>
      </div>
    </motion.div>
  );
};

export default BlogPostCard;