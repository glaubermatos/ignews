import Prismic from '@prismicio/client'

var apiEndpoint = process.env.PRISMIC_ENTRY_POINT
var apiToken = process.env.PRISMIC_PERMANENT_ACCESS_TOKEN

export function getPrismicClient(req?: unknown) {
    const prismicClient = Prismic.client(
        apiEndpoint, 
        {
            accessToken: apiToken,
            req
        }
    )

    return prismicClient
}