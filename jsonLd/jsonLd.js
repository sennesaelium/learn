
/* HOME OK */
<script type="application/ld+json">
[
  { 
    "@context": "http://schema.org", 
    "@type": "WebSite", 
    "url": "https://www.vlaanderen.be/", 
    "name": "Vlaanderen.be, de officiële website van de Vlaamse overheid",
    "description": "Vlaanderen.be, uw bron voor diensten en informatie van de Vlaamse overheid",
    "publisher": "Informatie Vlaanderen",
    "inLanguage":"BE-NL"

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

 /*  Nieuwsartikel detail OK */
<script type="application/ld+json">
 {
   "@context": "http://schema.org",
   "@type": "WebPage",
   "name": "[title pagina]",
   "url": "[url van de pagina]",
   "description": "[TagLine]",
   "publisher": "Vlaamse overheid",
   "inLanguage":"BE-NL",
   
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
      "articleBody": "[Paste the whole mess of the article in here]",
      // if an image present
      "image": {
        "@type": "imageObject",
        "url": "https://[link naar image van nieuwsartikel]",
        // te checken op aspect ratio
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

/* Vacature detail OK */
<script type="application/ld+json">
 {
   "@context": "http://schema.org",
   "@type": "WebPage",
   "name": "[title pagina]",
   "url": "[url van de pagina]",
   "description": "[TagLine]",
   "publisher": "Vlaamse overheid",
   "inLanguage":"BE-NL",
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
        "mainEntityOfPage": "[job:link]",
        "title" : "[job:title]",
        "description" : "[job:jobdescription]",
        "qualification:": "[job:profile]",
        "datePosted" : "[job:publicationDate]",
        "validThrough" : "[job:validThrough]",
        "employmentType" : "[job:fulltime]",
        "educationRequirements": "[job:applicatioInfo:degrees]",
        "experienceRequirements": "[job:applicatioInfo:experience]",
        "hiringOrganization" : {
          "@type" : "Organization",
          "name" : "[jobs:items:hiringOrganisation]"
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


/* Persbericht detail */

<script type="application/ld+json">
 {
   "@context": "http://schema.org",
   "@type": "WebPage",
   "name": "[title pagina]",
   "url": "[pressRelease:title]",
   "description": "[TagLine]",
   "publisher": "Vlaamse overheid",
   "inLanguage":"BE-NL",
   
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
    // Content van perbericht detail 
    "mainEntity": 
    {
      "@type": "Article",
      "@id":"https://[]/idVanArtikel",
      "author": "Vlaamse overheid",
      "mainEntityOfPage": "[pressRelease:link]",
      "headline": "[pressRelease:title]",
      "articleBody": "[pressRelease:pressRelease]",
      // if an image present
      "image": {
        "@type": "imageObject",
        "url": "https://[link naar image van nieuwsartikel]",
        // te checken op aspect ratio
        "height": "500",
        "width": "300"
        },
      "datePublished": "[pressRelease:publicationDate]",
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

/* Publicatie detail */
<script type="application/ld+json">
 {
   "@context": "http://schema.org",
   "@type": "WebPage",
   "name": "[publication:title]",
   "url": "[url van page]",
   "description": "[TagLine]",
   "publisher": "Vlaamse overheid",
   "inLanguage":"BE-NL",
   
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
    // Content van publicatie detail 
    "mainEntity": 
    {
      "@type": "Article",
      "@id":"https://[]/idVanArtikel",
      "author": "Vlaamse overheid",
      "mainEntityOfPage": "[publication:link]",
      "headline": "[publication:title]",
      "articleBody": "[publication:abstract]",
      // if an image present
      "image": {
        "@type": "imageObject",
        "url": "publication:covers:thumbnailURL]",
        // te checken op aspect ratio
        "height": "500",
        "width": "300"
        },
      "datePublished": "[publication:publicationDate]",
      "publisher": {
        "@type": "Organization",
        "name": "publication:publisher"
        }
    }

 }
 </script>


/* Product detail */

/* Organisation detail */

/* Erkende opleiding detil*/

/* Beslissing Vlaamse Regering detail*/




/* Organisations hub - home page OK */
<script type="application/ld+json">
 {
   "@context": "http://schema.org",
   "@type": "WebPage",
   "name": "[title pagina]",
   "url": "[url van de pagina]",
   "description": "[organisationhubs:items:intro]",
   "publisher": "[organisationhubs:items:organisationhubType + title]",
   "inLanguage":"BE-NL",
   "significantLink": [
     // hier de themeHighLights
    "https://",
    "https://"
  ],
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
    }

 }
 </script>

 /* Organisations hub - Contact */

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


