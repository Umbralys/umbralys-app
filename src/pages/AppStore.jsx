import React, { useState } from 'react';
import { 
  BookOpen, Layout, Search, ArrowLeft
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AppStore = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  // App data with multiple categories as arrays
  const apps = [

    {
      id: 'app-3',
      name: 'Npowerment Hub',
      icon: <BookOpen className="w-10 h-10 text-white" />,
      iconBg: 'from-blue-400 to-blue-700',
      categories: ['Business', 'eLearning'],
      description: 'Generative AI learning platform. Master the fundamentals of ChatGPT and advanced data analysis with Anthropic.',
      url: 'https://example.com/sitebuilder',
      featured: false
    },
    
 ];
  
  // Extract unique categories from all apps
  const uniqueCategories = ['All'];
  apps.forEach(app => {
    app.categories.forEach(category => {
      if (!uniqueCategories.includes(category)) {
        uniqueCategories.push(category);
      }
    });
  });
  
  // Filter apps based on active category and search query
  const filteredApps = apps.filter(app => {
    const matchesCategory = activeCategory === 'All' || app.categories.includes(activeCategory);
    const matchesSearch = app.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          app.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  
  // Get featured apps
  const featuredApps = apps.filter(app => app.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Link to="/" className="flex items-center text-gray-800 hover:text-gray-600">
                <ArrowLeft className="w-5 h-5 mr-2" />
                <span>Back to Home</span>
              </Link>
            </div>
            <h1 className="text-xl font-bold text-gray-900">Umbralys Technology App Store</h1>
            <div className="w-24"></div> {/* Spacer for alignment */}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
            <div className="relative flex items-center w-full md:w-80">
              <Search className="w-5 h-5 text-gray-400 absolute left-3" />
              <input
                type="text"
                placeholder="Search apps..."
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0">
              {uniqueCategories.map(category => (
                <button
                  key={category}
                  className={`px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap transition-colors ${
                    activeCategory === category 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Featured Section */}
        {activeCategory === 'All' && searchQuery === '' && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Apps</h2>
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl overflow-hidden shadow-md w-fit mx-auto max-w-md">
              <div className="flex flex-col divide-y divide-blue-200">
                {featuredApps.map(app => (
                  <div key={app.id} className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${app.iconBg} shadow-md flex items-center justify-center`}>
                        {app.icon}
                      </div>
                      <div>
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">{app.name}</h3>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {app.categories.map(category => (
                            <span 
                              key={`${app.id}-${category}`} 
                              className="px-2 py-0.5 text-xs font-medium rounded-full bg-blue-100 text-blue-700"
                            >
                              {category}
                            </span>
                          ))}
                        </div>
                        <p className="text-sm text-gray-600 line-clamp-2 mb-4">{app.description}</p>
                        <a
                          href={app.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-lg transition-colors"
                        >
                          Go to App
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
        
        {/* All Apps */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {activeCategory === 'All' ? 'All Apps' : `${activeCategory} Apps`}
          </h2>
          
          {filteredApps.length === 0 ? (
            <div className="text-center py-12">
              <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-1">No apps found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredApps.map(app => (
                <div key={app.id} className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${app.iconBg} shadow-md flex items-center justify-center`}>
                        {app.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{app.name}</h3>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {app.categories.map(category => (
                            <span 
                              key={`${app.id}-${category}`}
                              className="px-2 py-0.5 text-xs font-medium rounded-full bg-gray-100 text-gray-800"
                              onClick={() => setActiveCategory(category)}
                              style={{ cursor: 'pointer' }}
                            >
                              {category}
                            </span>
                          ))}
                        </div>
                        <p className="text-sm text-gray-600 line-clamp-3 mb-4">{app.description}</p>
                        <a
                          href={app.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-lg transition-colors"
                        >
                          Go to App
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600">
            © {new Date().getFullYear()} Umbralys Technology. All apps are property of Umbralys Technology.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AppStore;