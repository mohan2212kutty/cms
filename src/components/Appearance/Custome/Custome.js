import React, {Component} from 'react';
import axios from 'axios';
import AppearanceForm from './AppearanceForm';

class Custome extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      contenttypesObject: [],
      value: [],
      crazy: false,
      form: false,
      loading: false,
    };
  }
  componentDidMount() {
    fetch('http://localhost:5000/api/appearance')
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          form: data[0],
        });
      })
      .catch(() => {
        console.log(
          'No internet connection found. App is running in offline mode.'
        );
      });
  }

  handleSubmit = event => {
    event.preventDefault();
    let form = {};
    for (var i = 0; i < event.target.elements.length; i++) {
      if (
        event.target.elements[i].value !== '' &&
        event.target.elements[i].name !== ''
      ) {
        form[event.target.elements[i].name] = event.target.elements[i].value;
      }
    }
 
    axios
      .post('http://localhost:5000/api/appearance', form)
      .then(response => {
        // TODO here should come a successmessage
        console.log(response.data);
      })
      .catch(function(error) {
        console.log('Error: ', error);
      });
  };
  contenttypesArray = [];

  bringContentTypeObjectFromApperanc = (data) => {
    let contenttypesObject = this.state.contenttypesObject;
     console.log(contenttypesObject)
        this.contenttypesArray.push(data)
        this.setState({contenttypesObject:this.contenttypesArray})
      
   
  
  }

  render() {
    console.log(this.state.contenttypesObject)
    const style = {marginBottom: '1em'};
    const btnFile = {marginBottom: '1em', height: '2em'};

    const options = this.state.categories.map((item, index) => ({
      label: item.name,
      value: index,
    }));

    return (
     
      this.state.form && (
        <AppearanceForm

          bringContentTypeObjectFromApperanc={this.bringContentTypeObjectFromApperanc}
          contentTypeData={this.props.contenttypes}
          handleSubmit={this.handleSubmit}
          form={this.state.form}
        />
      )
    
     
    );
  }
}

export default Custome;
