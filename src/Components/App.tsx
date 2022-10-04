import React, { ChangeEvent, useCallback, useState } from 'react';
import {useQuery, gql} from '@apollo/client'
import './App.css';
import { SearchPanel } from './SearchPanel';

const GET_COUNTRIES = gql`
query GetContinentCountires($filter: CountryFilterInput) {
  countries(filter: $filter) {
    name
    code
    phone
  }
}`;
const GET_COUNTRY = gql`
query GetContinentCountires($code: ID!) {
  country(code: $code) {
    name
    code
    phone
  }
}`;

type CountryIntemProps = {
  country: Country
}
function CountryIntem({ country }: CountryIntemProps) {
  return (
    <li key={country.code}>
      <div>country: {country.name}</div>
    <div>code: {country.code}</div>
  </li>
  )
}
function App() {
  const [filterOptions, setFilterOptions] = useState<FilterOptions[]>([]);
  const handleSetOptions = (dataCountries:Countries) => {
    const options = dataCountries?.countries?.map(({ name, code }) => ({
      value: code,
      name,
    }))

    setFilterOptions(options)
  }

  const {loading, error, data, client} = useQuery(GET_COUNTRIES, {
    onCompleted: handleSetOptions
  });
  const {loading: loadingCountry, error: errorSelectedCountry, data: selecteCountry, refetch} = useQuery(GET_COUNTRY);

  const  handleSelectCountry = useCallback(async (valueCode: string) => {
    refetch({
      code: valueCode
    })  
  }, [client])
  const loadred  = 'data is loading...';
  console.log(selecteCountry)

  const renderList = () => {
    if (loading) return loadred;
    if (filterOptions.length !== 0 && selecteCountry?.country) {
      return <CountryIntem country={selecteCountry.country} />
    }

    if(data && data?.countries) {
      return (
        data.countries.map((country:any) => {
          return (
            <CountryIntem country={country}/>
          )
        }
      ))
    }
    return null
  }

  return (
    <div className="App">
      <h1>app</h1>

      <SearchPanel 
        onSelectCountry={handleSelectCountry} 
        filterOptions={filterOptions}
        selecteCountry={selecteCountry?.country?.code ?? 'none'}
      />
      {loading || loadingCountry ? (  
        loadred 
      ): (
      <ul>
        {renderList()}
      </ul>
      )}
    </div>
  );
}

export default App;
