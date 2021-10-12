const apiKey = "1B3j8UV2bEzaCKeS_rMJaWGCt_TLWPpLpU1kfnD3Iz5cvdbzDkAq3Fkyueb9jXCNiswFaizzQ6m21vDO7zPdxyeo4sX9OLR1voKeZ8TxrUzzrVDqO2esqxZwj8soX3Yx";

//const clientId = "1jdOe1tJ9euebOv6YaI18A";

const Yelp = {
    search(term, location, sortBy) {
        return fetch(
					`https://corsanywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
					{ headers: { Authorization: `Bearer ${apiKey}` } }
        )
            .then(response => response.json())
            .then(jsonResponse => {
                if (jsonResponse.businesses) {
                    return jsonResponse.businesses.map(business => {
                        return {
                            id: business.id,
                                imageSrc:  business.image_url,
                            name: business.name,
                                address: business.location.address1,
                            city: business.location.city,
                                state: business.location.state,
                            zipCode: business.location.zip_code,
                                category: business.categories[0].alias,
                            rating: business.rating,
                                reviewCount: business.review_count
                        };
                    })
                } else {
                    return "Oooops no businesses were returned";
                }
            })
        
    }
};

export default Yelp;

/*const response body from API = {
	total: 8228,
	businesses: [
		{
			rating: 4,
			price: "$",
			phone: "+14152520800",
			id: "E8RJkjfdcwgtyoPMjQ_Olg",
			alias: "four-barrel-coffee-san-francisco",
			is_closed: false,
			categories: [
				{
					alias: "coffee",
					title: "Coffee & Tea",
				},
			],
			review_count: 1738,
			name: "Four Barrel Coffee",
			url: "https://www.yelp.com/biz/four-barrel-coffee-san-francisco",
			coordinates: {
				latitude: 37.7670169511878,
				longitude: -122.42184275,
			},
			image_url:
				"http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg",
			location: {
				city: "San Francisco",
				country: "US",
				address2: "",
				address3: "",
				state: "CA",
				address1: "375 Valencia St",
				zip_code: "94103",
			},
			distance: 1604.23,
			transactions: ["pickup", "delivery"],
		},
		// ...
	],
	region: {
		center: {
			latitude: 37.767413217936834,
			longitude: -122.42820739746094,
		},
	},
}; */
