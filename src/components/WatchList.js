import React from 'react';

const WatchList = () => {
    return (
        <div className='watchlist-container'>
        <div className="search-container">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
            className="search"
          />
        </div>
        </div>
    )
}

export default WatchList;