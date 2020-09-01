import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Link, Switch} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import history from '../history.js';
import $ from 'jquery';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../App.css';
 
 
class TestingDb extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			intervalIsSet: false,
		};
	}
	
	getDataFromDb = () => {
	fetch('http://localhost:3001/api/getData')
	  .then((data) => data.json())
	  .then((res) => this.setState({ data: res.data }));
	};
	
	componentDidMount() {
		this.getDataFromDb();
		if (!this.state.intervalIsSet) {
		  let interval = setInterval(this.getDataFromDb, 1000);
		  this.setState({ intervalIsSet: interval });
		}
	}
	
	componentWillUnmount() {
		if (this.state.intervalIsSet) {
		  clearInterval(this.state.intervalIsSet);
		  this.setState({ intervalIsSet: null });
		}
	}
	
	
	  // our put method that uses our backend api
  // to create new query into our data base
  putDataToDB = (message) => {
    let currentIds = this.state.data.map((data) => data.id);
    let idToBeAdded = 0;
    while (currentIds.includes(idToBeAdded)) {
      ++idToBeAdded;
    }

    /*window.fetch('http://localhost:3001/api/putData', {
	  method: 'post',
      id: idToBeAdded,
      message: message,
    });*/
	
	/*fetch('http://localhost:3001/api/putData', {
                method: 'POST',
                headers : new Headers(),
                body:JSON.stringify({id:idToBeAdded, message:message})
            }).then((res) => res.json())
            .then((data) =>  console.log(data))
            .catch((err)=>console.log(err));*/
			
			
					fetch('http://localhost:3001/api/putData',{
						 method: 'POST',
						 body: JSON.stringify({"id": idToBeAdded, "message": message})
						  }).then(function (response) {
							  return response.json();
						 }).then(function (result) {
							 // console.log(result);
							  if(!result.error){
							 
						   alert('added');
						 }
					}).catch(function (error) {
					console.log("-------- error ------- "+error);
					alert("result:"+error)
					});		
	
  };

  // our delete method that uses our backend api
  // to remove existing database information
  deleteFromDB = (idTodelete) => {
    parseInt(idTodelete);
    let objIdToDelete = null;
    this.state.data.forEach((dat) => {
      if (dat.id == idTodelete) {
        objIdToDelete = dat._id;
      }
    });

    /*axios.delete('http://localhost:3001/api/deleteData', {
      data: {
        id: objIdToDelete,
      },
    }); */
	
	fetch('http://localhost:3001/api/deleteData', {
                method: 'DELETE',
                headers : new Headers(),
                body:JSON.stringify({id:objIdToDelete})
            }).then((res) => res.json())
            .then((data) =>  console.log(data))
            .catch((err)=>console.log(err));
	
  };

  // our update method that uses our backend api
  // to overwrite existing data base information
  updateDB = (idToUpdate, updateToApply) => {
    let objIdToUpdate = null;
    parseInt(idToUpdate);
    this.state.data.forEach((dat) => {
      if (dat.id == idToUpdate) {
        objIdToUpdate = dat._id;
      }
    });

    /*window.fetch('http://localhost:3001/api/updateData', {
      method: 'post',
	  id: objIdToUpdate,
      update: { message: updateToApply },
    });*/
	
						fetch('http://localhost:3001/api/updateData',{
						 method: 'POST',
						 body: JSON.stringify({"id": objIdToUpdate})
						  }).then(function (response) {
							  return response.json();
						 }).then(function (result) {
							 // console.log(result);
							  
						   alert(updateToApply);
						 
					}).catch(function (error) {
					console.log("-------- error ------- "+error);
					alert("result:"+error)
					});
	
  };
	
	
	render() {
		const { data } = this.state;
		return (
		  <div>
			<ul>
			  {data.length <= 0
				? 'NO DB ENTRIES YET'
				: data.map((dat) => (
					<li style={{ padding: '10px' }} key={data.message}>
					  <span style={{ color: 'gray' }}> id: </span> {dat.id} <br />
					  <span style={{ color: 'gray' }}> data: </span>
					  {dat.message}
					</li>
				  ))}
			</ul>
			<div style={{ padding: '10px' }}>
			  <input
				type="text"
				onChange={(e) => this.setState({ message: e.target.value })}
				placeholder="add something in the database"
				style={{ width: '200px' }}
			  />
			  <button onClick={() => this.putDataToDB(this.state.message)}>
				ADD
			  </button>
			</div>
			<div style={{ padding: '10px' }}>
			  <input
				type="text"
				style={{ width: '200px' }}
				onChange={(e) => this.setState({ idToDelete: e.target.value })}
				placeholder="put id of item to delete here"
			  />
			  <button onClick={() => this.deleteFromDB(this.state.idToDelete)}>
				DELETE
			  </button>
			</div>
			<div style={{ padding: '10px' }}>
			  <input
				type="text"
				style={{ width: '200px' }}
				onChange={(e) => this.setState({ idToUpdate: e.target.value })}
				placeholder="id of item to update here"
			  />
			  <input
				type="text"
				style={{ width: '200px' }}
				onChange={(e) => this.setState({ updateToApply: e.target.value })}
				placeholder="put new value of the item here"
			  />
			  <button
				onClick={() =>
				  this.updateDB(this.state.idToUpdate, this.state.updateToApply)
				}
			  >
				UPDATE
			  </button>
			</div>
		  </div>
		);
  }
	
	
	

} 
export default TestingDb;