// Schema for the Products
import {defineField, defineType} from 'sanity'

export const Products = defineType({
  name: 'Product-Data',
  title: 'ProductData',
  type: 'document',
  fields: [
    defineField({
      name: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'price',
      type: 'number',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'discountedPrice',
      type: 'number',
      // validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'productDetails',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'badge',
      type: 'string',
      // validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'bgbadge',
      type: 'string',
      // validation: (rule) => rule.required(),
    }),
    
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Dining', value: 'dining' },
          { title: 'Living', value: 'living' },
          { title: 'Bedroom', value: 'bedroom' },
        ],
      },
      validation: (rule) => rule.min(1).required(),
    }),
    
  ],
})



//Schema of Order


import { Rule } from "sanity";

export default {
    name: 'order',
    title: 'Order',
    type: 'document',
    fields: [
      {
        name: 'customerId',
        title: 'Customer',
        type: 'reference',
        to: [{ type: 'customer' }],
        validation: (Rule : Rule) => Rule.required(),
      },
      {
        name: 'products',
        title: 'Products',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'productId',
                title: 'Product',
                type: 'reference',
                to: [{ type: 'Product-Data' }],
                validation: (Rule : Rule) => Rule.required(),
              },
              {
                name: 'quantity',
                title: 'Quantity',
                type: 'number',
                validation: (Rule : Rule) => Rule.required().min(1),
              },
            ],
          },
        ],
      },
      {
        name: 'totalAmount',
        title: 'Total Amount',
        type: 'number',
        validation: (Rule : Rule) => Rule.required().min(0),
      },
      {
        name: 'status',
        title: 'Status',
        type: 'string',
        options: {
          list: [
            { title: 'Pending', value: 'Pending' },
            { title: 'Shipped', value: 'Shipped' },
            { title: 'Completed', value: 'Completed' },
          ],
        },
        validation: (Rule : Rule) => Rule.required(),
      },
      {
        name: 'createdAt',
        title: 'Created At',
        type: 'datetime',
        initialValue: () => new Date().toISOString(),
      },
    ],
  };



// Schema of Customers


import { Rule } from "sanity";

export default {
  name: "customer",
  title: "Customer",
  type: "document",
  fields: [
    {
      name: "fullName",
      title: "Name",
      type: "string",
      validation: (Rule: Rule) => Rule.required().min(3).max(50),
    },
    {
      name: "email",
      title: "Email",
      type: "email",
      validation: (Rule: Rule) => Rule.required().email(),
    },
    {
      name: "phone",
      title: "Phone",
      type: "string",
      validation: (Rule: Rule) => Rule.required().min(10).max(15),
    },
    {
      name: "address",
      title: "Address",
      type: "object",
      fields: [
        { name: "street", title: "Street", type: "string" },
        { name: "city", title: "City", type: "string" },
        { name: "state", title: "State", type: "string" },
        { name: "zip", title: "Zip Code", type: "string" },
      ],
    },
  ],
};



