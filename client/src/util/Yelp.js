const apiKey =
  'bns2j4nhkinuc7-oUtRCmmuivYtwa2Dr8VcdFRGA4ECFSH2vs8XJ7kpzgYVDJEUhsh8KiQMW4ygI81NZn1GHfT0uUcTFiq9VkGKvNgPV76G36No_A2O3PjwVrIzCY3Yx' // Insert API key here.
// https://cors-anywhere.herokuapp.com/
const Yelp = {
  search(term, location, sortBy) {
    // console.log(term, location, sortBy)
    return fetch(`https://proxy.cors.sh/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
      },
    )
      .then((response) => response.json())
      .then((jsonResponse) => {

        if (Array.isArray(jsonResponse?.businesses) && jsonResponse?.businesses?.length) {
          const data = jsonResponse.businesses.map((business) => ({

            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count,
          }))
          return data
        } else {
          return []
        }
      })
      .catch((err) => {
        console.log(err, 'any errors')
      })
  },
}

export default Yelp
