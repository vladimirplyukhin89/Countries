import axios from 'axios';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { List } from '../components/List';
import { Card } from '../components/Card';
import { Controls } from '../components/Controls';
import { ALL_COUNTRIES } from '../config';

export const HomePage = ({ countries, setCountries }) => {

    useEffect(() => {
        if (!countries.length)
            axios.get(ALL_COUNTRIES).then(
                ({ data }) => setCountries(data)
            );
    }, []);

    const { name } = useParams();

    return (
        <>
            <Controls />
            <List>
                {
                    countries
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