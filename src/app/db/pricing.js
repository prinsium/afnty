// pricingdb.js
export const pricingData = {
  // All Apps Bundle
  all: {
    title: "All Three Apps",
    subtitle: "Publisher, Designer, and Photo",
    features: [
      "Professional publishing tools",
      "Advanced photo editing",
      "Vector graphic design",
      "Cross-platform compatibility",
      "Lifetime updates",
      "No subscription fees"
    ],
    pricing: {
      desktop: {
        individuals: { price: 149.99, originalPrice: 199.99 },
        business: { price: 299.99, originalPrice: 399.99 },
        education: { price: 99.99, originalPrice: 149.99 }
      },
      ipadOS: {
        individuals: { price: 99.99, originalPrice: 129.99 },
        business: { price: 199.99, originalPrice: 259.99 },
        education: { price: 69.99, originalPrice: 99.99 }
      }
    }
  },

  // Photo
  photo: {
    title: "Affinity Photo",
    subtitle: "Professional photo editing software",
    features: [
      "RAW processing",
      "Advanced retouching tools",
      "HDR merge",
      "Focus stacking",
      "Panorama stitching",
      "PSD compatibility"
    ],
    pricing: {
      desktop: {
        individuals: { price: 69.99, originalPrice: 99.99 },
        business: { price: 139.99, originalPrice: 199.99 },
        education: { price: 49.99, originalPrice: 69.99 }
      },
      ipadOS: {
        individuals: { price: 49.99, originalPrice: 69.99 },
        business: { price: 99.99, originalPrice: 139.99 },
        education: { price: 34.99, originalPrice: 49.99 }
      }
    }
  },

  // Publisher
  publisher: {
    title: "Affinity Publisher",
    subtitle: "Page layout & design powerhouse",
    features: [
      "Multi-page layouts",
      "Advanced typography",
      "IDML import/export",
      "Print & digital publishing",
      "Master pages",
      "Professional output"
    ],
    pricing: {
      desktop: {
        individuals: { price: 69.99, originalPrice: 99.99 },
        business: { price: 139.99, originalPrice: 199.99 },
        education: { price: 49.99, originalPrice: 69.99 }
      },
      ipadOS: {
        individuals: { price: 49.99, originalPrice: 69.99 },
        business: { price: 99.99, originalPrice: 139.99 },
        education: { price: 34.99, originalPrice: 49.99 }
      }
    }
  },

  // Designer
  designer: {
    title: "Affinity Designer",
    subtitle: "Illustration & graphic design",
    features: [
      "Vector & raster design",
      "Precision tools",
      "Symbol libraries",
      "Export persona",
      "AI file compatibility",
      "Unlimited artboards"
    ],
    pricing: {
      desktop: {
        individuals: { price: 69.99, originalPrice: 99.99 },
        business: { price: 139.99, originalPrice: 199.99 },
        education: { price: 49.99, originalPrice: 69.99 }
      },
      ipadOS: {
        individuals: { price: 49.99, originalPrice: 69.99 },
        business: { price: 99.99, originalPrice: 139.99 },
        education: { price: 34.99, originalPrice: 49.99 }
      }
    }
  }
};