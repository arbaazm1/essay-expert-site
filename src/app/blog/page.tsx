import { getAllPosts } from '@/lib/posts';
import Link from 'next/link';

export default function BlogPage() {
  const posts = getAllPosts();
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Blog Posts</h1>
      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.slug} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex justify-between items-center text-sm">
                <span className="text-blue-600">{post.category}</span>
                <span className="text-gray-500">
                  {new Date(post.date).toLocaleDateString()}
                </span>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}