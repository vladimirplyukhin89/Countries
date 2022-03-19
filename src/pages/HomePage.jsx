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
        }

        setFilteredCountries(data);
    };

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