/* HOME OK */
<script type="application/ld+json">
  [
  {
    "@context": "http://schema.org",
    "@type": "WebPage",
    "url": "https://www.vlaanderen.be/",
    "name": "Vlaanderen.be, de officiële website van de Vlaamse overheid",
    "description": "Vlaanderen.be, uw bron voor diensten en informatie van de Vlaamse overheid",
    "publisher": "Informatie Vlaanderen",
    "significantLink": [
      // hier de themeHighLights
      "https://[themes:link]",
      "https://[themes:link]"
    ],
    "inLanguage": "BE-NL"
    /*** Zoekblok - deze blok toevoegen van zodra we een zoek op vlaanderen hebben
    "potentialAction": {
    "@type": "SearchAction",
      "target": "http://www.example.com/?s={search_term}",
"query-input": "required name=search_term"
}
Einde Zoekblok ***/
  },
  {
    "@context": "http://schema.org",
    "@type": "GovernmentOrganization",
    "url": "https://www.vlaanderen.be",
    // TODO link naar ons logo jpg, .png, or. gif format
    "logo": "https://",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "1700",
      "email": "redactie@vlaanderen.be",
      "contactType": "customer service",
      "contactOption": "TollFree",
      "areaServed": "BE",
      "availableLanguage": [
        "Dutch",
        "English",
        "French"
      ]
    },
    "sameAs": [
      "https://twitter.com/vlaamseoverheid",
      "https://www.facebook.com/vlaamseoverheid",
      "https://www.linkedin.com/company/vlaamse-overheid"
    ]
  },
  {
    "@context": "http://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Homepagina",
        "item": "https://www.vlaanderen.be"
      }
    ]
  }
]
</script>

  /*  Nieuwsartikel detail OK */
  <script type="application/ld+json">
    {
  "@context": "http://schema.org",
  "@type": "WebPage",
  "name": "[title]",
  "url": "[link]",
  "description": "[intro]",
  "publisher": "Vlaamse overheid",
  "inLanguage": "BE-NL",
  // Broodkruimel
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": "1",
        "item": {
          "@type": "WebSite",
          "@id": "https://[URL van huidige pagina]",
          "name": "[page title]"
        }
      },
      {
        "@type": "ListItem",
        "position": "2",
        "item": {
          "@type": "WebPage",
          "@id": "https://[URL van pagina op niveau 1]",
          "name": "[page title]"
        }
      },
      {
        // broodkruimeltussenniveau's if any
      },
      {
        "@type": "ListItem",
        "position": "[n]",
        "item": {
          "@type": "WebPage",
          "@id": "https://[URL van pagina op niveau n]",
          "name": "[page title]"
        }
      }
    ]
  },
  // Content van newsartikel
  "mainEntity": {
    "@type": "newsArticle",
    "@id": "https://[link]",
    "author": "Vlaamse overheid",
    "mainEntityOfPage": "https://[link]",
    "headline": "[title]",
    "articleBody": "[intro]",
    // if an image present
    "image": {
      "@type": "imageObject",
      "url": "[image:original]",
      "height": "[height]",
      "width": "[width]"
    },
    "datePublished": "[publicationDate]",
    "publisher": {
      "@type": "Organization",
      "name": "Vlaamse overheid",
      "logo": {
        "@type": "imageObject",
        "url": "[organisation:name]"
      }
    }
  }
}
 </script>

  /* Vacature detail OK */
  <script type="application/ld+json">
    {
  "@context": "http://schema.org",
  "@type": "WebPage",
  "name": "[title]",
  "url": "[link]",
  "description": "[intro]",
  "publisher": "Vlaamse overheid",
  "inLanguage": "BE-NL",
  // Broodkruimel
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": "1",
        "item": {
          "@type": "WebSite",
          "@id": "https://[URL van huidige pagina]",
          "name": "[page title]"
        }
      },
      {
        "@type": "ListItem",
        "position": "2",
        "item": {
          "@type": "WebPage",
          "@id": "https://[URL van pagina op niveau 1]",
          "name": "[page title]"
        }
      },
      {
        // ...
      },
      {
        "@type": "ListItem",
        "position": "[n]",
        "item": {
          "@type": "WebPage",
          "@id": "https://[URL van pagina op niveau n]",
          "name": "[page title]"
        }
      }
    ]
  },
  // Content van vacature zelf
  "mainEntity": {
    "@type": "JobPosting",
    "mainEntityOfPage": "[job:link]",
    "title": "[job:title]",
    "description": "[job:jobdescription]",
    "qualification:": "[job:profile]",
    "datePosted": "[job:publicationDate]",
    "validThrough": "[job:validThrough]",
    "employmentType": "[job:fulltime]",
    "educationRequirements": "[job:applicatioInfo:degrees]",
    "experienceRequirements": "[job:applicatioInfo:experience]",
    "hiringOrganization": {
      "@type": "Organization",
      "name": "[jobs:items:hiringOrganisation]"
      //"sameAs" : "http://www.google.com",
      //"logo" : "http://www.example.com/images/logo.png"
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "[job:applicatioInfo:address]",
        "addressLocality": "[job:applicatioInfo:city]",
        "postalCode": "[job:applicatioInfo:zipCode]",
        "addressCountry": "[job:applicatioInfo:country]"
      }
    }
  }
}
 </script>


  /* Persbericht detail OK */

  <script type="application/ld+json">
    {
  "@context": "http://schema.org",
  "@type": "WebPage",
  "name": "[title pagina]",
  "url": "[pressRelease:title]",
  "description": "[intro]",
  "publisher": "Vlaamse overheid",
  "inLanguage": "BE-NL",
  // Broodkruimel
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": "1",
        "item": {
          "@type": "WebSite",
          "@id": "https://[URL van huidige pagina]",
          "name": "[page title]"
        }
      },
      {
        "@type": "ListItem",
        "position": "2",
        "item": {
          "@type": "WebPage",
          "@id": "https://[URL van pagina op niveau 1]",
          "name": "[page title]"
        }
      },
      {
        // broodkruimeltussenniveau's if any
      },
      {
        "@type": "ListItem",
        "position": "[n]",
        "item": {
          "@type": "WebPage",
          "@id": "https://[URL van pagina op niveau n]",
          "name": "[page title]"
        }
      }
    ]
  },
  // Content van perbericht detail
  "mainEntity": {
    "@type": "Article",
    "@id": "[link]",
    "author": "Vlaamse overheid",
    "mainEntityOfPage": "[link]",
    "headline": "[title]",
    "articleBody": "[pressRelease]",
    // if an image present
    "image": {
      "@type": "imageObject",
      "url": "[image:url]",
      "height": "[height]",
      "width": "[width]"
    },
    "datePublished": "[pressRelease:publicationDate]",
    "publisher": {
      "@type": "Organization",
      "name": "[contacts:firstName, contacts:lastName, contacts:phoneNumber ]",
      "logo": {
        "@type": "imageObject",
        "url": "https://[link naar logo vlaamse overheid in png, gif of jpeg]"
      }
    }
  }
}
 </script>

  /* Publicatie detail OK */
  <script type="application/ld+json">
    {
  "@context": "http://schema.org",
  "@type": "WebPage",
  "name": "[title]",
  "url": "[link]",
  "description": "[abstract]",
  "publisher": "Vlaamse overheid",
  "inLanguage": "BE-NL",
  // Broodkruimel
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": "1",
        "item": {
          "@type": "WebSite",
          "@id": "https://[URL van huidige pagina]",
          "name": "[page title]"
        }
      },
      {
        "@type": "ListItem",
        "position": "2",
        "item": {
          "@type": "WebPage",
          "@id": "https://[URL van pagina op niveau 1]",
          "name": "[page title]"
        }
      },
      {
        // broodkruimeltussenniveau's if any
      },
      {
        "@type": "ListItem",
        "position": "[n]",
        "item": {
          "@type": "WebPage",
          "@id": "https://[URL van pagina op niveau n]",
          "name": "[page title]"
        }
      }
    ]
  },
  // Content van publicatie detail
  "mainEntity": {
    "@type": "Article",
    "author": "Vlaamse overheid",
    "mainEntityOfPage": "[link]",
    "headline": "[title]",
    "articleBody": "[abstract]",
    // if an image present
    "image": {
      "@type": "imageObject",
      "url": "[covers:thumbnailURL]",
      "height": "[height]",
      "width": "[width]"
    },
    "datePublished": "[publicationDate]",
    "publisher": {
      "@type": "Organization",
      "name": "[publisher]"
    }
  }
}
 </script>


  /* Product detail */
  <script type="application/ld+json">
    {
  "@context": "http://schema.org",
  "@type": "WebPage",
  "name": "[title]",
  "url": "[link]",
  "description": "[intro]",
  "publisher": "Vlaamse overheid",
  "inLanguage": "BE-NL",
  // Broodkruimel
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": "1",
        "item": {
          "@type": "WebSite",
          "@id": "https://[URL van huidige pagina]",
          "name": "[page title]"
        }
      },
      {
        "@type": "ListItem",
        "position": "2",
        "item": {
          "@type": "WebPage",
          "@id": "https://[URL van pagina op niveau 1]",
          "name": "[page title]"
        }
      },
      {
        // broodkruimeltussenniveau's if any
      },
      {
        "@type": "ListItem",
        "position": "[n]",
        "item": {
          "@type": "WebPage",
          "@id": "https://[URL van pagina op niveau n]",
          "name": "[page title]"
        }
      }
    ]
  },
  // Content van product
  "mainEntity": {
    "@type": "article",
    "@id": "[link]",
    "author": "[policyDomain + organisations:name]",
    "mainEntityOfPage": "[link]",
    "headline": "[title]",
    "articleBody": "[intro + teaser + conditions + procedures]",
    // if an image present
    "image": {
      "@type": "imageObject",
      "url": "https://[image:original]",
      "height": "[height]",
      "width": "[width]"
    },
    "datePublished": "[publicationsDate]",
    "publisher": {
      "@type": "Organization",
      "name": "[policyDomain + organisations:name]"
    }
  }
}
 </script>
  /* Organisation detail */
  <script type="application/ld+json">
  //todo
  </script>

  /* Erkende opleiding detail - certified trainings OK */
  <script type="application/ld+json">
    {
  "@context": "http://schema.org",
  "@type": "WebPage",
  "name": "[title]",
  "url": "[link]",
  "description": "[description]",
  "publisher": "[trainingSupplier:title]",
  "inLanguage": "BE-NL",
  // Broodkruimel
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": "1",
        "item": {
          "@type": "WebSite",
          "@id": "https://[URL van huidige pagina]",
          "name": "[page title]"
        }
      },
      {
        "@type": "ListItem",
        "position": "2",
        "item": {
          "@type": "WebPage",
          "@id": "https://[URL van pagina op niveau 1]",
          "name": "[page title]"
        }
      },
      {
        // broodkruimeltussenniveau's if any
      },
      {
        "@type": "ListItem",
        "position": "[n]",
        "item": {
          "@type": "WebPage",
          "@id": "https://[URL van pagina op niveau n]",
          "name": "[page title]"
        }
      }
    ]
  }
}
 </script>
  /* Beslissing Vlaamse Regering detail*/
