export default {
  items: [
    {
      name: "Stock",
      title: true
    },

    {
      name: "Dashboard",
      url: "/stock/dashboard"
    },
    {
      name: "Locations",
      url: "/stock/locations"
    },
    {
      name: "Items",
      url: "/stock/items"
    },

    {
      name: "Prepaid Items",
      url: "/stock/prepaid-items"
    },
    {
      name: "Transfers",
      url: "/stock/transfers"
    },
    {
      name: "Transfer Requests",
      url: "/stock/transfer-requests"
    },
    {
      name: "Recipes",
      url: "/stock/recipes"
    },
    {
      name: "Bill of Materials",
      url: "/stock/bill-of-materials"
    },
    // {
    //   name: "Medic Percents",
    //   url: "/stock/medic-perecnts"
    // },
    // {
    //   name: "Adjustments",
    //   url: "/stock/adjustments"
    // },

    {
      name: "REPORTS",
      url: "/stock/reports",
      icon: "fa fa-file-alt",
      children: [
        {
          name: "Item Stocks",
          url: "/stock/reports/item-stocks"
        },
        {
          name: "Low stock",
          url: "/stock/reports/low-stock"
        },
        {
          name: "Expire Items",
          url: "/stock/reports/expire-items"
        },
        {
          name: "Location Prices",
          url: "/stock/reports/location-prices"
        },
        {
          name: "Suggested Sale Prices",
          url: "/stock/reports/suggested-sale-prices"
        }
      ]
    }
  ]
};
