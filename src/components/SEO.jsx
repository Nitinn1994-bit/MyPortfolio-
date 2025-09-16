import React from 'react'
import { Helmet } from 'react-helmet-async'

function normalizeImagePath(imagePath) {
  if (!imagePath) return undefined
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
    return imagePath
  }
  return imagePath.startsWith('/') ? imagePath : `/${imagePath}`
}

const SEO = ({
  title = "Nitin Narayanaswamy | FP&A, Financial Modeling & Analytics",
  description = "Finance professional specializing in FP&A, financial reporting, valuation, and data-driven modeling. Experienced in building dashboards, portfolio management, and equity research.",
  image = '/Portfolio-picture.jpeg', // make sure the image is in public/
  url = 'https://nitinn1994-bit.github.io/portfolio', // replace with your deployed portfolio URL
  type = 'website',
  twitterHandle = '@yourhandle', // optional: add your Twitter handle
}) => {
  const siteName = 'Nitin Narayanaswamy'
  const imageUrl = normalizeImagePath(image)

  return (
    <Helmet prioritizeSeoTags>
      {/* Title & Description */}
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}

      {/* Open Graph (for LinkedIn, WhatsApp, etc.) */}
      {type && <meta property="og:type" content={type} />}
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {imageUrl && <meta property="og:image" content={imageUrl} />}
      {url && <meta property="og:url" content={url} />}
      <meta property="og:site_name" content={siteName} />

      {/* Twitter (for X/Twitter previews) */}
      <meta name="twitter:card" content="summary_large_image" />
      {twitterHandle && <meta name="twitter:site" content={twitterHandle} />}
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
      {imageUrl && <meta name="twitter:image" content={imageUrl} />}
    </Helmet>
  )
}

export default SEO
