const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seedProducts() {
  try {
    await prisma.product.create({
      data: {
        name: "Apples",
        slug: "apples",
        description:
          "An apple is a sweet, edible fruit produced by an apple tree (Malus domestica). Apple trees are ... The skin of ripe apples is generally red, yellow, green, pink, or russetted, though many bi- or tri-colored cultivars may be found.",
        type_id: 1,
        price: 2,
        shop_id: 6,
        sale_price: 1.6,
        language: "en",
        min_price: 2,
        max_price: 2,
        sku: 1,
        quantity: 18,
        in_stock: true,
        is_taxable: true,
        shipping_class_id: null,
        status: "PUBLISHED",
        product_type: "SIMPLE",
        height: null,
        width: null,
        image: {
          original:
            "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/1/Apples.jpg",
          thumbnail:
            "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/1/conversions/Apples-thumbnail.jpg",
        },
        video: null,
        gallery: [
          {
            original:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/572/apple-1.png",
            thumbnail:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/572/conversions/apple-1-thumbnail.jpg",
          },
          {
            original:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/573/apple-2.png",
            thumbnail:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/573/conversions/apple-2-thumbnail.jpg",
          },
          {
            original:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/574/apple.png",
            thumbnail:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/574/conversions/apple-thumbnail.jpg",
          },
          {
            original:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/736/apple-2.png",
            thumbnail:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/736/conversions/apple-2-thumbnail.jpg",
          },
        ],
        deleted_at: null,
        author_id: null,
        manufacturer_id: null,
        is_digital: null,
        is_external: null,
        external_product_url: null,
        external_product_button_next: null,
        ratings: 4.67,
        total_reviews: 3,
        rating_count: 5,
        my_review: null,
        in_wishlist: false,
        categories: "fruit",
      },
    });

    await prisma.product.create({
      data: {
        name: "Banana",
        slug: "banana",
        description:
          "A banana is an elongated, edible fruit – botanically a berry – produced by several kinds of large herbaceous flowering plants in the genus Musa. In some countries, bananas used for cooking may be called 'plantains', distinguishing them from dessert bananas.",
        type_id: 1,
        price: 1.5,
        shop_id: 6,
        sale_price: 1.2,
        language: "en",
        min_price: 1.5,
        max_price: 1.5,
        sku: 2,
        quantity: 20,
        in_stock: true,
        is_taxable: true,
        shipping_class_id: null,
        status: "PUBLISHED",
        product_type: "SIMPLE",
        height: null,
        width: null,
        image: {
          original:
            "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/2/Banana.jpg",
          thumbnail:
            "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/2/conversions/Banana-thumbnail.jpg",
        },
        video: null,
        gallery: [
          {
            original:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/575/banana-1.png",
            thumbnail:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/575/conversions/banana-1-thumbnail.jpg",
          },
          {
            original:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/576/banana-2.png",
            thumbnail:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/576/conversions/banana-2-thumbnail.jpg",
          },
          {
            original:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/577/banana.png",
            thumbnail:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/577/conversions/banana-thumbnail.jpg",
          },
          {
            original:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/737/banana-2.png",
            thumbnail:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/737/conversions/banana-2-thumbnail.jpg",
          },
        ],
        deleted_at: null,
        author_id: null,
        manufacturer_id: null,
        is_digital: null,
        is_external: null,
        external_product_url: null,
        external_product_button_next: null,
        ratings: 4.67,
        total_reviews: 3,
        rating_count: 5,
        my_review: null,
        in_wishlist: false,
        categories: "fruit",
      },
    });
    await prisma.product.create({
      data: {
        name: "Apples",
        slug: "apples",
        description:
          "An apple is a sweet, edible fruit produced by an apple tree (Malus domestica). Apple trees are ... The skin of ripe apples is generally red, yellow, green, pink, or russetted, though many bi- or tri-colored cultivars may be found.",
        type_id: 1,
        price: 2,
        shop_id: 6,
        sale_price: 1.6,
        language: "en",
        min_price: 2,
        max_price: 2,
        sku: 1,
        quantity: 18,
        in_stock: true,
        is_taxable: true,
        shipping_class_id: null,
        status: "PUBLISHED",
        product_type: "SIMPLE",
        height: null,
        width: null,
        image: {
          original:
            "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/1/Apples.jpg",
          thumbnail:
            "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/1/conversions/Apples-thumbnail.jpg",
        },
        video: null,
        gallery: [
          {
            original:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/572/apple-1.png",
            thumbnail:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/572/conversions/apple-1-thumbnail.jpg",
          },
          {
            original:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/573/apple-2.png",
            thumbnail:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/573/conversions/apple-2-thumbnail.jpg",
          },
          {
            original:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/574/apple.png",
            thumbnail:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/574/conversions/apple-thumbnail.jpg",
          },
          {
            original:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/736/apple-2.png",
            thumbnail:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/736/conversions/apple-2-thumbnail.jpg",
          },
        ],
        deleted_at: null,
        author_id: null,
        manufacturer_id: null,
        is_digital: null,
        is_external: null,
        external_product_url: null,
        external_product_button_next: null,
        ratings: 4.67,
        total_reviews: 3,
        rating_count: 5,
        my_review: null,
        in_wishlist: false,
        categories: "fruit",
      },
    });

    await prisma.product.create({
      data: {
        name: "Banana",
        slug: "banana",
        description:
          "A banana is an elongated, edible fruit – botanically a berry – produced by several kinds of large herbaceous flowering plants in the genus Musa. In some countries, bananas used for cooking may be called 'plantains', distinguishing them from dessert bananas.",
        type_id: 1,
        price: 1.5,
        shop_id: 6,
        sale_price: 1.2,
        language: "en",
        min_price: 1.5,
        max_price: 1.5,
        sku: 2,
        quantity: 20,
        in_stock: true,
        is_taxable: true,
        shipping_class_id: null,
        status: "PUBLISHED",
        product_type: "SIMPLE",
        height: null,
        width: null,
        image: {
          original:
            "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/2/Banana.jpg",
          thumbnail:
            "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/2/conversions/Banana-thumbnail.jpg",
        },
        video: null,
        gallery: [
          {
            original:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/575/banana-1.png",
            thumbnail:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/575/conversions/banana-1-thumbnail.jpg",
          },
          {
            original:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/576/banana-2.png",
            thumbnail:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/576/conversions/banana-2-thumbnail.jpg",
          },
          {
            original:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/577/banana.png",
            thumbnail:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/577/conversions/banana-thumbnail.jpg",
          },
          {
            original:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/737/banana-2.png",
            thumbnail:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/737/conversions/banana-2-thumbnail.jpg",
          },
        ],
        deleted_at: null,
        author_id: null,
        manufacturer_id: null,
        is_digital: null,
        is_external: null,
        external_product_url: null,
        external_product_button_next: null,
        ratings: 4.67,
        total_reviews: 3,
        rating_count: 5,
        my_review: null,
        in_wishlist: false,
        categories: "fruit",
      },
    });
    await prisma.product.create({
      data: {
        name: "Apples",
        slug: "apples",
        description:
          "An apple is a sweet, edible fruit produced by an apple tree (Malus domestica). Apple trees are ... The skin of ripe apples is generally red, yellow, green, pink, or russetted, though many bi- or tri-colored cultivars may be found.",
        type_id: 1,
        price: 2,
        shop_id: 6,
        sale_price: 1.6,
        language: "en",
        min_price: 2,
        max_price: 2,
        sku: 1,
        quantity: 18,
        in_stock: true,
        is_taxable: true,
        shipping_class_id: null,
        status: "PUBLISHED",
        product_type: "SIMPLE",
        height: null,
        width: null,
        image: {
          original:
            "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/1/Apples.jpg",
          thumbnail:
            "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/1/conversions/Apples-thumbnail.jpg",
        },
        video: null,
        gallery: [
          {
            original:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/572/apple-1.png",
            thumbnail:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/572/conversions/apple-1-thumbnail.jpg",
          },
          {
            original:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/573/apple-2.png",
            thumbnail:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/573/conversions/apple-2-thumbnail.jpg",
          },
          {
            original:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/574/apple.png",
            thumbnail:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/574/conversions/apple-thumbnail.jpg",
          },
          {
            original:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/736/apple-2.png",
            thumbnail:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/736/conversions/apple-2-thumbnail.jpg",
          },
        ],
        deleted_at: null,
        author_id: null,
        manufacturer_id: null,
        is_digital: null,
        is_external: null,
        external_product_url: null,
        external_product_button_next: null,
        ratings: 4.67,
        total_reviews: 3,
        rating_count: 5,
        my_review: null,
        in_wishlist: false,
        categories: "fruit",
      },
    });

    await prisma.product.create({
      data: {
        name: "Banana",
        slug: "banana",
        description:
          "A banana is an elongated, edible fruit – botanically a berry – produced by several kinds of large herbaceous flowering plants in the genus Musa. In some countries, bananas used for cooking may be called 'plantains', distinguishing them from dessert bananas.",
        type_id: 1,
        price: 1.5,
        shop_id: 6,
        sale_price: 1.2,
        language: "en",
        min_price: 1.5,
        max_price: 1.5,
        sku: 2,
        quantity: 20,
        in_stock: true,
        is_taxable: true,
        shipping_class_id: null,
        status: "PUBLISHED",
        product_type: "SIMPLE",
        height: null,
        width: null,
        image: {
          original:
            "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/2/Banana.jpg",
          thumbnail:
            "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/2/conversions/Banana-thumbnail.jpg",
        },
        video: null,
        gallery: [
          {
            original:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/575/banana-1.png",
            thumbnail:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/575/conversions/banana-1-thumbnail.jpg",
          },
          {
            original:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/576/banana-2.png",
            thumbnail:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/576/conversions/banana-2-thumbnail.jpg",
          },
          {
            original:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/577/banana.png",
            thumbnail:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/577/conversions/banana-thumbnail.jpg",
          },
          {
            original:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/737/banana-2.png",
            thumbnail:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/737/conversions/banana-2-thumbnail.jpg",
          },
        ],
        deleted_at: null,
        author_id: null,
        manufacturer_id: null,
        is_digital: null,
        is_external: null,
        external_product_url: null,
        external_product_button_next: null,
        ratings: 4.67,
        total_reviews: 3,
        rating_count: 5,
        my_review: null,
        in_wishlist: false,
        categories: "fruit",
      },
    });
    await prisma.product.create({
      data: {
        name: "Apples",
        slug: "apples",
        description:
          "An apple is a sweet, edible fruit produced by an apple tree (Malus domestica). Apple trees are ... The skin of ripe apples is generally red, yellow, green, pink, or russetted, though many bi- or tri-colored cultivars may be found.",
        type_id: 1,
        price: 2,
        shop_id: 6,
        sale_price: 1.6,
        language: "en",
        min_price: 2,
        max_price: 2,
        sku: 1,
        quantity: 18,
        in_stock: true,
        is_taxable: true,
        shipping_class_id: null,
        status: "PUBLISHED",
        product_type: "SIMPLE",
        height: null,
        width: null,
        image: {
          original:
            "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/1/Apples.jpg",
          thumbnail:
            "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/1/conversions/Apples-thumbnail.jpg",
        },
        video: null,
        gallery: [
          {
            original:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/572/apple-1.png",
            thumbnail:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/572/conversions/apple-1-thumbnail.jpg",
          },
          {
            original:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/573/apple-2.png",
            thumbnail:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/573/conversions/apple-2-thumbnail.jpg",
          },
          {
            original:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/574/apple.png",
            thumbnail:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/574/conversions/apple-thumbnail.jpg",
          },
          {
            original:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/736/apple-2.png",
            thumbnail:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/736/conversions/apple-2-thumbnail.jpg",
          },
        ],
        deleted_at: null,
        author_id: null,
        manufacturer_id: null,
        is_digital: null,
        is_external: null,
        external_product_url: null,
        external_product_button_next: null,
        ratings: 4.67,
        total_reviews: 3,
        rating_count: 5,
        my_review: null,
        in_wishlist: false,
        categories: "fruit",
      },
    });

    await prisma.product.create({
      data: {
        name: "Banana",
        slug: "banana",
        description:
          "A banana is an elongated, edible fruit – botanically a berry – produced by several kinds of large herbaceous flowering plants in the genus Musa. In some countries, bananas used for cooking may be called 'plantains', distinguishing them from dessert bananas.",
        type_id: 1,
        price: 1.5,
        shop_id: 6,
        sale_price: 1.2,
        language: "en",
        min_price: 1.5,
        max_price: 1.5,
        sku: 2,
        quantity: 20,
        in_stock: true,
        is_taxable: true,
        shipping_class_id: null,
        status: "PUBLISHED",
        product_type: "SIMPLE",
        height: null,
        width: null,
        image: {
          original:
            "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/2/Banana.jpg",
          thumbnail:
            "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/2/conversions/Banana-thumbnail.jpg",
        },
        video: null,
        gallery: [
          {
            original:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/575/banana-1.png",
            thumbnail:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/575/conversions/banana-1-thumbnail.jpg",
          },
          {
            original:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/576/banana-2.png",
            thumbnail:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/576/conversions/banana-2-thumbnail.jpg",
          },
          {
            original:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/577/banana.png",
            thumbnail:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/577/conversions/banana-thumbnail.jpg",
          },
          {
            original:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/737/banana-2.png",
            thumbnail:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/737/conversions/banana-2-thumbnail.jpg",
          },
        ],
        deleted_at: null,
        author_id: null,
        manufacturer_id: null,
        is_digital: null,
        is_external: null,
        external_product_url: null,
        external_product_button_next: null,
        ratings: 4.67,
        total_reviews: 3,
        rating_count: 5,
        my_review: null,
        in_wishlist: false,
        categories: "fruit",
      },
    });
    await prisma.product.create({
      data: {
        name: "Apples",
        slug: "apples",
        description:
          "An apple is a sweet, edible fruit produced by an apple tree (Malus domestica). Apple trees are ... The skin of ripe apples is generally red, yellow, green, pink, or russetted, though many bi- or tri-colored cultivars may be found.",
        type_id: 1,
        price: 2,
        shop_id: 6,
        sale_price: 1.6,
        language: "en",
        min_price: 2,
        max_price: 2,
        sku: 1,
        quantity: 18,
        in_stock: true,
        is_taxable: true,
        shipping_class_id: null,
        status: "PUBLISHED",
        product_type: "SIMPLE",
        height: null,
        width: null,
        image: {
          original:
            "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/1/Apples.jpg",
          thumbnail:
            "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/1/conversions/Apples-thumbnail.jpg",
        },
        video: null,
        gallery: [
          {
            original:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/572/apple-1.png",
            thumbnail:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/572/conversions/apple-1-thumbnail.jpg",
          },
          {
            original:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/573/apple-2.png",
            thumbnail:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/573/conversions/apple-2-thumbnail.jpg",
          },
          {
            original:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/574/apple.png",
            thumbnail:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/574/conversions/apple-thumbnail.jpg",
          },
          {
            original:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/736/apple-2.png",
            thumbnail:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/736/conversions/apple-2-thumbnail.jpg",
          },
        ],
        deleted_at: null,
        author_id: null,
        manufacturer_id: null,
        is_digital: null,
        is_external: null,
        external_product_url: null,
        external_product_button_next: null,
        ratings: 4.67,
        total_reviews: 3,
        rating_count: 5,
        my_review: null,
        in_wishlist: false,
        categories: "fruit",
      },
    });

    await prisma.product.create({
      data: {
        name: "Banana",
        slug: "banana",
        description:
          "A banana is an elongated, edible fruit – botanically a berry – produced by several kinds of large herbaceous flowering plants in the genus Musa. In some countries, bananas used for cooking may be called 'plantains', distinguishing them from dessert bananas.",
        type_id: 1,
        price: 1.5,
        shop_id: 6,
        sale_price: 1.2,
        language: "en",
        min_price: 1.5,
        max_price: 1.5,
        sku: 2,
        quantity: 20,
        in_stock: true,
        is_taxable: true,
        shipping_class_id: null,
        status: "PUBLISHED",
        product_type: "SIMPLE",
        height: null,
        width: null,
        image: {
          original:
            "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/2/Banana.jpg",
          thumbnail:
            "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/2/conversions/Banana-thumbnail.jpg",
        },
        video: null,
        gallery: [
          {
            original:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/575/banana-1.png",
            thumbnail:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/575/conversions/banana-1-thumbnail.jpg",
          },
          {
            original:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/576/banana-2.png",
            thumbnail:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/576/conversions/banana-2-thumbnail.jpg",
          },
          {
            original:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/577/banana.png",
            thumbnail:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/577/conversions/banana-thumbnail.jpg",
          },
          {
            original:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/737/banana-2.png",
            thumbnail:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/737/conversions/banana-2-thumbnail.jpg",
          },
        ],
        deleted_at: null,
        author_id: null,
        manufacturer_id: null,
        is_digital: null,
        is_external: null,
        external_product_url: null,
        external_product_button_next: null,
        ratings: 4.67,
        total_reviews: 3,
        rating_count: 5,
        my_review: null,
        in_wishlist: false,
        categories: "fruit",
      },
    });
    await prisma.product.create({
      data: {
        name: "Apples",
        slug: "apples",
        description:
          "An apple is a sweet, edible fruit produced by an apple tree (Malus domestica). Apple trees are ... The skin of ripe apples is generally red, yellow, green, pink, or russetted, though many bi- or tri-colored cultivars may be found.",
        type_id: 1,
        price: 2,
        shop_id: 6,
        sale_price: 1.6,
        language: "en",
        min_price: 2,
        max_price: 2,
        sku: 1,
        quantity: 18,
        in_stock: true,
        is_taxable: true,
        shipping_class_id: null,
        status: "PUBLISHED",
        product_type: "SIMPLE",
        height: null,
        width: null,
        image: {
          original:
            "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/1/Apples.jpg",
          thumbnail:
            "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/1/conversions/Apples-thumbnail.jpg",
        },
        video: null,
        gallery: [
          {
            original:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/572/apple-1.png",
            thumbnail:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/572/conversions/apple-1-thumbnail.jpg",
          },
          {
            original:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/573/apple-2.png",
            thumbnail:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/573/conversions/apple-2-thumbnail.jpg",
          },
          {
            original:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/574/apple.png",
            thumbnail:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/574/conversions/apple-thumbnail.jpg",
          },
          {
            original:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/736/apple-2.png",
            thumbnail:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/736/conversions/apple-2-thumbnail.jpg",
          },
        ],
        deleted_at: null,
        author_id: null,
        manufacturer_id: null,
        is_digital: null,
        is_external: null,
        external_product_url: null,
        external_product_button_next: null,
        ratings: 4.67,
        total_reviews: 3,
        rating_count: 5,
        my_review: null,
        in_wishlist: false,
        categories: "fruit",
      },
    });

    await prisma.product.create({
      data: {
        name: "Banana",
        slug: "banana",
        description:
          "A banana is an elongated, edible fruit – botanically a berry – produced by several kinds of large herbaceous flowering plants in the genus Musa. In some countries, bananas used for cooking may be called 'plantains', distinguishing them from dessert bananas.",
        type_id: 1,
        price: 1.5,
        shop_id: 6,
        sale_price: 1.2,
        language: "en",
        min_price: 1.5,
        max_price: 1.5,
        sku: 2,
        quantity: 20,
        in_stock: true,
        is_taxable: true,
        shipping_class_id: null,
        status: "PUBLISHED",
        product_type: "SIMPLE",
        height: null,
        width: null,
        image: {
          original:
            "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/2/Banana.jpg",
          thumbnail:
            "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/2/conversions/Banana-thumbnail.jpg",
        },
        video: null,
        gallery: [
          {
            original:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/575/banana-1.png",
            thumbnail:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/575/conversions/banana-1-thumbnail.jpg",
          },
          {
            original:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/576/banana-2.png",
            thumbnail:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/576/conversions/banana-2-thumbnail.jpg",
          },
          {
            original:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/577/banana.png",
            thumbnail:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/577/conversions/banana-thumbnail.jpg",
          },
          {
            original:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/737/banana-2.png",
            thumbnail:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/737/conversions/banana-2-thumbnail.jpg",
          },
        ],
        deleted_at: null,
        author_id: null,
        manufacturer_id: null,
        is_digital: null,
        is_external: null,
        external_product_url: null,
        external_product_button_next: null,
        ratings: 4.67,
        total_reviews: 3,
        rating_count: 5,
        my_review: null,
        in_wishlist: false,
        categories: "fruit",
      },
    });
    await prisma.product.create({
      data: {
        name: "Apples",
        slug: "apples",
        description:
          "An apple is a sweet, edible fruit produced by an apple tree (Malus domestica). Apple trees are ... The skin of ripe apples is generally red, yellow, green, pink, or russetted, though many bi- or tri-colored cultivars may be found.",
        type_id: 1,
        price: 2,
        shop_id: 6,
        sale_price: 1.6,
        language: "en",
        min_price: 2,
        max_price: 2,
        sku: 1,
        quantity: 18,
        in_stock: true,
        is_taxable: true,
        shipping_class_id: null,
        status: "PUBLISHED",
        product_type: "SIMPLE",
        height: null,
        width: null,
        image: {
          original:
            "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/1/Apples.jpg",
          thumbnail:
            "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/1/conversions/Apples-thumbnail.jpg",
        },
        video: null,
        gallery: [
          {
            original:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/572/apple-1.png",
            thumbnail:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/572/conversions/apple-1-thumbnail.jpg",
          },
          {
            original:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/573/apple-2.png",
            thumbnail:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/573/conversions/apple-2-thumbnail.jpg",
          },
          {
            original:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/574/apple.png",
            thumbnail:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/574/conversions/apple-thumbnail.jpg",
          },
          {
            original:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/736/apple-2.png",
            thumbnail:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/736/conversions/apple-2-thumbnail.jpg",
          },
        ],
        deleted_at: null,
        author_id: null,
        manufacturer_id: null,
        is_digital: null,
        is_external: null,
        external_product_url: null,
        external_product_button_next: null,
        ratings: 4.67,
        total_reviews: 3,
        rating_count: 5,
        my_review: null,
        in_wishlist: false,
        categories: "fruit",
      },
    });

    await prisma.product.create({
      data: {
        name: "Banana",
        slug: "banana",
        description:
          "A banana is an elongated, edible fruit – botanically a berry – produced by several kinds of large herbaceous flowering plants in the genus Musa. In some countries, bananas used for cooking may be called 'plantains', distinguishing them from dessert bananas.",
        type_id: 1,
        price: 1.5,
        shop_id: 6,
        sale_price: 1.2,
        language: "en",
        min_price: 1.5,
        max_price: 1.5,
        sku: 2,
        quantity: 20,
        in_stock: true,
        is_taxable: true,
        shipping_class_id: null,
        status: "PUBLISHED",
        product_type: "SIMPLE",
        height: null,
        width: null,
        image: {
          original:
            "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/2/Banana.jpg",
          thumbnail:
            "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/2/conversions/Banana-thumbnail.jpg",
        },
        video: null,
        gallery: [
          {
            original:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/575/banana-1.png",
            thumbnail:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/575/conversions/banana-1-thumbnail.jpg",
          },
          {
            original:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/576/banana-2.png",
            thumbnail:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/576/conversions/banana-2-thumbnail.jpg",
          },
          {
            original:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/577/banana.png",
            thumbnail:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/577/conversions/banana-thumbnail.jpg",
          },
          {
            original:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/737/banana-2.png",
            thumbnail:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/737/conversions/banana-2-thumbnail.jpg",
          },
        ],
        deleted_at: null,
        author_id: null,
        manufacturer_id: null,
        is_digital: null,
        is_external: null,
        external_product_url: null,
        external_product_button_next: null,
        ratings: 4.67,
        total_reviews: 3,
        rating_count: 5,
        my_review: null,
        in_wishlist: false,
        categories: "fruit",
      },
    });
    await prisma.product.create({
      data: {
        name: "Apples",
        slug: "apples",
        description:
          "An apple is a sweet, edible fruit produced by an apple tree (Malus domestica). Apple trees are ... The skin of ripe apples is generally red, yellow, green, pink, or russetted, though many bi- or tri-colored cultivars may be found.",
        type_id: 1,
        price: 2,
        shop_id: 6,
        sale_price: 1.6,
        language: "en",
        min_price: 2,
        max_price: 2,
        sku: 1,
        quantity: 18,
        in_stock: true,
        is_taxable: true,
        shipping_class_id: null,
        status: "PUBLISHED",
        product_type: "SIMPLE",
        height: null,
        width: null,
        image: {
          original:
            "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/1/Apples.jpg",
          thumbnail:
            "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/1/conversions/Apples-thumbnail.jpg",
        },
        video: null,
        gallery: [
          {
            original:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/572/apple-1.png",
            thumbnail:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/572/conversions/apple-1-thumbnail.jpg",
          },
          {
            original:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/573/apple-2.png",
            thumbnail:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/573/conversions/apple-2-thumbnail.jpg",
          },
          {
            original:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/574/apple.png",
            thumbnail:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/574/conversions/apple-thumbnail.jpg",
          },
          {
            original:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/736/apple-2.png",
            thumbnail:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/736/conversions/apple-2-thumbnail.jpg",
          },
        ],
        deleted_at: null,
        author_id: null,
        manufacturer_id: null,
        is_digital: null,
        is_external: null,
        external_product_url: null,
        external_product_button_next: null,
        ratings: 4.67,
        total_reviews: 3,
        rating_count: 5,
        my_review: null,
        in_wishlist: false,
        categories: "fruit",
      },
    });

    await prisma.product.create({
      data: {
        name: "Banana",
        slug: "banana",
        description:
          "A banana is an elongated, edible fruit – botanically a berry – produced by several kinds of large herbaceous flowering plants in the genus Musa. In some countries, bananas used for cooking may be called 'plantains', distinguishing them from dessert bananas.",
        type_id: 1,
        price: 1.5,
        shop_id: 6,
        sale_price: 1.2,
        language: "en",
        min_price: 1.5,
        max_price: 1.5,
        sku: 2,
        quantity: 20,
        in_stock: true,
        is_taxable: true,
        shipping_class_id: null,
        status: "PUBLISHED",
        product_type: "SIMPLE",
        height: null,
        width: null,
        image: {
          original:
            "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/2/Banana.jpg",
          thumbnail:
            "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/2/conversions/Banana-thumbnail.jpg",
        },
        video: null,
        gallery: [
          {
            original:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/575/banana-1.png",
            thumbnail:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/575/conversions/banana-1-thumbnail.jpg",
          },
          {
            original:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/576/banana-2.png",
            thumbnail:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/576/conversions/banana-2-thumbnail.jpg",
          },
          {
            original:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/577/banana.png",
            thumbnail:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/577/conversions/banana-thumbnail.jpg",
          },
          {
            original:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/737/banana-2.png",
            thumbnail:
              "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/737/conversions/banana-2-thumbnail.jpg",
          },
        ],
        deleted_at: null,
        author_id: null,
        manufacturer_id: null,
        is_digital: null,
        is_external: null,
        external_product_url: null,
        external_product_button_next: null,
        ratings: 4.67,
        total_reviews: 3,
        rating_count: 5,
        my_review: null,
        in_wishlist: false,
        categories: "fruit",
      },
    });
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

seedProducts();
