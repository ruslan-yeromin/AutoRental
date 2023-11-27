'use client';

import { Car } from '@/types/type';
import { useEffect, useState } from 'react';

const CarPage = () => {
  const [car, setCar] = useState<Car | null>(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    // Получение пути из URL и извлечение seoUrl
    const path = window.location.pathname;
    const pathSegments = path.split('/');
    const seoUrl = pathSegments[2];
    console.log("Извлеченный seoUrl:", seoUrl);
    if (!seoUrl) return;

    const fetchCarData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/cars/${seoUrl}`);
        const data = await response.json();

        if (response.ok) {
          setCar(data.data);
        } else {
          console.error("Ошибка загрузки данных об автомобиле:", data.message);
        }
      } catch (err) {
        console.error("Ошибка запроса:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCarData();
  }, []);

  if (isLoading) return <p>Загрузка...</p>;


  return (
    <div className='mt-10'>
      <h1>{car?.name}</h1>
      <p>{car?.description}</p>

    </div>
  );
};

export default CarPage;
