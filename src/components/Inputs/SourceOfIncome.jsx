import React, { useState, forwardRef, useEffect, useRef } from "react";

const SourceOfIncome = forwardRef(
  (
    {
      setOccuptnDropdown,
      showSrcOfIncmDropdown,
      setSrcOfIncmDropdown,
      value,
      options,
      onChange,
    },
    ref
  ) => {
    const dropdownRef = useRef(null);

    const handleClick = () => {
      setOccuptnDropdown(false);
      if (options.length > 0) setSrcOfIncmDropdown(true);
    };

    const handleSelect = (srcofincome) => {
      onChange(srcofincome.value);
      setSrcOfIncmDropdown(false);
    };

    useEffect(() => {
      // Handle click outside dropdown
      const handleClickOutside = (event) => {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target)
        ) {
          setSrcOfIncmDropdown(false);
        }
      };

      // Attach the event listener
      document.addEventListener("mousedown", handleClickOutside);

      // Cleanup event listener on component unmount
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

    useEffect(() => {
      // Sync the visibility state with the prop
      setSrcOfIncmDropdown(showSrcOfIncmDropdown);
    }, [showSrcOfIncmDropdown]);

    return (
      <>
        <div className=" ">
          {/* <label			
	            htmlFor="sourceOfIncome"			
	            className="block text-gray-700 text-sm font-bold mb-2"			
	          ></label> */}

          <input
            type="text"
            id="sourceOfIncome"
            ref={ref}
            readOnly
            value={value}
            onChange={onChange}
            onClick={handleClick}
            placeholder="Source Of Income"
            className="w-full px-2 py-2 border-2 rounded-xl focus:outline-none border-gray-300"
          />

          {showSrcOfIncmDropdown && options.length > 0 && (
            <ul
              ref={dropdownRef}
              className="sticky    z-1000 w-full lg-:w-1/2 bg-white border-2 border-gray-900 rounded-md max-h-60 overflow-y-auto"
            >
              {options.map((soi, index) => (
                <li
                  key={soi.id}
                  value={soi.value}
                  onClick={() => handleSelect(soi)}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  {soi.displayText}
                </li>
              ))}
            </ul>
          )}
        </div>
      </>
    );
  }
);

export default SourceOfIncome;

/**			
98	 *  <div>			
99	          <label htmlFor="sourceOfIncome" className="block text-gray-700 text-sm font-bold mb-2"></label>			
100	          <select			
101	              id="sourceOfIncome"			
102	              ref={ref}			
103	              value={value}			
104	              onChange={onChange}			
105	              className="block appearance-none w-full bg-gray-200 border border-gray-300 text-gray-700 py-2 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"			
106	              disabled={disabled}			
107	          			
108	          >			
109	              <option value="">Source of Income</option>			
110	              {options.map((source) => (			
111	                  <option key={source.id} value={source.value}>			
112	                      {source.displayText}			
113	                  </option>			
114	              ))}			
115	          </select>			
116	      </div>			
	 */
