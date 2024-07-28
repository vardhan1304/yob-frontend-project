import React, { useState, useEffect } from "react";

import axios from "axios";

function OrganisationDetails() {
  const [searchTerm, setSearchTerm] = useState("");
  const [organizations, setOrganizations] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedOrganisation, setSelectedOrganisation] = useState(null);
  const [debounceTimeout, setDebounceTimeout] = useState(null);

  //   useEffect(() => {
  //     if (selectedOrganisation) {
  //       console.log("Updated selected rank: ", selectedOrganisation.rank);
  //       console.log("Updated selected value: ", selectedOrganisation.value);
  //       console.log("Updated selected rankApplicable: ", selectedOrganisation.rankApplicable);
  //       console.log("Updated selected productVariantCode: ", selectedOrganisation.productVariantCode); // Log when selectedOrganisation changes
  //     }
  //   }, [selectedOrganisation]); // Run this effect whenever selectedOrganisation changes

  const handleSelectOrganization = (org) => {
    // console.log(org)
    setSearchTerm(org.displayText);
    setSelectedOrganisation(org);
    // Set the input to the selected organization
    setShowDropdown(false);
    // console.log("selected company : " + org);
    // console.log("Maped org : "+ selectedOrganisation);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Clear the previous timeout
    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }

    if (value) {
      const timeoutId = setTimeout(() => {
        fetchOrganizations(value); // Call API after 5 seconds of inactivity
      }, 1000);
      setDebounceTimeout(timeoutId);
    } else {
      setShowDropdown(false);
      setOrganizations([]);
    }
  };

  const fetchOrganizations = async (term) => {
    try {
      const response = await axios.get(`http://localhost:9999/company/${term}`);
      const filteredOrgs = response.data.filter((org) =>
        org.displayText.toLowerCase().includes(term.toLowerCase())
      );
      setOrganizations(filteredOrgs);
      setShowDropdown(true);
    } catch (error) {
      console.error("Error fetching organizations", error);
    }
  };

  return (
    <>
      <div className="">
        <label htmlFor="organisationdetails"></label>
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Select organization name"
          className="w-full px-2 py-2 border-2 rounded-xl focus:outline-none border-gray-300"
        />
        {showDropdown && organizations.length > 0 && (
          <ul className="sticky    z-1000 w-full lg-:w-1/2 bg-white border-2 border-gray-900 rounded-md max-h-60 overflow-y-auto">
            {organizations.map((org, index) => (
              <li
                key={org.value} // Use a unique identifier for the key
                onClick={() => handleSelectOrganization(org)}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                {org.displayText} {/* Display the organization's name */}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default OrganisationDetails;

/**			
105	 *			
106	 * import React, { useState } from 'react';			
107	import axios from 'axios';			
108				
109	const OrganizationSelect = () => {			
110	  const [searchTerm, setSearchTerm] = useState('');			
111	  const [organizations, setOrganizations] = useState([]);			
112	  const [showDropdown, setShowDropdown] = useState(false);			
113				
114	  const handleInputChange = (e) => {			
115	    setSearchTerm(e.target.value);			
116	  };			
117				
118	  const fetchOrganizations = async () => {			
119	    if (searchTerm.length > 0) {			
120	      try {			
121	        const response = await axios.get('YOUR_API_ENDPOINT'); // Replace with your API endpoint			
122	        setOrganizations(response.data); // Assuming the response is an array of organizations			
123	        setShowDropdown(true);			
124	      } catch (error) {			
125	        console.error('Error fetching organizations', error);			
126	      }			
127	    } else {			
128	      setShowDropdown(false);			
129	    }			
130	  };			
131				
132	  const handleInputFocus = () => {			
133	    fetchOrganizations();			
134	  };			
135				
136	  const handleSelectOrganization = (org) => {			
137	    setSearchTerm(org.name); // Assuming organization object has a 'name' property			
138	    setShowDropdown(false);			
139	  };			
140				
141	  return (			
142	    <div className="relative">			
143	      <input			
144	        type="text"			
145	        value={searchTerm}			
146	        onChange={handleInputChange}			
147	        onFocus={handleInputFocus}			
148	        placeholder="Select organization name"			
149	        className="w-full px-3 py-2 border rounded-md focus:outline-none border-gray-300"			
150	      />			
151	      {showDropdown && organizations.length > 0 && (			
152	        <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-md max-h-60 overflow-y-auto">			
153	          {organizations.map((org, index) => (			
154	            <li			
155	              key={index}			
156	              onClick={() => handleSelectOrganization(org)}			
157	              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"			
158	            >			
159	              {org.name} {/* Change based on your API response *}			
160	              </li>			
161	            ))}			
162	          </ul>			
163	        )}			
164	      </div>			
165	    );			
166	  };			
167	  			
168	  export default OrganizationSelect;			
169	  			
170	 */
