import React, { createContext, useContext, useEffect, useState } from 'react';

interface StrapiContextProps {
  token: string | null;
}

interface StrapiData {
  // Define your data types here
}

const StrapiContext = createContext<Partial<StrapiContextProps>>({});

export const useStrapi = () => useContext(StrapiContext);

export const StrapiProvider: React.FC = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);
  const [data, setData] = useState<StrapiData | null>(null);

  // Fetch data function
  const fetchData = async () => {
    if (!token) return;
    try {
      const response = await fetch('YOUR_STRAPI_ENDPOINT', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const jsonData = await response.json();
        setData(jsonData);
      } else {
        // Handle errors
      }
    } catch (error) {
      console.error('Error fetching data from Strapi:', error);
      // Handle errors
    }
  };

  useEffect(() => {
    fetchData();
  }, [token]);

  return (
    <StrapiContext.Provider value={{ token }}>
      {children}
    </StrapiContext.Provider>
  );
};
