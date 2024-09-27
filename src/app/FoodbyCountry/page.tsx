'use client';
import { useState, useEffect } from 'react';
import { FoodType } from 'src/types/foodType';

const FoodbyCountryPage: React.FC = () => {
  const [foods, setFoods] = useState<FoodType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Check if the data is already in local storage
    const storedFoods = localStorage.getItem('foodsByCountry');

    if (storedFoods) {
      setFoods(JSON.parse(storedFoods));  // Load from local storage
      setLoading(false);
    } else {
      const fetchFoods = async () => {
        try {
          const response = await fetch('http://127.0.0.1:8000/foods/', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              selected_countries: ['thailand'],
            }),
          });

          if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
          }

          const data: FoodType = await response.json();
          setFoods(data);
          localStorage.setItem('foodsByCountry', JSON.stringify(data)); // Save to local storage
          setLoading(false);
        } catch (error) {
          setError(error instanceof Error ? error.message : 'Unknown error');
          setLoading(false);
        }
      };

      fetchFoods();
    }
  }, []);

  if (loading) {
    return <div className='mt-40'>Loading food data...</div>;
  }

  if (error) {
    return (
      <div>
        <p>Error fetching data: {error}</p>
        <button onClick={() => window.location.reload()}>Retry</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Foods by Country</h1>
      <ul>
        {foods && Object.keys(foods).map((countryKey) => (
          <div key={countryKey}>
            <h2>{countryKey}</h2>
            <ul>
              {Object.keys(foods[countryKey].foods).map((foodName) => {
                const food = foods[countryKey].foods[foodName];
                return (
                  <li key={foodName}>
                    <h3>{foodName}</h3>
                    <p>{food.description}</p>
                    <img src={food.image_url} alt={foodName} style={{ width: '100px', height: '100px' }} />
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default FoodbyCountryPage;