//todo
/* Organisations hub - home page OK */
  <script type="application/ld+json">
    {
  "@context": "http://schema.org",
  "@type": "WebPage",
  "name": "[organisationhubType + title]",
  "url": "[url van de pagina]",
  "description": "[intro]",
  "publisher": "[organisationhubType + title]",
  "inLanguage": "BE-NL",
  "significantLink": [
    // hier de themeHighLights
    "https://[themeHighLights:link]",
    "https://[themeHighLights:link]"
  ],
  // Broodkruimel
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": "1",
        "item": {
          "@type": "WebSite",
          "@id": "https://[URL van huidige pagina]",
          "name": "[page title]"
        }
      },
      {
        "@type": "ListItem",
        "position": "2",
        "item": {
          "@type": "WebPage",
          "@id": "https://[URL van pagina op niveau 1]",
          "name": "[page title]"
        }
      },
      {
        // broodkruimeltussenniveau's if any
      },
      {
        "@type": "ListItem",
        "position": "[n]",
        "item": {
          "@type": "WebPage",
          "@id": "https://[URL van pagina op niveau n]",
          "name": "[page title]"
        }
      }
    ]
  }
}
 </script>

  /* Organisations hub - Contact */
/*  Collectiepagina's overzichtspagina's OK*/
  <script type="application/ld+json">
    {
  "@context": "http://schema.org",
  "@type": "WebPage",
  "name": "[Title]",
  "url": "[link]",
  "description": "[intro]",
  "publisher": "Vlaamse overheid",
  // Broodkruimel
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": "1",
        "item": {
          "@type": "WebSite",
          "@id": "https://[URL van huidige pagina]",
          "name": "[page title]"
        }
      },
      {
        "@type": "ListItem",
        "position": "2",
        "item": {
          "@type": "WebPage",
          "@id": "https://[URL van pagina op niveau 1]",
          "name": "[page title]"
        }
      },
      {
        // ...
      },
      {
        "@type": "ListItem",
        "position": "[n]",
        "item": {
          "@type": "WebPage",
          "@id": "https://[URL van pagina op niveau n]",
          "name": "[page title]"
        }
      }
    ]
  }
}
 </script>


  /*  topic hub: toont de topic sub page links */

  <script type="application/ld+json">
    {
  "@context": "http://schema.org",
  "@type": "WebPage",
  "name": "[title]",
  "url": "[url van de pagina]",
  "description": "[intro]",
  "publisher": "[Organisations:name]",
  "inLanguage": "BE-NL",
  "significantLink": [
    // hier de themeHighLights
    "https://[subTopics:link]",
    "https://[subTopics:link]"
  ],
  // Broodkruimel
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": "1",
        "item": {
          "@type": "WebSite",
          "@id": "https://[URL van huidige pagina]",
          "name": "[page title]"
        }
      },
      {
        "@type": "ListItem",
        "position": "2",
        "item": {
          "@type": "WebPage",
          "@id": "https://[URL van pagina op niveau 1]",
          "name": "[page title]"
        }
      },
      {
        // broodkruimeltussenniveau's if any
      },
      {
        "@type": "ListItem",
        "position": "[n]",
        "item": {
          "@type": "WebPage",
          "@id": "https://[URL van pagina op niveau n]",
          "name": "[page title]"
        }
      }
    ]
  },
  // De story blocks
  "mainEntity": [
    // Per story block - start
    {
      "@type": "article",
      "@id": "https://[link]",
      "author": "Vlaamse overheid",
      //alleen de story blocks 'text'
      "headline": "[stories:title]",
      "articleBody": "[stories:content]",
      "mainEntityOfPage": "[link]",
      "image": {
        "@type": "imageObject",
        "url": "https://[image:original]",
        "height": "[height]",
        "width": "[width]"
      },
      "datePublished": "[publication date]",
      "publisher": {
        "@type": "Organization",
        "name": "organisations:name",
        "logo": {
          "@type": "imageObject",
          "url": "httpS://[link naar logo vlaamse overheid in png, gif of jpeg]"
        }
      }
    },
    //per story block end - geen trailing comma bij laatste story block
  ]
}
 </script>


  /*  topic sub page ok */
  <script type="application/ld+json">
    {
  "@context": "http://schema.org",
  "@type": "WebPage",
  "name": "[title]",
  "url": "[url van de pagina]",
  "description": "[intro]",
  "publisher": "[organisations:name]",
  // Broodkruimel
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": "1",
        "item": {
          "@type": "WebSite",
          "@id": "https://[URL van huidige pagina]",
          "name": "[page title]"
        }
      },
      {
        "@type": "ListItem",
        "position": "2",
        "item": {
          "@type": "WebPage",
          "@id": "https://[URL van pagina op niveau 1]",
          "name": "[page title]"
        }
      },
      {
        // ...
      },
      {
        "@type": "ListItem",
        "position": "[n]",
        "item": {
          "@type": "WebPage",
          "@id": "https://[URL van pagina op niveau n]",
          "name": "[page title]"
        }
      }
    ]
  }
}
 </script>



  /*  Story block based pagina: journey, article, ... */

  <script type="application/ld+json">
  {
  "@context": "http://schema.org",
  "@type": "WebPage",
  "name": "[title]",
  "url": "[link]",
  "description": "[intro]",
  "publisher": "[Organisations:name]",
  "inLanguage": "BE-NL",
  // Broodkruimel
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": "1",
        "item": {
          "@type": "WebSite",
          "@id": "https://[URL van huidige pagina]",
          "name": "[page title]"
        }
      },
      {
        "@type": "ListItem",
        "position": "2",
        "item": {
          "@type": "WebPage",
          "@id": "https://[URL van pagina op niveau 1]",
          "name": "[page title]"
        }
      },
      {
        // broodkruimeltussenniveau's if any
      },
      {
        "@type": "ListItem",
        "position": "[n]",
        "item": {
          "@type": "WebPage",
          "@id": "https://[URL van pagina op niveau n]",
          "name": "[page title]"
        }
      }
    ]
  },
  // Verschillende story block  types
  "mainEntity": [
    // if story block text
    {
      "@type": "article",
      "@id": "https://[link]",
      "author": "Vlaamse overheid",
      "headline": "[stories:title]",
      "articleBody": "[stories:content]",
      "mainEntityOfPage": "[link]",
      "datePublished": "[publication date]",
      "publisher": {
        "@type": "Organization",
        "name": "organisations:name",
        "logo": {
          "@type": "imageObject",
          "url": "httpS://[link naar logo vlaamse overheid in png, gif of jpeg]"
        }
      }
    }, //geen trailing comma bij laatste story block
    //if story block text met image
    {
      "@type": "article",
      "@id": "https://[link]",
      "author": "Vlaamse overheid",
      "headline": "[stories:title]",
      "articleBody": "[stories:content]",
      "mainEntityOfPage": "[link]",
      "image": {
        "@type": "imageObject",
        "url": "https://[image:thumbnails:webimage]",
        "height": "[height]",
        "width": "[width]"
      },
      "datePublished": "[publication date]",
      "publisher": {
        "@type": "Organization",
        "name": "organisations:name",
        "logo": {
          "@type": "imageObject",
          "url": "httpS://[link naar logo vlaamse overheid in png, gif of jpeg]"
        }
      }
    }, //geen trailing comma bij laatste story block
    // if story block quote zonder image
    {
      "@type": "article",
      "@id": "https://[link]",
      "author": "Vlaamse overheid",
      "articleBody": "[stories:quote]",
      "mainEntityOfPage": "[link]",
      "datePublished": "[publication date]",
      "publisher": {
        "@type": "Organization",
        "name": "organisations:name",
        "logo": {
          "@type": "imageObject",
          "url": "httpS://[link naar logo vlaamse overheid in png, gif of jpeg]"
        }
      }
    }, //geen trailing comma bij laatste story block
    // if story block quote met image
    {
      "@type": "article",
      "@id": "https://[link]",
      "author": "Vlaamse overheid",
      "articleBody": "[stories:quote]",
      "mainEntityOfPage": "[link]",
      "image": {
        "@type": "imageObject",
        "url": "https://[image:thumbnails:webimage]",
        "height": "[height]",
        "width": "[width]"
      },
      "datePublished": "[publication date]",
      "publisher": {
        "@type": "Organization",
        "name": "organisations:name",
        "logo": {
          "@type": "imageObject",
          "url": "httpS://[link naar logo vlaamse overheid in png, gif of jpeg]"
        }
      }
    }, //geen trailing comma bij laatste story block
    // if story block collapsible content
    {
      "@type": "article",
      "@id": "https://[link]",
      "author": "Vlaamse overheid",
      "headline": "[stories:title]",
      "articleBody": "[stories:intro + collapsibleContent:title + collapsibleContent:content ]",
      "mainEntityOfPage": "[link]",
      "image": {
        "@type": "imageObject",
        "url": "https://[image:thumbnails:webimage]",
        "height": "[height]",
        "width": "[width]"
      },
      "datePublished": "[publication date]",
      "publisher": {
        "@type": "Organization",
        "name": "organisations:name",
        "logo": {
          "@type": "imageObject",
          "url": "httpS://[link naar logo vlaamse overheid in png, gif of jpeg]"
        }
      }
    }, //geen trailing comma bij laatste story block
    {
      "@type": "article",
      "@id": "https://[link]",
      "author": "Vlaamse overheid",
      "headline": "[stories:title]",
      "articleBody": "[stories:intro + collapsibleContent:title + collapsibleContent:content ]",
      "mainEntityOfPage": "[link]",
      "image": {
        "@type": "imageObject",
        "url": "https://[image:thumbnails:webimage]",
        "height": "[height]",
        "width": "[width]"
      },
      "datePublished": "[publication date]",
      "publisher": {
        "@type": "Organization",
        "name": "organisations:name",
        "logo": {
          "@type": "imageObject",
          "url": "httpS://[link naar logo vlaamse overheid in png, gif of jpeg]"
        }
      }
    }, //geen trailing comma bij laatste story block
  ]
}