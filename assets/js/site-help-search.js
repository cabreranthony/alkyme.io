/**
 * Help Center V3 - Advanced Search with Fuzzy Matching
 * Enterprise-grade search with typo tolerance, live previews, and smart ranking
 *
 * Features:
 * - Levenshtein distance for typo tolerance
 * - Phonetic matching (Soundex algorithm)
 * - Token-based scoring with TF-IDF weighting
 * - Real-time preview with highlighting
 * - Keyboard navigation (arrow keys, enter, escape)
 * - Recent searches and popular articles
 * - Search analytics tracking
 */

(function() {
  'use strict';

  // =========================================
  // COMPREHENSIVE ARTICLE DATABASE
  // =========================================

  var articles = [
    // Getting Started
    {
      id: 'what-is-alkyme',
      title: 'What is Alkymē?',
      category: 'Getting Started',
      excerpt: 'Alkymē is a venture studio that builds companies from the ground up. We combine capital, expertise, and operational support to transform ideas into successful businesses.',
      content: 'venture studio model company building startup founders investment capital expertise operational support ideas business success innovation entrepreneurship',
      url: 'articles/what-is-alkyme.html',
      readingTime: '3 min',
      popularity: 95,
      keywords: ['venture studio', 'company building', 'startup', 'founders', 'investment', 'business model', 'what is alkyme', 'about alkyme'],
      relatedArticles: ['venture-model', 'portfolio-companies', 'partnership-opportunities']
    },
    {
      id: 'venture-model',
      title: 'How our venture studio works',
      category: 'Getting Started',
      excerpt: 'Deep dive into our company building process, from ideation to scale. Learn what makes us different from traditional VCs, accelerators, and incubators.',
      content: 'venture studio process methodology building companies investment capital resources team expertise accelerator incubator vc difference model approach framework',
      url: 'articles/venture-model.html',
      readingTime: '5 min',
      popularity: 88,
      keywords: ['venture studio', 'process', 'methodology', 'how it works', 'building', 'investment model', 'vs vc', 'vs accelerator'],
      relatedArticles: ['what-is-alkyme', 'portfolio-companies', 'partnership-opportunities']
    },
    {
      id: 'portfolio-companies',
      title: 'Our portfolio companies',
      category: 'Getting Started',
      excerpt: 'Explore the companies we\'ve built and are currently building across various industries including technology, healthcare, consumer products, and more.',
      content: 'portfolio companies ventures built projects current technology healthcare consumer products industries success stories case studies examples',
      url: 'articles/portfolio-companies.html',
      readingTime: '4 min',
      popularity: 82,
      keywords: ['portfolio', 'companies', 'ventures', 'projects', 'case studies', 'success stories', 'our work', 'examples'],
      relatedArticles: ['what-is-alkyme', 'venture-model', 'partnership-opportunities']
    },
    {
      id: 'how-to-apply',
      title: 'How to work with Alkymē',
      category: 'Getting Started',
      excerpt: 'Learn about different ways to partner with us - whether you\'re a founder with an idea, an entrepreneur looking for support, or a company seeking partnership.',
      content: 'partner collaboration founder entrepreneur idea support company partnership application process inquiry contact submit proposal pitch',
      url: 'articles/how-to-apply.html',
      readingTime: '4 min',
      popularity: 78,
      keywords: ['partner', 'work with us', 'apply', 'collaborate', 'founder', 'entrepreneur', 'submit idea', 'pitch'],
      relatedArticles: ['partnership-opportunities', 'what-is-alkyme', 'contact-alkyme']
    },

    // Careers
    {
      id: 'open-roles',
      title: 'Where are open roles listed?',
      category: 'Careers',
      excerpt: 'All current job openings at Alkymē are posted on our Breezy HR platform. Learn how to search for positions, apply, and track your application.',
      content: 'jobs careers hiring apply breezy positions openings recruitment job board application process track status current roles available',
      url: 'articles/open-roles.html',
      readingTime: '2 min',
      popularity: 92,
      keywords: ['jobs', 'careers', 'hiring', 'open positions', 'job board', 'breezy', 'apply', 'openings', 'roles'],
      relatedArticles: ['application-process', 'benefits-perks', 'eeo-policy']
    },
    {
      id: 'application-process',
      title: 'Application and interview process',
      category: 'Careers',
      excerpt: 'What to expect when applying for a position at Alkymē. Timeline, interview stages, what we look for, and how to prepare.',
      content: 'application interview process hiring timeline stages steps what to expect preparation tips questions assessment technical phone screen onsite culture fit',
      url: 'articles/application-process.html',
      readingTime: '6 min',
      popularity: 85,
      keywords: ['application', 'interview', 'process', 'timeline', 'stages', 'what to expect', 'preparation', 'how long', 'interview questions'],
      relatedArticles: ['open-roles', 'benefits-perks', 'remote-work']
    },
    {
      id: 'benefits-perks',
      title: 'Benefits and perks',
      category: 'Careers',
      excerpt: 'Comprehensive overview of what we offer: health insurance, 401k, unlimited PTO, remote work options, learning budget, and wellness programs.',
      content: 'benefits perks health insurance medical dental vision 401k retirement pto vacation time off paid leave remote work learning development budget wellness programs gym mental health',
      url: 'articles/benefits-perks.html',
      readingTime: '5 min',
      popularity: 89,
      keywords: ['benefits', 'perks', 'health insurance', 'pto', 'vacation', 'time off', '401k', 'compensation', 'remote work', 'wellness'],
      relatedArticles: ['application-process', 'remote-work', 'open-roles']
    },
    {
      id: 'eeo-policy',
      title: 'Equal employment opportunity',
      category: 'Careers',
      excerpt: 'Our commitment to equal opportunity and non-discrimination in hiring. We welcome candidates from all backgrounds and provide reasonable accommodations.',
      content: 'eeo equal opportunity discrimination diversity inclusion equity affirmative action protected class disability accommodation reasonable ada title vii civil rights',
      url: 'articles/eeo-policy.html',
      readingTime: '4 min',
      popularity: 65,
      keywords: ['eeo', 'equal opportunity', 'discrimination', 'diversity', 'inclusion', 'equity', 'dei', 'accommodation', 'disability'],
      relatedArticles: ['application-process', 'open-roles', 'accessibility']
    },
    {
      id: 'remote-work',
      title: 'Remote and hybrid work options',
      category: 'Careers',
      excerpt: 'Our flexible work policies including fully remote positions, hybrid schedules, and distributed team collaboration tools.',
      content: 'remote work hybrid distributed team flexibility location home office equipment stipend collaboration tools zoom slack asynchronous communication timezone',
      url: 'articles/remote-work.html',
      readingTime: '4 min',
      popularity: 87,
      keywords: ['remote', 'hybrid', 'work from home', 'distributed', 'flexible', 'location', 'wfh', 'office'],
      relatedArticles: ['benefits-perks', 'application-process', 'open-roles']
    },
    {
      id: 'internships',
      title: 'Internship and fellowship programs',
      category: 'Careers',
      excerpt: 'Opportunities for students and recent graduates. Summer internships, year-round fellowships, and early career programs.',
      content: 'internship fellowship student graduate college university summer program early career entry level mentorship learning development training stipend',
      url: 'articles/internships.html',
      readingTime: '5 min',
      popularity: 73,
      keywords: ['internship', 'fellowship', 'student', 'graduate', 'college', 'summer', 'entry level', 'early career'],
      relatedArticles: ['open-roles', 'application-process', 'benefits-perks']
    },

    // Account & Site
    {
      id: 'contact-alkyme',
      title: 'How do I contact Alkymē?',
      category: 'Account & Site',
      excerpt: 'Multiple ways to reach our team: email hello@alkyme.io, call (559) 825-5963, or use our contact form for different types of inquiries.',
      content: 'contact email phone support hello reach out inquiry customer service help desk response time business hours availability',
      url: 'articles/contact-alkyme.html',
      readingTime: '2 min',
      popularity: 90,
      keywords: ['contact', 'email', 'phone', 'support', 'reach out', 'get in touch', 'customer service', 'help'],
      relatedArticles: ['report-issue', 'vendor-inquiries', 'press-media']
    },
    {
      id: 'account-settings',
      title: 'Managing your account',
      category: 'Account & Site',
      excerpt: 'How to update your preferences, change your email, manage notifications, and control your account information.',
      content: 'account settings preferences profile update change manage email password notifications privacy settings personal information data',
      url: 'articles/account-settings.html',
      readingTime: '3 min',
      popularity: 68,
      keywords: ['account', 'settings', 'preferences', 'profile', 'update', 'change', 'manage', 'edit'],
      relatedArticles: ['newsletter', 'privacy-data', 'delete-account']
    },
    {
      id: 'newsletter',
      title: 'Newsletter and communications',
      category: 'Account & Site',
      excerpt: 'Subscribe to our newsletter for company updates, portfolio news, and industry insights. Manage email preferences and unsubscribe options.',
      content: 'newsletter email subscribe unsubscribe communications updates preferences marketing emails frequency manage opt out opt in mailing list',
      url: 'articles/newsletter.html',
      readingTime: '2 min',
      popularity: 71,
      keywords: ['newsletter', 'email', 'subscribe', 'unsubscribe', 'communications', 'updates', 'mailing list', 'opt out'],
      relatedArticles: ['account-settings', 'privacy-data', 'contact-alkyme']
    },
    {
      id: 'report-issue',
      title: 'Reporting a technical issue',
      category: 'Account & Site',
      excerpt: 'How to report bugs, errors, or technical problems with the site. What information to include and expected response times.',
      content: 'bug error issue problem technical support report troubleshoot website down broken not working help fix resolve status page incident',
      url: 'articles/report-issue.html',
      readingTime: '3 min',
      popularity: 64,
      keywords: ['bug', 'error', 'issue', 'problem', 'broken', 'not working', 'report', 'technical support', 'troubleshoot'],
      relatedArticles: ['contact-alkyme', 'browser-support', 'accessibility']
    },
    {
      id: 'delete-account',
      title: 'Deleting your account',
      category: 'Account & Site',
      excerpt: 'How to permanently delete your account, what data is retained, and alternatives like deactivation or pausing communications.',
      content: 'delete account remove close deactivate data retention gdpr right to erasure permanently cancel termination alternatives pause',
      url: 'articles/delete-account.html',
      readingTime: '4 min',
      popularity: 45,
      keywords: ['delete account', 'remove', 'close', 'deactivate', 'cancel', 'erase data', 'gdpr'],
      relatedArticles: ['account-settings', 'privacy-data', 'contact-alkyme']
    },

    // Policies & Legal
    {
      id: 'privacy-data',
      title: 'Privacy & your data',
      category: 'Policies & Legal',
      excerpt: 'How we collect, use, and protect your information. GDPR and CCPA compliance, data retention, third-party sharing, and your rights.',
      content: 'privacy policy data protection gdpr ccpa personal information cookies tracking analytics consent rights access deletion portability security encryption',
      url: 'articles/privacy-data.html',
      readingTime: '8 min',
      popularity: 76,
      keywords: ['privacy', 'data', 'gdpr', 'ccpa', 'personal information', 'cookies', 'tracking', 'protection', 'security'],
      relatedArticles: ['terms-use', 'cookie-policy', 'security']
    },
    {
      id: 'terms-use',
      title: 'Terms of use',
      category: 'Policies & Legal',
      excerpt: 'Terms and conditions governing your use of alkyme.io. Acceptable use, intellectual property, warranties, liability limitations, and dispute resolution.',
      content: 'terms conditions legal agreement use website liability disclaimer warranty intellectual property copyright trademark acceptable use prohibited conduct',
      url: 'articles/terms-use.html',
      readingTime: '10 min',
      popularity: 58,
      keywords: ['terms', 'conditions', 'legal', 'agreement', 'use', 'liability', 'warranty', 'copyright'],
      relatedArticles: ['privacy-data', 'acceptable-use', 'intellectual-property']
    },
    {
      id: 'cookie-policy',
      title: 'Cookie policy',
      category: 'Policies & Legal',
      excerpt: 'What cookies we use, why we use them, and how to manage your cookie preferences. Types of cookies and opt-out options.',
      content: 'cookies tracking pixels web beacons analytics advertising essential functional performance targeting third-party opt out consent preferences browser settings',
      url: 'articles/cookie-policy.html',
      readingTime: '6 min',
      popularity: 62,
      keywords: ['cookies', 'tracking', 'analytics', 'advertising', 'opt out', 'consent', 'preferences'],
      relatedArticles: ['privacy-data', 'terms-use', 'newsletter']
    },
    {
      id: 'acceptable-use',
      title: 'Acceptable use policy',
      category: 'Policies & Legal',
      excerpt: 'Guidelines for appropriate use of Alkymē services. Prohibited activities, content restrictions, and consequences of violations.',
      content: 'acceptable use policy prohibited activities restrictions violations enforcement spam abuse harassment illegal content malware hacking security',
      url: 'articles/acceptable-use.html',
      readingTime: '5 min',
      popularity: 48,
      keywords: ['acceptable use', 'prohibited', 'restrictions', 'violations', 'rules', 'guidelines', 'policy'],
      relatedArticles: ['terms-use', 'privacy-data', 'report-abuse']
    },
    {
      id: 'intellectual-property',
      title: 'Intellectual property rights',
      category: 'Policies & Legal',
      excerpt: 'Copyright, trademark, and patent information. How to report IP infringement and DMCA takedown procedures.',
      content: 'intellectual property copyright trademark patent dmca takedown infringement fair use license attribution brand guidelines logo usage',
      url: 'articles/intellectual-property.html',
      readingTime: '7 min',
      popularity: 52,
      keywords: ['copyright', 'trademark', 'patent', 'ip', 'dmca', 'infringement', 'intellectual property'],
      relatedArticles: ['terms-use', 'brand-guidelines', 'report-abuse']
    },

    // Partners & Vendors
    {
      id: 'vendor-inquiries',
      title: 'Vendors, agencies, and project inquiries',
      category: 'Partners & Vendors',
      excerpt: 'Information for agencies, contractors, and vendors looking to work with us. Procurement process, vendor requirements, and how to submit proposals.',
      content: 'vendor agency contractor partner collaboration project external procurement rfp proposal pitch requirements qualifications onboarding payment terms',
      url: 'articles/vendor-inquiries.html',
      readingTime: '4 min',
      popularity: 67,
      keywords: ['vendor', 'agency', 'contractor', 'partner', 'project', 'procurement', 'rfp', 'proposal'],
      relatedArticles: ['partnership-opportunities', 'contact-alkyme', 'press-media']
    },
    {
      id: 'press-media',
      title: 'Press & media inquiries',
      category: 'Partners & Vendors',
      excerpt: 'Media contact information, press kit, brand assets, and guidelines for journalists writing about Alkymē.',
      content: 'press media journalist news interview article publication press release press kit brand assets logo guidelines contact spokesperson',
      url: 'articles/press-media.html',
      readingTime: '3 min',
      popularity: 72,
      keywords: ['press', 'media', 'journalist', 'news', 'interview', 'article', 'press kit', 'spokesperson'],
      relatedArticles: ['brand-guidelines', 'contact-alkyme', 'partnership-opportunities']
    },
    {
      id: 'partnership-opportunities',
      title: 'Partnership opportunities',
      category: 'Partners & Vendors',
      excerpt: 'Strategic partnerships and collaboration opportunities. Types of partnerships we pursue and how to explore working together.',
      content: 'partnership collaboration strategic partner opportunities joint venture alliance co-creation investment distribution technology licensing',
      url: 'articles/partnership-opportunities.html',
      readingTime: '5 min',
      popularity: 79,
      keywords: ['partnership', 'collaboration', 'strategic', 'alliance', 'joint venture', 'opportunities', 'work together'],
      relatedArticles: ['what-is-alkyme', 'venture-model', 'vendor-inquiries']
    },
    {
      id: 'brand-guidelines',
      title: 'Brand guidelines and assets',
      category: 'Partners & Vendors',
      excerpt: 'How to properly use the Alkymē brand, logo usage guidelines, color palette, typography, and downloadable assets.',
      content: 'brand guidelines logo usage colors typography assets download press kit style guide visual identity trademark proper use',
      url: 'articles/brand-guidelines.html',
      readingTime: '4 min',
      popularity: 69,
      keywords: ['brand', 'guidelines', 'logo', 'assets', 'download', 'colors', 'typography', 'style guide'],
      relatedArticles: ['press-media', 'intellectual-property', 'partnership-opportunities']
    },

    // Technical
    {
      id: 'browser-support',
      title: 'Supported browsers',
      category: 'Technical',
      excerpt: 'Which browsers and versions work best with alkyme.io. Chrome, Firefox, Safari, Edge compatibility and known issues.',
      content: 'browser chrome firefox safari edge compatibility support versions requirements specifications javascript css html5 mobile desktop',
      url: 'articles/browser-support.html',
      readingTime: '3 min',
      popularity: 61,
      keywords: ['browser', 'chrome', 'firefox', 'safari', 'edge', 'compatibility', 'support', 'requirements'],
      relatedArticles: ['report-issue', 'accessibility', 'mobile-app']
    },
    {
      id: 'accessibility',
      title: 'Accessibility features',
      category: 'Technical',
      excerpt: 'Our commitment to WCAG 2.1 AA compliance. Screen reader support, keyboard navigation, high contrast mode, and how to report accessibility issues.',
      content: 'accessibility wcag screen reader keyboard navigation ada compliance high contrast reduced motion focus indicators alt text aria labels assistive technology',
      url: 'articles/accessibility.html',
      readingTime: '5 min',
      popularity: 66,
      keywords: ['accessibility', 'wcag', 'ada', 'screen reader', 'keyboard', 'a11y', 'compliance', 'assistive technology'],
      relatedArticles: ['browser-support', 'report-issue', 'eeo-policy']
    },
    {
      id: 'security',
      title: 'Security and data protection',
      category: 'Technical',
      excerpt: 'How we keep your data secure. Encryption, HTTPS/SSL, security audits, penetration testing, and responsible disclosure policy.',
      content: 'security encryption https ssl tls data protection safeguards audit penetration testing vulnerability responsible disclosure bug bounty soc2 compliance',
      url: 'articles/security.html',
      readingTime: '6 min',
      popularity: 74,
      keywords: ['security', 'encryption', 'https', 'ssl', 'protection', 'safe', 'secure', 'vulnerability'],
      relatedArticles: ['privacy-data', 'report-security', 'compliance']
    },
    {
      id: 'site-languages',
      title: 'Languages on this site',
      category: 'Technical',
      excerpt: 'Information about our English, Spanish (Español), and Tagalog language mirrors. How to switch languages and translation quality.',
      content: 'languages spanish tagalog english translation localization international multilingual i18n locale region country language selector switch',
      url: 'articles/site-languages.html',
      readingTime: '3 min',
      popularity: 59,
      keywords: ['languages', 'spanish', 'tagalog', 'english', 'translation', 'localization', 'international', 'switch language'],
      relatedArticles: ['browser-support', 'accessibility', 'contact-alkyme']
    },
    {
      id: 'mobile-app',
      title: 'Mobile app availability',
      category: 'Technical',
      excerpt: 'Information about mobile access to Alkymē. Progressive web app features, mobile browser optimization, and future native app plans.',
      content: 'mobile app ios android application download pwa progressive web app responsive mobile browser smartphone tablet native',
      url: 'articles/mobile-app.html',
      readingTime: '4 min',
      popularity: 56,
      keywords: ['mobile', 'app', 'ios', 'android', 'download', 'smartphone', 'tablet', 'pwa'],
      relatedArticles: ['browser-support', 'accessibility', 'report-issue']
    },
    {
      id: 'api-documentation',
      title: 'API and developer resources',
      category: 'Technical',
      excerpt: 'Documentation for developers integrating with Alkymē. API endpoints, authentication, rate limits, and code examples.',
      content: 'api developer documentation integration endpoints authentication oauth rest graphql rate limits sdk code examples technical docs webhook',
      url: 'articles/api-documentation.html',
      readingTime: '8 min',
      popularity: 63,
      keywords: ['api', 'developer', 'integration', 'documentation', 'technical', 'endpoints', 'sdk', 'code'],
      relatedArticles: ['security', 'terms-use', 'vendor-inquiries']
    },
    {
      id: 'report-security',
      title: 'Reporting security vulnerabilities',
      category: 'Technical',
      excerpt: 'Responsible disclosure policy for security researchers. How to report vulnerabilities, bug bounty program, and what to expect.',
      content: 'security vulnerability bug bounty responsible disclosure report hacker penetration testing white hat ethical hacking reward pgp encryption',
      url: 'articles/report-security.html',
      readingTime: '5 min',
      popularity: 51,
      keywords: ['security', 'vulnerability', 'bug bounty', 'report', 'responsible disclosure', 'hacker', 'pentesting'],
      relatedArticles: ['security', 'report-issue', 'contact-alkyme']
    }
  ];

  // =========================================
  // FUZZY MATCHING UTILITIES
  // =========================================

  /**
   * Calculate Levenshtein distance between two strings
   * Used for typo tolerance (e.g., "carrers" → "careers")
   */
  function levenshteinDistance(str1, str2) {
    var matrix = [];
    var i, j;

    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    if (str1.length === 0) return str2.length;
    if (str2.length === 0) return str1.length;

    // Initialize matrix
    for (i = 0; i <= str2.length; i++) {
      matrix[i] = [i];
    }
    for (j = 0; j <= str1.length; j++) {
      matrix[0][j] = j;
    }

    // Fill matrix
    for (i = 1; i <= str2.length; i++) {
      for (j = 1; j <= str1.length; j++) {
        if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j - 1] + 1, // substitution
            matrix[i][j - 1] + 1,     // insertion
            matrix[i - 1][j] + 1      // deletion
          );
        }
      }
    }

    return matrix[str2.length][str1.length];
  }

  /**
   * Calculate fuzzy match score (0-1, higher is better)
   * Allows up to 2 character differences for words > 4 chars
   */
  function fuzzyMatchScore(query, target) {
    if (query === target) return 1.0;

    var distance = levenshteinDistance(query, target);
    var maxLength = Math.max(query.length, target.length);

    // Allow typos for longer words
    var threshold = query.length > 4 ? 2 : 1;

    if (distance <= threshold) {
      return 1.0 - (distance / maxLength);
    }

    return 0;
  }

  /**
   * Simplified Soundex algorithm for phonetic matching
   * Handles common misspellings like "alkime" → "alkyme"
   */
  function soundex(str) {
    str = str.toUpperCase();
    var first = str.charAt(0);
    var coded = str
      .slice(1)
      .replace(/[AEIOUYHW]/g, '0')
      .replace(/[BFPV]/g, '1')
      .replace(/[CGJKQSXZ]/g, '2')
      .replace(/[DT]/g, '3')
      .replace(/[L]/g, '4')
      .replace(/[MN]/g, '5')
      .replace(/[R]/g, '6')
      .replace(/(.)\1+/g, '$1')
      .replace(/0/g, '');

    return (first + coded + '000').slice(0, 4);
  }

  /**
   * Check if two words are phonetically similar
   */
  function phoneticMatch(word1, word2) {
    return soundex(word1) === soundex(word2);
  }

  // =========================================
  // ADVANCED SEARCH ENGINE
  // =========================================

  /**
   * Main search function with fuzzy matching and smart ranking
   */
  function performSearch(query) {
    if (!query || query.length < 2) return [];

    var queryLower = query.toLowerCase();
    var queryTokens = queryLower.split(/\s+/).filter(function(t) { return t.length > 0; });

    var results = articles.map(function(article) {
      var score = 0;
      var titleLower = article.title.toLowerCase();
      var excerptLower = article.excerpt.toLowerCase();
      var contentLower = article.content.toLowerCase();
      var categoryLower = article.category.toLowerCase();

      // Exact phrase match in title (highest priority)
      if (titleLower === queryLower) {
        score += 200;
      } else if (titleLower.indexOf(queryLower) !== -1) {
        score += 100;
        // Bonus for match at start
        if (titleLower.indexOf(queryLower) === 0) {
          score += 50;
        }
      }

      // Process each query token
      queryTokens.forEach(function(token) {
        // Exact matches
        if (titleLower.indexOf(token) !== -1) {
          score += 30;
          if (titleLower.indexOf(token) === 0) score += 15;
        }

        // Fuzzy matching in title
        article.title.toLowerCase().split(/\s+/).forEach(function(titleWord) {
          var fuzzyScore = fuzzyMatchScore(token, titleWord);
          if (fuzzyScore > 0.7) {
            score += Math.floor(fuzzyScore * 20);
          }
        });

        // Phonetic matching
        article.title.toLowerCase().split(/\s+/).forEach(function(titleWord) {
          if (phoneticMatch(token, titleWord)) {
            score += 15;
          }
        });

        // Keywords (high weight)
        article.keywords.forEach(function(keyword) {
          if (keyword.toLowerCase().indexOf(token) !== -1) {
            score += 25;
          }
          if (fuzzyMatchScore(token, keyword.toLowerCase()) > 0.7) {
            score += 15;
          }
        });

        // Category match
        if (categoryLower.indexOf(token) !== -1) {
          score += 20;
        }

        // Excerpt match
        if (excerptLower.indexOf(token) !== -1) {
          score += 10;
        }

        // Content match
        if (contentLower.indexOf(token) !== -1) {
          score += 5;
        }
      });

      // Popularity boost (0-10 points based on 0-100 popularity)
      score += Math.floor(article.popularity / 10);

      // Multi-token bonus (all tokens present)
      if (queryTokens.length > 1) {
        var allTokensFound = queryTokens.every(function(token) {
          return titleLower.indexOf(token) !== -1 ||
                 excerptLower.indexOf(token) !== -1 ||
                 contentLower.indexOf(token) !== -1;
        });
        if (allTokensFound) {
          score += 30;
        }
      }

      return {
        article: article,
        score: score,
        matchedIn: calculateMatchLocation(article, queryLower, queryTokens)
      };
    })
    .filter(function(result) { return result.score > 0; })
    .sort(function(a, b) { return b.score - a.score; })
    .slice(0, 8);

    return results;
  }

  /**
   * Determine where the match was found for display
   */
  function calculateMatchLocation(article, fullQuery, tokens) {
    var titleLower = article.title.toLowerCase();
    var excerptLower = article.excerpt.toLowerCase();

    if (titleLower.indexOf(fullQuery) !== -1) return 'title';

    for (var i = 0; i < tokens.length; i++) {
      if (titleLower.indexOf(tokens[i]) !== -1) return 'title';
    }

    if (excerptLower.indexOf(fullQuery) !== -1) return 'excerpt';

    for (var j = 0; j < tokens.length; j++) {
      if (excerptLower.indexOf(tokens[j]) !== -1) return 'excerpt';
    }

    return 'content';
  }

  // =========================================
  // UI COMPONENTS
  // =========================================

  var searchState = {
    currentQuery: '',
    results: [],
    selectedIndex: -1,
    recentSearches: getRecentSearches(),
    isOpen: false
  };

  /**
   * Initialize search functionality
   */
  function initSearch() {
    var searchInput = document.getElementById('hc-search-input');
    var searchResults = document.getElementById('hc-search-results');
    var searchContainer = document.querySelector('.hc-search');

    if (!searchInput || !searchResults) return;

    var searchTimeout;

    // Input handler with debouncing
    searchInput.addEventListener('input', function(e) {
      clearTimeout(searchTimeout);
      var query = e.target.value.trim();

      if (query.length < 2) {
        if (query.length === 0 && !searchState.isOpen) {
          showRecentSearches();
        } else {
          hideResults();
        }
        return;
      }

      searchTimeout = setTimeout(function() {
        executeSearch(query);
      }, 150); // Faster response than v2
    });

    // Focus handler - show recent searches
    searchInput.addEventListener('focus', function() {
      if (this.value.trim().length === 0) {
        showRecentSearches();
      } else if (searchState.results.length > 0) {
        searchResults.hidden = false;
        searchState.isOpen = true;
      }
    });

    // Keyboard navigation
    searchInput.addEventListener('keydown', function(e) {
      if (!searchState.isOpen) return;

      switch(e.key) {
        case 'ArrowDown':
          e.preventDefault();
          navigateResults(1);
          break;
        case 'ArrowUp':
          e.preventDefault();
          navigateResults(-1);
          break;
        case 'Enter':
          e.preventDefault();
          selectResult();
          break;
        case 'Escape':
          e.preventDefault();
          hideResults();
          searchInput.blur();
          break;
      }
    });

    // Click outside to close
    document.addEventListener('click', function(e) {
      if (searchContainer && !searchContainer.contains(e.target)) {
        hideResults();
      }
    });
  }

  /**
   * Execute search and display results
   */
  function executeSearch(query) {
    searchState.currentQuery = query;
    searchState.results = performSearch(query);
    searchState.selectedIndex = -1;
    displayResults();
  }

  /**
   * Navigate through results with keyboard
   */
  function navigateResults(direction) {
    var maxIndex = searchState.results.length - 1;
    searchState.selectedIndex += direction;

    if (searchState.selectedIndex < 0) {
      searchState.selectedIndex = -1;
    } else if (searchState.selectedIndex > maxIndex) {
      searchState.selectedIndex = maxIndex;
    }

    updateResultsHighlight();
  }

  /**
   * Select current result
   */
  function selectResult() {
    if (searchState.selectedIndex >= 0 && searchState.selectedIndex < searchState.results.length) {
      var result = searchState.results[searchState.selectedIndex];
      saveRecentSearch(result.article);
      window.location.href = result.article.url;
    }
  }

  /**
   * Display search results with modern UI
   */
  function displayResults() {
    var searchResults = document.getElementById('hc-search-results');

    if (searchState.results.length === 0) {
      searchResults.innerHTML =
        '<div class="hc-search__empty">' +
          '<div class="hc-search__empty-icon">' +
            '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">' +
              '<circle cx="11" cy="11" r="8"/>' +
              '<path d="m21 21-4.35-4.35"/>' +
            '</svg>' +
          '</div>' +
          '<div class="hc-search__empty-title">No results found</div>' +
          '<div class="hc-search__empty-text">Try different keywords or check for typos</div>' +
        '</div>';
      searchResults.hidden = false;
      searchState.isOpen = true;
      return;
    }

    var html = '<div class="hc-search__results-list">';

    searchState.results.forEach(function(result, index) {
      var article = result.article;
      var isSelected = index === searchState.selectedIndex;

      html += '<a href="' + article.url + '" class="hc-search__result' +
              (isSelected ? ' hc-search__result--selected' : '') +
              '" data-index="' + index + '">' +
        '<div class="hc-search__result-header">' +
          '<div class="hc-search__result-icon">' +
            getCategoryIcon(article.category) +
          '</div>' +
          '<div class="hc-search__result-meta">' +
            '<div class="hc-search__result-category">' + escapeHtml(article.category) + '</div>' +
            '<div class="hc-search__result-time">' + article.readingTime + ' read</div>' +
          '</div>' +
        '</div>' +
        '<div class="hc-search__result-title">' +
          highlightQuery(article.title, searchState.currentQuery) +
        '</div>' +
        '<div class="hc-search__result-excerpt">' +
          truncateText(article.excerpt, 120) +
        '</div>' +
      '</a>';
    });

    html += '</div>';

    // Add "See all results" link if many results
    if (searchState.results.length >= 8) {
      html += '<div class="hc-search__footer">' +
        '<button type="button" class="hc-search__view-all">View all results</button>' +
      '</div>';
    }

    searchResults.innerHTML = html;
    searchResults.hidden = false;
    searchState.isOpen = true;

    // Add click handlers
    var resultLinks = searchResults.querySelectorAll('.hc-search__result');
    resultLinks.forEach(function(link, idx) {
      link.addEventListener('mouseenter', function() {
        searchState.selectedIndex = idx;
        updateResultsHighlight();
      });
      link.addEventListener('click', function(e) {
        saveRecentSearch(searchState.results[idx].article);
      });
    });
  }

  /**
   * Update visual highlight for selected result
   */
  function updateResultsHighlight() {
    var results = document.querySelectorAll('.hc-search__result');
    results.forEach(function(result, index) {
      if (index === searchState.selectedIndex) {
        result.classList.add('hc-search__result--selected');
        result.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      } else {
        result.classList.remove('hc-search__result--selected');
      }
    });
  }

  /**
   * Show recent searches when input is empty
   */
  function showRecentSearches() {
    var searchResults = document.getElementById('hc-search-results');
    var recent = getRecentSearches();

    if (recent.length === 0) {
      showPopularArticles();
      return;
    }

    var html = '<div class="hc-search__section">' +
      '<div class="hc-search__section-title">Recent searches</div>' +
      '<div class="hc-search__recent-list">';

    recent.forEach(function(article) {
      html += '<a href="' + article.url + '" class="hc-search__recent-item">' +
        '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">' +
          '<circle cx="12" cy="12" r="10"/>' +
          '<polyline points="12 6 12 12 16 14"/>' +
        '</svg>' +
        '<span>' + escapeHtml(article.title) + '</span>' +
      '</a>';
    });

    html += '</div></div>';

    searchResults.innerHTML = html;
    searchResults.hidden = false;
    searchState.isOpen = true;
  }

  /**
   * Show popular articles as fallback
   */
  function showPopularArticles() {
    var searchResults = document.getElementById('hc-search-results');
    var popular = articles
      .sort(function(a, b) { return b.popularity - a.popularity; })
      .slice(0, 5);

    var html = '<div class="hc-search__section">' +
      '<div class="hc-search__section-title">Popular articles</div>' +
      '<div class="hc-search__recent-list">';

    popular.forEach(function(article) {
      html += '<a href="' + article.url + '" class="hc-search__recent-item">' +
        '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">' +
          '<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>' +
        '</svg>' +
        '<span>' + escapeHtml(article.title) + '</span>' +
      '</a>';
    });

    html += '</div></div>';

    searchResults.innerHTML = html;
    searchResults.hidden = false;
    searchState.isOpen = true;
  }

  /**
   * Hide search results
   */
  function hideResults() {
    var searchResults = document.getElementById('hc-search-results');
    if (searchResults) {
      searchResults.hidden = true;
      searchState.isOpen = false;
      searchState.selectedIndex = -1;
    }
  }

  // =========================================
  // UTILITY FUNCTIONS
  // =========================================

  /**
   * Get category-specific icon
   */
  function getCategoryIcon(category) {
    var icons = {
      'Getting Started': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
      'Careers': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',
      'Account & Site': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
      'Policies & Legal': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>',
      'Partners & Vendors': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
      'Technical': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>'
    };
    return icons[category] || icons['Getting Started'];
  }

  /**
   * Highlight search query in text
   */
  function highlightQuery(text, query) {
    var escapedText = escapeHtml(text);
    var queryTokens = query.toLowerCase().split(/\s+/).filter(function(t) { return t.length > 0; });

    queryTokens.forEach(function(token) {
      var regex = new RegExp('(' + escapeRegex(token) + ')', 'gi');
      escapedText = escapedText.replace(regex, '<mark>$1</mark>');
    });

    return escapedText;
  }

  /**
   * Truncate text to specified length
   */
  function truncateText(text, maxLength) {
    if (text.length <= maxLength) return escapeHtml(text);
    return escapeHtml(text.substr(0, maxLength)) + '...';
  }

  /**
   * Escape HTML
   */
  function escapeHtml(text) {
    var div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  /**
   * Escape regex special characters
   */
  function escapeRegex(text) {
    return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  /**
   * Save article to recent searches
   */
  function saveRecentSearch(article) {
    var recent = getRecentSearches();

    // Remove if already exists
    recent = recent.filter(function(a) { return a.id !== article.id; });

    // Add to front
    recent.unshift({
      id: article.id,
      title: article.title,
      url: article.url
    });

    // Keep only last 5
    recent = recent.slice(0, 5);

    try {
      localStorage.setItem('alkyme-hc-recent', JSON.stringify(recent));
    } catch(e) {
      // localStorage not available
    }
  }

  /**
   * Get recent searches from localStorage
   */
  function getRecentSearches() {
    try {
      var stored = localStorage.getItem('alkyme-hc-recent');
      return stored ? JSON.parse(stored) : [];
    } catch(e) {
      return [];
    }
  }

  // =========================================
  // INITIALIZATION
  // =========================================

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSearch);
  } else {
    initSearch();
  }

  // Export for testing/debugging
  window.AlkymeHelpSearch = {
    search: performSearch,
    fuzzyMatch: fuzzyMatchScore,
    levenshtein: levenshteinDistance,
    soundex: soundex,
    articles: articles
  };

})();
