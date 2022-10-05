<div id="top"></div>

# Modern Times Brewery Ecommerce

> A redesign of the Modern Times brewery online store using Sanity CMS and Stripe.

## Table of contents

- [About The Project](#about-the-project)
  - [Built With](#built-with)
  - [Highlights](#highlights)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Acknowledgments](#acknowledgments)
- [Author](#author)

## About The Project

A challenge to myself to redesign my favorite brewery's online store, [Modern Times Brewery](https://www.moderntimesmerch.com/collections/all) , and use Sanity.io as the CMS (content management system) to manage the store's inventory and blog posts and Stripe for checkout.

### Highlights

- Responsive, full-stack, Next.js ecommerce application
- Browse coffee and beer products, view product details, add to cart, and checkout
- Stripe integration for processing payments, shipping rates, and checkout process.
- CRUD (create, read, update, delete) operations are handled by Sanity's Studio
- Blog posts can be written in markdown using Sanity's Markdown plugin

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

- [Next.js](https://nextjs.org/)
- [React.js](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Sanity](https://www.sanity.io/)
- [Stripe](https://stripe.com/)

🌐 [Live Demo](https://antonio-modern-times.vercel.app/)

![screenshot](/public/images/modern-times-homepage-screenshot.png)

<p align="right">(<a href="#top">back to top</a>)</p>

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Have installed the latest stable version of [node.js](https://nodejs.org/en/)
- Sign up for a [Sanity account](https://www.sanity.io/), create your dataset, and obtain your `Sanity Token`, `Project ID`, and `Dataset`.
- Sign up for a [Stripe account](https://stripe.com/) and obtain your `Publishable Key` and `Secret Key`.

<p align="right">(<a href="#top">back to top</a>)</p>

### Installation

Clone repository

```
git clone https://github.com/antonio-lopez/nextjs-drinks-ecommerce.git
```

Install dependencies

```
cd nextjs-drinks-ecommerce
npm install

cd modern-times
npm install
```

Create a `.env` file in the root of your project and fill in these environment variables with your custom keys.

```

NEXT_PUBLIC_SANITY_TOKEN=
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
NEXT_PUBLIC_STRIPE_SECRET_KEY=

```

<p align="right">(<a href="#top">back to top</a>)</p>

## Usage

```
cd nextjs-drinks-ecommerce
npm run dev

```

<p align="right">(<a href="#top">back to top</a>)</p>

## Acknowledgments

- Sanity Query Cheat Sheet
  - [Link](https://www.sanity.io/docs/query-cheat-sheet)
- Modern Times blogs and pictures taken from website
  - [link](http://www.moderntimesbeer.com/)
- Image Extractor to batch extract images
  - [link](https://extract.pics/)

<p align="right">(<a href="#top">back to top</a>)</p>

## Author

👤 **Antonio Lopez**

- Website: [Antonio Lopez](https://www.antoniolopez.me/)
- Github: [@antonio-lopez](https://github.com/antonio-lopez)

<p align="right">(<a href="#top">back to top</a>)</p>
