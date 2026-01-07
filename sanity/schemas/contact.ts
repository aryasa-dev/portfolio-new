import { defineField, defineType } from "sanity";

export default defineType({
  name: "contact",
  title: "Contact",
  type: "document",
  fields: [
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "phone",
      title: "Phone",
      type: "string",
    }),
    defineField({
      name: "linkedin",
      title: "Linkedin",
      type: "string",
    }),
    defineField({
      name: "github",
      title: "GitHub",
      type: "string",
    }),
  ],
});
