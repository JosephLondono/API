import { Router } from "express";
const router = Router();

const countries = []

const contriesData = fetch('https://countryinfoapi.com/api/countries')
    .then(response => response.json())
    .then(data => data.map(country => {
        countries.push({
            name: country.name,
            capital: country.capital,
            region: country.region,
            population: country.population,
            area: country.area,
            flag: country.flag,
            currency: country.currencies,
            languages: country.languages
        })
    }
    ));

router.get('/', (req, res) => {
    res.json(countries);
    }
);

router.get('/:name', (req, res) => {
    const { name } = req.params;
    console.log(name);
    const country = countries.find(country => {
        return country.name.toLowerCase() == name.toLowerCase()
    });
    console.log(country)
    if (country) {
        res.status(200).json(country);
    } else {
        res.status(404).json({ error: 'Country not found' });
    }
});

export default router;