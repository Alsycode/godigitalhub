import React, { createContext, useContext, useState, useEffect } from 'react';

// Create a new context
const DataContext = createContext();

// Custom hook to use the DataContext
export const useData = () => useContext(DataContext);

// Provider component
export const DataProvider = ({ children }) => {
  // State to hold the fetched data
  const [data, setData] = useState(null);

  // Function to fetch data
  const fetchData = async () => {
    try {
      const token = '36d91d755f6933406f808c6bf39e61dfc5f91f83192d27953c1408254968d8370a23e758ffaa7a7aeefdebb91c21a8d6b7eb8dd771d427e6ee01f7e42e831681d35e263fc04f9209e5e02b6d5473a7899c896a983904eac92709ec1bb86fc2b726314bb0cebb7cfec92e46cd284328bf1a21e17736509a74b2ced35db5ef0265';
      const blogsUrl = 'http://localhost:1337/api/blogs?populate=*';
      const projectsUrl = 'http://localhost:1337/api/projects?populate=*';
      const worksUrl = 'http://localhost:1337/api/works?populate=*';
      const testimoniesUrl = 'http://localhost:1337/api/testimonies?populate=*'; // New URL

      // Fetch data from the blogs URL
      const blogsResponse = await fetch(blogsUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Check if the response is successful (status code 200)
      if (!blogsResponse.ok) {
        throw new Error('Failed to fetch blogs data');
      }

      // Parse the JSON response
      const blogsData = await blogsResponse.json();

      // Fetch data from the projects URL
      const projectsResponse = await fetch(projectsUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Check if the response is successful (status code 200)
      if (!projectsResponse.ok) {
        throw new Error('Failed to fetch projects data');
      }

      // Parse the JSON response
      const projectsData = await projectsResponse.json();

      // Fetch data from the works URL
      const worksResponse = await fetch(worksUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Check if the response is successful (status code 200)
      if (!worksResponse.ok) {
        throw new Error('Failed to fetch works data');
      }

      // Parse the JSON response
      const worksData = await worksResponse.json();

      // Fetch data from the testimonies URL
      const testimoniesResponse = await fetch(testimoniesUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Check if the response is successful (status code 200)
      if (!testimoniesResponse.ok) {
        throw new Error('Failed to fetch testimonies data');
      }

      // Parse the JSON response
      const testimoniesData = await testimoniesResponse.json();

      // Combine all sets of data
      const combinedData = {
        blogs: blogsData,
        projects: projectsData,
        works: worksData,
        testimonies: testimoniesData, // Add testimonies data to the combined data
      };

      // Set the fetched data
      setData(combinedData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Fetch data when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  return (
    // Provide the fetched data to all children components
    <DataContext.Provider value={data}>{children}</DataContext.Provider>
  );
};
