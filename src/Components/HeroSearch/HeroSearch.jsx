import React, { useEffect, useState } from 'react';
import './HeroSearch.css';
import useGeolocation from '../../hooks/useGeolocation ';


const HeroSearch = () => {
  const [proposals, setProposals] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const location = useGeolocation();

  useEffect(() => {
    const fetchProposals = async () => {
      try {
        const url = `http://localhost:5000/proposals${searchTerm ? `?subject=${searchTerm}` : ''}`;
        const response = await fetch(url);
        const data = await response.json();
        setProposals(data);
        setShowResults(true);
      } catch (error) {
        console.error(error);
      }
    };

    if (location) {
      fetchProposals();
    }
  }, [location, searchTerm]);

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    setShowResults(term !== ''); // Show results only when the search term is not empty
};

  return (
    <div>
      <div className="w-full bg-no-repeat bg-cover bg-center flex items-center bg-fill-thumbnail hero-banner-six min-h-[400px] md:min-h-[460px] lg:min-h-[500px] xl:min-h-[650px] py-20 py:pt-24 mb-5 2xl:bg-center bg-image-search">
        <div className="mx-auto h-full flex flex-col text-center px-6 xl:max-w-[750px] 2xl:max-w-[850px] max-w-[480px] md:max-w-[550px]">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-manrope font-extrabold leading-snug md:leading-tight xl:leading-[1.3em] mb-3 md:mb-4 xl:mb-3 -mt-2 xl:-mt-3 2xl:-mt-4 text-brand-tree-dark xl:text-5xl 2xl:text-[55px]">Are you looking for tutors near you?</h2>
            <p className="text-base md:text-[17px] xl:text-lg leading-7 md:leading-8 xl:leading-[1.92em] xl:px-16 text-brand-dark text-opacity-80 2xl:px-32">Find trusted in-person & online tutors</p>

            <div className="hidden lg:block max-w-[700px] mx-auto md:pt-1 lg:pt-3">
              <div className="lg:flex">
                <form className="relative flex w-full mt-6 rounded-md" noValidate="" role="search">
                  <label htmlFor="hero-search" className="flex flex-1 items-center py-0.5">
                    <input
                      value={searchTerm}
                      onChange={handleSearch}
                      id="hero-search"
                      className="w-full text-sm transition-all duration-200 outline-none text-brand-dark/80 h-14 ltr:pl-5 rtl:pr-5 md:ltr:pl-6 md:rtl:pr-6 ltr:pr-14 rtl:pl-14 md:ltr:pr-16 md:rtl:pl-16 md:h-16 shadow-heroSearch placeholder:text-brand-dark/50 rounded-md text-brand-light lg:text-base focus:ring-2 focus:ring-brand px-2"
                      placeholder="Search for teachers..."
                      aria-label="Search"
                      autoComplete="off"
                    />
                  </label>
                  <button type="submit" title="Search" className="absolute left-50 right-0 top-0 flex items-center justify-center h-full transition duration-200 ease-in-out outline-none ltr:right-0 rtl:left-0 w-14 md:w-16 hover:text-heading focus:outline-none">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="w-5 h-5 text-brand-dark text-opacity-40"><path d="M19.0144 17.9256L13.759 12.6703C14.777 11.4129 15.3899 9.81507 15.3899 8.07486C15.3899 4.04156 12.1081 0.759766 8.07483 0.759766C4.04152 0.759766 0.759766 4.04152 0.759766 8.07483C0.759766 12.1081 4.04156 15.3899 8.07486 15.3899C9.81507 15.3899 11.4129 14.777 12.6703 13.759L17.9256 19.0144C18.0757 19.1645 18.2728 19.24 18.47 19.24C18.6671 19.24 18.8642 19.1645 19.0144 19.0144C19.3155 18.7133 19.3155 18.2266 19.0144 17.9256ZM8.07486 13.8499C4.89009 13.8499 2.2998 11.2596 2.2998 8.07483C2.2998 4.89006 4.89009 2.29976 8.07486 2.29976C11.2596 2.29976 13.8499 4.89006 13.8499 8.07483C13.8499 11.2596 11.2596 13.8499 8.07486 13.8499Z" fill="currentColor"></path></svg>
                  </button>
                </form>
              </div>
              {showResults && (
                <div className="mt-4 rounded-md shadow-lg bg-white">
                  <ul className="py-2 px-4">
                    {proposals.map((proposal) => (
                      <li key={proposal._id} className="py-2">
                        {proposal.subject}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSearch;
