import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { List } from '../components/List';
import { Card } from '../components/Card';
import { Controls } from '../components/Controls';
import { ALL_COUNTRIES } from '../config';

export const HomePage = ({ countries, setCountries }) => {
    const [filteredCountries, setFilteredCountries] = useState(countries);

    const handleSearch = (search, region) => {
        let data = [...countries];

        if (region) {
            data = data.filter(c =>
                c.region.includes(region));
        }

        if (search) {
            data = data.filter(c =>
                c.name.toLowerCase().includes(search.toLowerCase()));

            data.forEach(c => {
                if (c.name.length > 13) {
                    return c.name.trimEnd();
                }
            });
        }

        //for (let i = 0; i < data.length; i++) {

        //    console.log(data[i].name.length);
        //    console.log(data[i].name);
        //    if (data[i].name.length < 12) data[i].name = data[i].name.trimEnd();
        //}

        setFilteredCountries(data);
    };


    useEffect(() => {
        if (!countries.length)
            axios.get(ALL_COUNTRIES).then(
                ({ data }) => setCountries(data)
            );
    }, []);

    return (
        <>
            <Controls onSearch={handleSearch} />
            <List>
                {
                    filteredCountries
                        .map(c => {
                            const countryInfo = {
                                img: c.flags.png,
                                name: c.name,
                                info: [
                                    {
                                        title: 'Population',
                                        description: c.population.toLocaleString(),
                                    },
                                    {
                                        title: 'Region',
                                        description: c.region,
                                    },
                                    {
                                        title: 'Capital',
                                        description: c.capital,
                                    }
                                ],
                            };

                            return (
                                <Link to={`/country/${c.name}`}>
                                    < Card
                                        key={c.name}
                                        {...countryInfo} />
                                </Link>
                            )
                        })
                }
            </List>
        </>
    );
};