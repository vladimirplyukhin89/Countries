import { Link } from 'react-router-dom';
import worldImg from '../images/world-png.webp';
import { WorldImage } from '../components/WorldImage';
import { Container } from '../components/Container';


export const Notfound = () => {
    return (
        <Container>
            <div >
                <Link to='/'>
                    <p style={
                        {
                            display: 'flex',
                            "justify-content": 'center',
                        }
                    }>
                        Start your research
                    </p>
                    <WorldImage src={worldImg} alt={'The world'} />
                </Link>
            </div>
        </Container>
    );
};