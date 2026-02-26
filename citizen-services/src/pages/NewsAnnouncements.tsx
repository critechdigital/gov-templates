import { useState } from 'react';
import { Search, Tag, ChevronRight, Eye } from 'lucide-react';
import { newsArticles } from '../data/mockData';

const NewsAnnouncements = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null);

  const categories = ['All', ...Array.from(new Set(newsArticles.map(article => article.category)))];

  const filteredArticles = newsArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Advisories': return 'bg-red-100 text-red-800';
      case 'Events': return 'bg-green-100 text-green-800';
      case 'Programs': return 'bg-blue-100 text-blue-800';
      case 'Ordinances': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  if (selectedArticle !== null) {
    const article = newsArticles.find(a => a.id === selectedArticle);
    if (!article) return null;

    return (
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Back Button */}
        <div>
          <button
            onClick={() => setSelectedArticle(null)}
            className="flex items-center text-[#0038A8] hover:text-blue-700 font-medium"
          >
            <ChevronRight className="h-4 w-4 mr-1 transform rotate-180" />
            Back to News
          </button>
        </div>

        {/* Article */}
        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-64 bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500">Article Image</span>
          </div>
          
          <div className="p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className={`px-3 py-1 text-sm font-medium rounded-full ${getCategoryColor(article.category)}`}>
                {article.category}
              </span>
              <span className="text-gray-500 text-sm">{formatDate(article.date)}</span>
            </div>

            <h1 className="text-3xl font-bold text-gray-800 mb-6">{article.title}</h1>

            <div className="prose max-w-none">
              <p className="text-lg text-gray-600 mb-6">{article.excerpt}</p>
              
              <div className="text-gray-700 leading-relaxed space-y-4">
                <p>{article.content}</p>
                
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.
                </p>

                <p>
                  Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi 
                  optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, 
                  omnis dolor repellendus.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>Published: {formatDate(article.date)}</span>
                <span className="flex items-center">
                  <Eye className="h-4 w-4 mr-1" />
                  {Math.floor(Math.random() * 500) + 100} views
                </span>
              </div>
            </div>
          </div>
        </article>

        {/* Related Articles */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {newsArticles
              .filter(a => a.category === article.category && a.id !== article.id)
              .slice(0, 3)
              .map((relatedArticle) => (
                <div 
                  key={relatedArticle.id} 
                  className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => setSelectedArticle(relatedArticle.id)}
                >
                  <div className="h-32 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">News Image</span>
                  </div>
                  <div className="p-4">
                    <span className={`px-2 py-1 text-xs font-medium rounded ${getCategoryColor(relatedArticle.category)}`}>
                      {relatedArticle.category}
                    </span>
                    <h3 className="font-semibold text-gray-800 mt-2 mb-1 line-clamp-2">
                      {relatedArticle.title}
                    </h3>
                    <p className="text-sm text-gray-500">{formatDate(relatedArticle.date)}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">News & Announcements</h1>
        <p className="text-gray-600 text-lg">
          Stay updated with the latest news, announcements, and events from the Municipality of Marilao, Bulacan.
        </p>
      </div>

      {/* Search and Filter */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <input
                type="text"
                placeholder="Search news and announcements..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0038A8] focus:border-transparent"
              />
              <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
          <div className="lg:w-64">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0038A8] focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="mt-4 text-sm text-gray-600">
          Showing {filteredArticles.length} of {newsArticles.length} articles
        </div>
      </div>

      {/* Featured Article */}
      {filteredArticles.length > 0 && (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3">
              <div className="h-64 md:h-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Featured Image</span>
              </div>
            </div>
            <div className="md:w-2/3 p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-red-100 text-red-800 px-2 py-1 text-xs font-medium rounded">
                  FEATURED
                </span>
                <span className={`px-2 py-1 text-xs font-medium rounded ${getCategoryColor(filteredArticles[0].category)}`}>
                  {filteredArticles[0].category}
                </span>
                <span className="text-gray-500 text-sm">{formatDate(filteredArticles[0].date)}</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">{filteredArticles[0].title}</h2>
              <p className="text-gray-600 mb-4">{filteredArticles[0].excerpt}</p>
              <button
                onClick={() => setSelectedArticle(filteredArticles[0].id)}
                className="inline-flex items-center text-[#0038A8] hover:text-blue-700 font-medium"
              >
                Read Full Article <ChevronRight className="h-4 w-4 ml-1" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Articles Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArticles.slice(1).map((article) => (
          <div 
            key={article.id} 
            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => setSelectedArticle(article.id)}
          >
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">News Image</span>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className={`px-2 py-1 text-xs font-medium rounded ${getCategoryColor(article.category)}`}>
                  {article.category}
                </span>
                <span className="text-gray-500 text-xs">{formatDate(article.date)}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                {article.title}
              </h3>
              <p className="text-gray-600 text-sm line-clamp-3 mb-4">{article.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-[#0038A8] font-medium hover:text-blue-700 flex items-center">
                  Read More <ChevronRight className="h-4 w-4 ml-1" />
                </span>
                <span className="text-xs text-gray-400 flex items-center">
                  <Eye className="h-3 w-3 mr-1" />
                  {Math.floor(Math.random() * 300) + 50}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredArticles.length === 0 && (
        <div className="text-center py-12">
          <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-600 mb-2">No articles found</h3>
          <p className="text-gray-500">Try adjusting your search terms or category filter.</p>
        </div>
      )}

      {/* Categories Overview */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Browse by Category</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.filter(cat => cat !== 'All').map((category) => {
            const count = newsArticles.filter(article => article.category === category).length;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`p-4 rounded-lg border-2 transition-all text-left ${
                  selectedCategory === category
                    ? 'border-[#0038A8] bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <Tag className="h-5 w-5 text-[#0038A8]" />
                  <span className="text-sm text-gray-500">{count}</span>
                </div>
                <h4 className="font-semibold text-gray-800">{category}</h4>
              </button>
            );
          })}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gradient-to-r from-[#0038A8] to-blue-600 text-white rounded-lg p-8">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Stay Informed</h3>
          <p className="text-blue-100 mb-6">
            Subscribe to our newsletter to receive the latest news and updates directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="px-6 py-3 bg-white text-[#0038A8] rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsAnnouncements;