import React, { useEffect, forwardRef, useRef } from "react";

const Occupation = forwardRef(
  (
    {
      showOccuptnDropdown,
      setOccuptnDropdown,
      setSrcOfIncmDropdown,
      value,
      options,
      onChange,
    },
    ref
  ) => {
    const handleClick = () => {
      setOccuptnDropdown(true);
      setSrcOfIncmDropdown(false);
      console.log(options.length);
    };

    const handleSelect = (occupation) => {
      onChange(occupation.value);
      setOccuptnDropdown(false);
    };

    const dropdownRef = useRef(null);

    useEffect(() => {
      // Handle click outside dropdown
      const handleClickOutside = (event) => {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target)
        ) {
          setOccuptnDropdown(false);
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
      setOccuptnDropdown(showOccuptnDropdown);
    }, [showOccuptnDropdown]);

    return (
      <>
        <div className="">
          {/* <label			
	            htmlFor="occupation"			
	            className="block text-gray-700 text-sm font-bold mb-2"			
	          ></label> */}

          {/* <select			
	          id="occupation"			
	          ref={ref}			
	          value={value}			
	          onChange={onChange}			
	          className="block appearance-none w-full bg-gray-200 border border-gray-300 text-gray-700 py-2 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"			
	        >			
	          <option value="">Occupation</option>			
	          {options.map((occupation) => (			
	            <option key={occupation.id} value={occupation.value}>			
              {occupation.displayText}			
	            </option>			
          ))}			
	        </select> */}
          <input
            type="text"
            id="occupation"
            ref={ref}
            value={value}
            onChange={onChange}
            onClick={handleClick}
            readOnly
            placeholder="Occupation"
            className="w-full px-2 py-2 border-2 rounded-xl focus:outline-none border-gray-300"
          />
          {showOccuptnDropdown && options.length > 0 && (
            <ul
              ref={dropdownRef}
              className="sticky    z-1000 w-full lg-:w-1/2 bg-white border-2 border-gray-400 rounded-md max-h-60 overflow-y-auto"
            >
              {options.map((occupation, index) => (
                <li
                  key={occupation.id}
                  value={occupation.value}
                  onClick={() => handleSelect(occupation)}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  {occupation.displayText}
                </li>
              ))}
            </ul>
          )}
        </div>
      </>
    );
  }
);

export default Occupation;
