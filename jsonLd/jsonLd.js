
/* HOME */
<script type="application/ld+json">
[
  { 
    "@context": "http://schema.org", 
    "@type": "WebSite", 
    "url": "https://www.vlaanderen.be/", 
    "name": "Vlaanderen.be, de officiële website van de Vlaamse overheid",
    "description": "Vlaanderen.be, uw bron voor diensten en informatie van de Vlaamse overheid",
    "publisher": "Informatie Vlaanderen"

    /*** Zoekblok - deze blok toevoegen van zodra we een zoek op vlaanderen hebben
    "potentialAction": { 
      "@type": "SearchAction", 
      "target": "http://www.example.com/?s={search_term}", 
      "query-input": "required name=search_term" 
      } 
      Einde Zoekblok ***/
  },
  { 
    "@context" : "http://schema.org",
        "@type" : "GovernmentOrganization",
        "url" : "https://www.vlaanderen.be",
        // TODO link naar ons logo jpg, .png, or. gif format
        "logo": "https://",
        "contactPoint" : { 
          "@type" : "ContactPoint",
          "telephone" : "+ 32 2 553 1700.",
          // TODO Check bij peter en lien welk e-mailadres
          "email" : "",
          "contactType" : "customer service",
          "contactOption" : "TollFree",
          "areaServed" : "BE",
          "availableLanguage" : ["Dutch", "English","French"]
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
    "itemListElement": [{
      "@type": "ListItem",
      "position": 1,
      "name": "Homepagina",
      "item": "https://www.vlaanderen.be"
      }]
  }
]
</script>

 /*  Nieuwsartikel detail OK checked*/
<script type="application/ld+json">
 {
   "@context": "http://schema.org",
   "@type": "WebPage",
   "name": "[title pagina]",
   "url": "[url van de pagina]",
   "description": "[TagLine]",
   "publisher": "Vlaamse overheid",
   // Broodkruimel
   "breadcrumb":{
     "@type":"BreadcrumbList",
     "itemListElement":
     [
       {
         "@type":"ListItem",
         "position":"1",
         "item":{
           "@type":"WebSite",
           "@id":"https://[URL van huidige pagina]",
           "name":"[page title]"
           }
         },
         {
          "@type":"ListItem",
          "position":"2",
          "item":{
            "@type":"WebPage",
            "@id":"https://[URL van pagina op niveau 1]",
            "name":"[page title]"
            }
         },
         {
           // broodkruimeltussenniveau's if any
         },
         {
           "@type":"ListItem",
           "position":"[n]",
           "item":{
             "@type":"WebPage",
             "@id":"https://[URL van pagina op niveau n]",
             "name":"[page title]"
             }
           }
     ]
    },
    // Content van newsartikel 
    "mainEntity": 
    {
      "@type": "newsArticle",
      "@id":"https://[]/idVanArtikel",
      "author": "Vlaamse overheid",
      "mainEntityOfPage": "https://[de url van de pagina waar dit artikel op staat]",
      "headline": "[title]",
      "articleBody": "Paste the whole mess of the article in here",
      "image": {
        "@type": "imageObject",
        "url": "https://[link naar image van nieuwsartikel]",
        // te checke op aspect ratio
        "height": "500",
        "width": "300"
        },
      "datePublished": "[publicatie datum]",
      "publisher": {
        "@type": "Organization",
        "name": "Vlaamse overheid",
        "logo": {
          "@type": "imageObject",
          "url": "https://[link naar logo vlaamse overheid in png, gif of jpeg]"
          } 
        }
    }

 }
 </script>

/* Vacature detail */
<script type="application/ld+json">
 {
   "@context": "http://schema.org",
   "@type": "WebPage",
   "name": "[title tag pagina]",
   "url": "[url van de pagina]",
   "description": "[TagLine]",
   "publisher": "Vlaamse overheid",
   // Broodkruimel
   "breadcrumb":{
     "@type":"BreadcrumbList",
     "itemListElement":[{
         "@type":"ListItem",
         "position":"1",
         "item":{
           "@type":"WebSite",
           "@id":"https://[URL van huidige pagina]",
           "name":"[page title]"
           }
         },
         {
         "@type":"ListItem",
         "position":"2",
         "item":{
           "@type":"WebPage",
           "@id":"https://[URL van pagina op niveau 1]",
           "name":"[page title]"
           }
         },
         {
           // ...
         },
         {
           "@type":"ListItem",
           "position":"[n]",
           "item":{
             "@type":"WebPage",
             "@id":"https://[URL van pagina op niveau n]",
             "name":"[page title]"
             }
           }
     ]},
    // Content van vacature zelf
    "mainEntity": 
      {
        "@type" : "JobPosting",
        "title" : "Software Engineer",
        "description" : "<p>Google aspires to be an organization that reflects the globally diverse audience that our products and technology serve. We believe that in addition to hiring the best talent, a diversity of perspectives, ideas and cultures leads to the creation of better products and services.</p>",

        "datePosted" : "2017-01-18",
        "validThrough" : "2017-03-18T00:00",
        "employmentType" : "CONTRACTOR",
        "hiringOrganization" : {
          "@type" : "Organization",
          "name" : "Google",
          "sameAs" : "http://www.google.com",
          "logo" : "http://www.example.com/images/logo.png"
        },
        "jobLocation": {
        "@type": "Place",
          "address": {
          "@type": "PostalAddress",
          "streetAddress": "1600 Amphitheatre Pkwy",
          "addressLocality": ", Mountain View",
          "addressRegion": "CA",
          "postalCode": "94043",
          "addressCountry": "US"
          }
        }
      }

 }
 </script>


/* Persbericht detail */

/* Publicatie detail */

/* Product detail */

/* Organisation detail */

/* Erkende opleiding detil*/

/* Beslissing Vlaamse Regering detail*/




/* Organisations hub */
<script type="application/ld+json">
 {
   "@context": "http://schema.org",
   "@type": "WebPage",
   "name": "[title tag pagina]",
   "url": "[url van de pagina]",
   "description": "[TagLine]",
   "publisher": "Vlaamse overheid",
   // Broodkruimel
   "breadcrumb":{
     "@type":"BreadcrumbList",
     "itemListElement":[{
         "@type":"ListItem",
         "position":"1",
         "item":{
           "@type":"WebSite",
           "@id":"https://[URL van huidige pagina]",
           "name":"[page title]"
           }
         },
         {
         "@type":"ListItem",
         "position":"2",
         "item":{
           "@type":"WebPage",
           "@id":"https://[URL van pagina op niveau 1]",
           "name":"[page title]"
           }
         },
         {
           // ...
         },
         {
           "@type":"ListItem",
           "position":"[n]",
           "item":{
             "@type":"WebPage",
             "@id":"https://[URL van pagina op niveau n]",
             "name":"[page title]"
             }
           }
     ]}

 }
 </script>

 /*  Collectiepagina's */
 <script type="application/ld+json">
 {
   "@context": "http://schema.org",
   "@type": "WebPage",
   "name": "[title tag pagina]",
   "url": "[url van de pagina]",
   "description": "[TagLine]",
   "publisher": "Vlaamse overheid",
   // Broodkruimel
   "breadcrumb":{
     "@type":"BreadcrumbList",
     "itemListElement":[{
         "@type":"ListItem",
         "position":"1",
         "item":{
           "@type":"WebSite",
           "@id":"https://[URL van huidige pagina]",
           "name":"[page title]"
           }
         },
         {
         "@type":"ListItem",
         "position":"2",
         "item":{
           "@type":"WebPage",
           "@id":"https://[URL van pagina op niveau 1]",
           "name":"[page title]"
           }
         },
         {
           // ...
         },
         {
           "@type":"ListItem",
           "position":"[n]",
           "item":{
             "@type":"WebPage",
             "@id":"https://[URL van pagina op niveau n]",
             "name":"[page title]"
             }
           }
     ]}

 }
 </script>

 
/* Pagina's met story block: topic sub page, journey, story, article */
 <script type="application/ld+json">
 {
   "@context": "http://schema.org",
   "@type": "WebPage",
   "name": "[title tag pagina]",
   "url": "[url van de pagina]",
   "description": "[TagLine]",
   "publisher": "Vlaamse overheid",
   // Broodkruimel
   "breadcrumb":{
     "@type":"BreadcrumbList",
     "itemListElement":[{
         "@type":"ListItem",
         "position":"1",
         "item":{
           "@type":"WebSite",
           "@id":"https://[URL van huidige pagina]",
           "name":"[page title]"
           }
         },
         {
         "@type":"ListItem",
         "position":"2",
         "item":{
           "@type":"WebPage",
           "@id":"https://[URL van pagina op niveau 1]",
           "name":"[page title]"
           }
         },
         {
           // ...
         },
         {
           "@type":"ListItem",
           "position":"[n]",
           "item":{
             "@type":"WebPage",
             "@id":"https://[URL van pagina op niveau n]",
             "name":"[page title]"
             }
           }
     ]},
    // De story blocks
    "mainEntity": [
      {
      "@type": "newsArticle",
      "@id": "https://[]",
      "author": "Vlaamse overheid",
      "headline": "[title]",
      "articleBody": "Paste the whole mess of code in here",
      "image": {
          "@type": "imageObject",
          "url": "https://[link naar image van nieuwsartikel]",
          "height": "500",
          "width": "300"
          },
      "datePublished": "[publication date]",
      "publisher": {
        "@type": "Organization",
        "name": "Vlaamse overheid 1",
        "logo": {
          "@type": "imageObject",
          "url": "httpS://[link naar logo vlaamse overheid in png, gif of jpeg]"
          } 
        },
      "mainEntityOfPage": "[]",
      },
      {
        "@type": "newsArticle",
        "@id": "https://[]",
        "author": "Vlaamse overheid",
        "headline": "[title]",
        "articleBody": "Paste the whole mess of code in here",
        "image": {
            "@type": "imageObject",
            "url": "https://[link naar image van nieuwsartikel]",
            "height": "500",
            "width": "300"
            },
        "datePublished": "[publication date]",
        "publisher": {
          "@type": "Organization",
          "name": "Vlaamse overheid",
          "logo": {
            "@type": "imageObject",
            "url": "httpS://[link naar logo vlaamse overheid in png, gif of jpeg]"
            } 
          },
        "mainEntityOfPage": "[]",
        }
    ]

 }
 </script>


