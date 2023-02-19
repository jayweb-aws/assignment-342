import React from 'react';
import './SearchBar.css';

const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
};

class SearchBar extends React.Component {
    // Assignment 4 Task 1
    constructor(props) {
        super(props);
        // Assignment 4 Task 2
        this.state = {
            // Assignment 4 Task 3
            term: '',
            location: '',
            sortBy: 'best_match'
        };

        // Assignment 4 Task 14
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        // Assignment 4 Task 2
        this.handleSearch = this.handleSearch.bind(this);
    }
    // Assignment 4 Task 20
    handleSearch(event) {
        // Assignment 4 Task 21
        this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
        // Assignment 4 Task 22
        event.preventDefault();
    }

    // Assignment 4 Task 10
    handleTermChange(event) {
        this.setState({ term: event.target.value });
    }

    handleLocationChange(event) {
        this.setState({ location: event.target.value });
    }

    // Assignment 4 Task 4
    getSortByClass(sortByOption) {
        // Assignment 4 Task 5
        if (sortByOption === this.state.sortBy) {
            return 'active';
        }
        return '';
    }

    // Assignment 4 Task 6
    handleSortByChange(sortByOption) {
        this.setState({ sortBy: sortByOption })
    }

    renderSortByOptions() {
        return Object.keys(sortByOptions).map(sortByOption => {
            let sortByOptionValue = sortByOptions[sortByOption];
            return (<li className={this.getSortByClass(sortByOptionValue)} key={sortByOptionValue} onClick={this.handleSortByChange.bind(this, sortByOptionValue)}> {sortByOption} </li>);
        });
    }

    render() {
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search Businesses" onChange={this.handleTermChange} />
                    {/* // Assignment 4 Task 15 */}
                    <input placeholder="Where?" onChange={this.handleLocationChange} />
                </div>
                <div className="SearchBar-submit">
                    {/* // Assignment 4 Task 24*/}
                    <a href='www.#.com' onClick={this.handleSearch}>Let's Go</a>
                </div>
            </div>

        )
    }
}

export default SearchBar;