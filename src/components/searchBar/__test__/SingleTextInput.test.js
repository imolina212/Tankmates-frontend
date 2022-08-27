import { render, screen } from '@testing-library/react';
import SearchBar from '../SearchBar';

describe('Search Bar component', ()=> {
    it('has a placeholder when no searchTerm is provided', ()=> {
        render(<SearchBar />);
        const placeholderText = screen.queryByPlaceholderText(/Search by name/)
        expect(placeholderText).toBeInTheDocument();
    })

    it('shows the search term when it is provided', ()=> {
        render(<SearchBar searchTerm="Test Search term" />);
        const searchBarText = screen.getByDisplayValue(/Test Search term/i)
        expect(searchBarText).toBeInTheDocument();
        expect(searchBarText.value).toEqual("Test Search term");
    })
})
