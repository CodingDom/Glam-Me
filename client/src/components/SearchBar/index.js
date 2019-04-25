import React from "react";
import "./style.css";

class searchBar extends React.Component {
    constructor (props) {
        super(props);

        this.items = [
            "johnny",
            "laura",
            "andres",
            "quinn",
            "ivon",
            "daniel",
            "zylaphone"
        ];
        this.state = {
            suggestions: [],
            text: ""
        };
        
        
    }

    onTextChanged = (e) => {
        const value = e.target.value;
        let suggestions = [];

        if(value.length > 0) {
            const regex = new RegExp(`^${value}`, 'i');
            suggestions = this.items.sort().filter(v => regex.test(v))
        }
        this.setState(() => ({suggestions, text: value }));
    }

    suggestionSelected (value) {
        this.setState(() =>({
            text: value,
            suggestions: [],
        }))
    }

    renderSuggestions () {
        const { suggestions } = this.state;
        if (suggestions.length === 0) {
            return null
        }
        return (
            <ul>
            {suggestions.map((suggestion) => <li onClick={() => this.suggestionSelected(suggestion)}>{suggestion}</li>)}
        </ul>
        )
    }

    render(){
        const { text } = this.state;
        return(
           <div className="searchBar">
                <input  placeholder="Search For An Artist ..." value={text} onChange={this.onTextChanged} type="text" />
           {this.renderSuggestions()}
           </div>
        )
    }
}

export default searchBar;