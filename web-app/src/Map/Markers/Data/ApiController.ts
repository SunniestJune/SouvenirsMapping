import {PaginatedPins} from "./Pin";

const API_URL = process.env["API_URL"];

export const getPins = (cursor?: string, pageSize?: number): PaginatedPins => {
    const response = await fetch(`${API_URL}`, {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: {
            query: `
        query GetLearnWithJasonEpisodes($now: DateTime!) {
          allEpisode(limit: 10, sort: {date: ASC}, where: {date: {gte: $now}}) {
            date
            title
            guest {
              name
              twitter
            }
            description
          }
        }
      `,
        }
    })
}
