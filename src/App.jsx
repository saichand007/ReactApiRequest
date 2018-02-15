import React ,{Component} from 'react';
import './App.css';
import {FormGroup,FormControl,InputGroup,Glyphicon} from 'react-bootstrap';

class App extends Component
{

constructor(props)
{
	super(props);

	this.state={
	query:" "
	}

	
}

search()
{
console.log(this.state.query);	
 const baseURL = 'https://api.spotify.com/v1/search?';
 const fetchURL=`${baseURL}q=${this.state.query}&type=artist&limit=1`;
 console.log(fetchURL);
}
	render()
	{
	return(
     <div className='main'>Music Master
     <FormGroup>

     <InputGroup>
     <FormControl
      type="text"
              placeholder="Search "
              value={this.state.query}
     onChange={event=>this.setState({query:event.target.value})}
       onKeyPress={event => {
                if (event.key === 'Enter') {
                  this.search() }
                  } }



                 />

      
       <InputGroup.Addon onClick={() => this.search()}>
              <Glyphicon glyph="search"></Glyphicon>
       </InputGroup.Addon>
   
     </InputGroup>

     
     </FormGroup>
     </div>
     
	);
	}
}

export default App