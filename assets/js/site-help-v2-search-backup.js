/**
 * Help Center V2 - Search & Navigation
 * Live search across all articles with instant results
 */

(function() {
  'use strict';

  // Article database - in production, this would come from an API or JSON file
  var articles = [
    {
      id: 'what-is-alkyme',
      title: 'What is Alkymē?',
      category: 'Getting Started',
      excerpt: 'Learn about our venture studio model and how we build companies from the ground up.',
      url: 'articles/what-is-alkyme.html',
      readingTime: '3 min read',
      keywords: 'venture studio model company building startup founders investment'
    },
    {
      id: 'contact-alkyme',
      title: 'How do I contact Alkymē?',
      category: 'Account & Site',
      excerpt: 'Multiple ways to reach our team for different types of inquiries.',
      url: 'articles/contact-alkyme.html',
      readingTime: '2 min read',
      keywords: 'contact email phone support hello reach out inquiry'
    },
    {
      id: 'open-roles',
      title: 'Where are open roles listed?',
      category: 'Careers',
      excerpt: 'Find current job openings and learn about our hiring process.',
      url: 'articles/open-roles.html',
      readingTime: '2 min read',
      keywords: 'jobs careers hiring apply breezy positions openings recruitment'
    },
    {
      id: 'privacy-data',
      title: 'Privacy & your data',
      category: 'Policies & Legal',
      excerpt: 'How we collect, use, and protect your information when you visit our site.',
      url: 'articles/privacy-data.html',
      readingTime: '5 min read',
      keywords: 'privacy policy data protection gdpr ccpa personal information cookies'
    },
    {
      id: 'eeo-policy',
      title: 'Equal employment opportunity',
      category: 'Careers',
      excerpt: 'Our commitment to equal opportunity and non-discrimination in hiring.',
      url: 'articles/eeo-policy.html',
      readingTime: '4 min read',
      keywords: 'eeo equal opportunity discrimination diversity inclusion equity'
    },
    {
      id: 'site-languages',
      title: 'Languages on this site',
      category: 'Technical',
      excerpt: 'Information about our English, Spanish, and Tagalog language mirrors.',
      url: 'articles/site-languages.html',
      readingTime: '2 min read',
      keywords: 'languages spanish tagalog english translation localization international'
    },
    {
      id: 'vendor-inquiries',
      title: 'Vendors, agencies, and project inquiries',
      category: 'Partners & Vendors',
      excerpt: 'Information for agencies, contractors, and vendors looking to work with us.',
      url: 'articles/vendor-inquiries.html',
      readingTime: '3 min read',
      keywords: 'vendor agency contractor partner collaboration project external'
    },
    {
      id: 'press-media',
      title: 'Press & media inquiries',
      category: 'Partners & Vendors',
      excerpt: 'Media contact information and press resources.',
      url: 'articles/press-media.html',
      readingTime: '2 min read',
      keywords: 'press media journalist news interview article publication'
    },
    {
      id: 'terms-use',
      title: 'Terms of use',
      category: 'Policies & Legal',
      excerpt: 'Terms and conditions governing your use of alkyme.io.',
      url: 'articles/terms-use.html',
      readingTime: '6 min read',
      keywords: 'terms conditions legal agreement use website liability'
    },
    {
      id: 'browser-support',
      title: 'Supported browsers',
      category: 'Technical',
      excerpt: 'Which browsers and versions work best with alkyme.io.',
      url: 'articles/browser-support.html',
      readingTime: '2 min read',
      keywords: 'browser chrome firefox safari edge compatibility support'
    },
    {
      id: 'venture-model',
      title: 'How our venture studio works',
      category: 'Getting Started',
      excerpt: 'Deep dive into our company building process and what makes us different.',
      url: 'articles/venture-model.html',
      readingTime: '5 min read',
      keywords: 'venture studio model process methodology building companies investment'
    },
    {
      id: 'application-process',
      title: 'Application and interview process',
      category: 'Careers',
      excerpt: 'What to expect when applying for a position at Alkymē.',
      url: 'articles/application-process.html',
      readingTime: '4 min read',
      keywords: 'application interview process hiring timeline stages steps'
    },
    {
      id: 'benefits-perks',
      title: 'Benefits and perks',
      category: 'Careers',
      excerpt: 'Comprehensive overview of what we offer our team members.',
      url: 'articles/benefits-perks.html',
      readingTime: '3 min read',
      keywords: 'benefits perks health insurance pto vacation time off compensation'
    },
    {
      id: 'account-settings',
      title: 'Managing your account',
      category: 'Account & Site',
      excerpt: 'How to update your preferences and account information.',
      url: 'articles/account-settings.html',
      readingTime: '3 min read',
      keywords: 'account settings preferences profile update change manage'
    },
    {
      id: 'newsletter',
      title: 'Newsletter and communications',
      category: 'Account & Site',
      excerpt: 'How to subscribe, unsubscribe, and manage email preferences.',
      url: 'articles/newsletter.html',
      readingTime: '2 min read',
      keywords: 'newsletter email subscribe unsubscribe communications updates'
    },
    {
      id: 'accessibility',
      title: 'Accessibility features',
      category: 'Technical',
      excerpt: 'Our commitment to accessibility and how to report issues.',
      url: 'articles/accessibility.html',
      readingTime: '3 min read',
      keywords: 'accessibility wcag screen reader keyboard navigation ada'
    },
    {
      id: 'security',
      title: 'Security and data protection',
      category: 'Technical',
      excerpt: 'How we keep your data secure and our security practices.',
      url: 'articles/security.html',
      readingTime: '4 min read',
      keywords: 'security encryption https ssl data protection safeguards'
    },
    {
      id: 'partnership-opportunities',
      title: 'Partnership opportunities',
      category: 'Partners & Vendors',
      excerpt: 'Information about strategic partnerships and collaborations.',
      url: 'articles/partnership-opportunities.html',
      readingTime: '3 min read',
      keywords: 'partnership collaboration strategic partner opportunities joint'
    },
    {
      id: 'portfolio-companies',
      title: 'Our portfolio companies',
      category: 'Getting Started',
      excerpt: 'Learn about the companies we\'ve built and are currently building.',
      url: 'articles/portfolio-companies.html',
      readingTime: '4 min read',
      keywords: 'portfolio companies ventures built projects current'
    },
    {
      id: 'report-issue',
      title: 'Reporting a technical issue',
      category: 'Account & Site',
      excerpt: 'How to report bugs, errors, or technical problems with the site.',
      url: 'articles/report-issue.html',
      readingTime: '2 min read',
      keywords: 'bug error issue problem technical support report troubleshoot'
    }
  ];

  // Initialize search functionality
  function initSearch() {
    var searchInput = document.getElementById('hc-search-input');
    var searchResults = document.getElementById('hc-search-results');

    if (!searchInput || !searchResults) {
      return;
    }

    var searchTimeout;

    // Handle search input
    searchInput.addEventListener('input', function(e) {
      clearTimeout(searchTimeout);

      var query = e.target.value.trim();

      if (query.length < 2) {
        hideResults();
        return;
      }

      // Debounce search
      searchTimeout = setTimeout(function() {
        performSearch(query);
      }, 200);
    });

    // Close results when clicking outside
    document.addEventListener('click', function(e) {
      if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
        hideResults();
      }
    });

    // Handle ESC key
    searchInput.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        hideResults();
        searchInput.blur();
      }
    });
  }

  // Perform search across articles
  function performSearch(query) {
    var searchResults = document.getElementById('hc-search-results');
    var queryLower = query.toLowerCase();
    var queryTokens = queryLower.split(/\s+/).filter(function(token) {
      return token.length > 0;
    });

    // Filter and score articles
    var results = articles
      .map(function(article) {
        var score = 0;
        var titleLower = article.title.toLowerCase();
        var excerptLower = article.excerpt.toLowerCase();
        var keywordsLower = article.keywords.toLowerCase();

        // Score based on matches
        queryTokens.forEach(function(token) {
          // Title matches (highest weight)
          if (titleLower.indexOf(token) !== -1) {
            score += 10;
            if (titleLower.indexOf(token) === 0) {
              score += 5; // Bonus for starting with query
            }
          }

          // Exact title match (huge bonus)
          if (titleLower === queryLower) {
            score += 50;
          }

          // Keywords match (medium weight)
          if (keywordsLower.indexOf(token) !== -1) {
            score += 5;
          }

          // Excerpt match (lower weight)
          if (excerptLower.indexOf(token) !== -1) {
            score += 2;
          }

          // Category match
          if (article.category.toLowerCase().indexOf(token) !== -1) {
            score += 3;
          }
        });

        return {
          article: article,
          score: score
        };
      })
      .filter(function(result) {
        return result.score > 0;
      })
      .sort(function(a, b) {
        return b.score - a.score;
      })
      .slice(0, 8) // Show top 8 results
      .map(function(result) {
        return result.article;
      });

    displayResults(results, query);
  }

  // Display search results
  function displayResults(results, query) {
    var searchResults = document.getElementById('hc-search-results');

    if (results.length === 0) {
      searchResults.innerHTML = '<div class="hc-v2-search__no-results">No articles found for "' + escapeHtml(query) + '"</div>';
      searchResults.hidden = false;
      return;
    }

    var html = results.map(function(article) {
      return '<a href="' + article.url + '" class="hc-v2-search__result">' +
        '<div class="hc-v2-search__result-category">' + escapeHtml(article.category) + '</div>' +
        '<div class="hc-v2-search__result-title">' + highlightQuery(article.title, query) + '</div>' +
        '<div class="hc-v2-search__result-excerpt">' + escapeHtml(article.excerpt) + '</div>' +
      '</a>';
    }).join('');

    searchResults.innerHTML = html;
    searchResults.hidden = false;
  }

  // Hide search results
  function hideResults() {
    var searchResults = document.getElementById('hc-search-results');
    if (searchResults) {
      searchResults.hidden = true;
    }
  }

  // Highlight query in text
  function highlightQuery(text, query) {
    var escapedText = escapeHtml(text);
    var queryTokens = query.toLowerCase().split(/\s+/).filter(function(token) {
      return token.length > 0;
    });

    queryTokens.forEach(function(token) {
      var regex = new RegExp('(' + escapeRegex(token) + ')', 'gi');
      escapedText = escapedText.replace(regex, '<strong>$1</strong>');
    });

    return escapedText;
  }

  // Escape HTML
  function escapeHtml(text) {
    var div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  // Escape regex special characters
  function escapeRegex(text) {
    return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSearch);
  } else {
    initSearch();
  }

})();
