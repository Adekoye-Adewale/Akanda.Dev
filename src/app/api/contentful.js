import React from 'react'
import * as Contentful from Contentful

var client = Contentful.createClient({
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    space: process.env.CONTENTFUL_SPACE_ID,
})

export async function getPortfolio() {
    const result = await client.getEntry();
}
