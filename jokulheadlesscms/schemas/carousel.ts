const carousel = {
  name: "carousel",
  Title: "Carousel",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "description",
      title: "Description",
      type: "blockContent",
    },
    {
      name: "items",
      title: "Items",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "article" }, { type: "post" }],
        },
      ],
    },
  ],
};

export default carousel;
