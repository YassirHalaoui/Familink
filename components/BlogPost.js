import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock } from 'lucide-react';

const BlogPost = ({ post }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
    >
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">{post.title}</h1>
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-6">
          <Calendar size={16} className="mr-2" />
          <span className="mr-4">{new Date(post.date).toLocaleDateString('fr-FR')}</span>
          <Clock size={16} className="mr-2" />
          <span>{`${Math.ceil(post.contentHtml.split(' ').length / 200)} min de lecture`}</span>
        </div>
        <div 
          className="prose dark:prose-dark max-w-none"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="font-semibold text-gray-800 dark:text-white">{post.author}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">{post.authorTitle}</p>
        </div>
      </div>
    </motion.article>
  );
};

export default BlogPost;