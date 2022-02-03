import styled from "styled-components";
import {useNavigate} from 'react-router-dom'
import {ResponseCountryType} from "../../api/api";

const Wrapper = styled.section`
  margin-top: 3rem;
  width: 100%;
  display: grid;
  grid-template-columns: 100%;
  gap: 2rem;

  @media (min-width: 767px) {
    grid-template-columns: minmax(100px, 400px) 1fr;
    align-items: center;
    gap: 5rem;
  }
  @media (min-width: 1024px) {
    grid-template-columns: minmax(400px, 600px) 1fr;
  }
`;

const InfoImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const InfoTitle = styled.h1`
margin: 0;
  font-weight: var(--fw-normal);
`;

const ListGroup = styled.div``;

const List = styled.ul``;

const ListItem = styled.li``;

const Meta = styled.div``;

const TagGroup = styled.div``;

const Tag = styled.span``;


export const Info = (props: ResponseCountryType) => {

    const {
        name,
        nativeName,
        flag,
        capital,
        population,
        region,
        subregion, topLevelDomain, currencies = [], languages = [], borders = []
    } = props

    const navigate = useNavigate()

    return (
        <Wrapper>
            <InfoImage src={flag} alt={'name'}/>

            <div>
                <InfoTitle>{name}</InfoTitle>
                <ListGroup>
                    <List>
                        <ListItem>
                            <b>Native name:</b> {nativeName}
                        </ListItem>
                        <ListItem>
                            <b>Population:</b> {population}
                        </ListItem>
                        <ListItem>
                            <b>Region:</b> {region}
                        </ListItem>
                        <ListItem>
                            <b>Sub region:</b> {subregion}
                        </ListItem>
                        <ListItem>
                            <b>Capital:</b> {capital}
                        </ListItem>
                    </List>
                    <List>
                        <ListItem>
                            <b>Top Level Domain:</b> {' '}
                            {topLevelDomain.map(d => (<span key={d}>{d}</span>))}
                        </ListItem>
                        <ListItem>
                            <b>Currency:</b>{' '}
                            {currencies.map(c => (<span key={c.code}>{c.name} </span>))}
                        </ListItem>
                        <ListItem>
                            <b>Languages:</b> {' '}
                            {languages.map(l => (<span key={l.name}>{l.name} </span>))}
                        </ListItem>
                    </List>
                </ListGroup>
                <Meta>
                    <b>Border Countries: </b>
                    {!borders.length ? (
                        <span>There is no border countries</span>
                    ) : (
                        <TagGroup>
                            {borders.map(b => (<Tag key={b}>{b}</Tag>))}
                        </TagGroup>
                    )}
                </Meta>
            </div>
        </Wrapper>
    )
}