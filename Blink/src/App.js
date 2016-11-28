import React, { Component } from 'react';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import DisplayListItems from './components/DisplayListItems/DisplayListItems';
import UserInfo from './components/UserInfo/UserInfo';
import BucketDisplay from './components/BucketDisplay/BucketDisplay';
import Time from './components/Time/Time';
import './App.css';

import AjaxAdapter from './HelperUtils/AjaxAdapter'

class App extends Component {
  constructor() {
    super()
    this.state = {
      searchTerms: '',
      googleSearch:[],
      dobInput: {
        userAge: 'none',
        userGender: 'none',
        userDOB: 'none',
        age: 'none'
      },
      userProfile: {
        id: 'none',
        email: 'none',
        name: 'none',
        bday: 'none',
        age: 'none',
        profile_img: ''
      },
      bucket: {
        pending: [],
        completed: []
      }
    }
  }

  consoleLogCheck(e){
    console.log('whoa')
  }

  handleToggleClose(e){
    this.refs.bucket.toggle()
  }

  handleToggleDrawer() {
    this.refs.bucket.toggle()
  }

  updateFormAge(e) {
    this.setState({
      dobInput: {
        userAge: e.target.value,
        userGender: this.state.dobInput.userGender,
        userDOB: this.state.dobInput.userDOB
      }
    });
  }
   updateFormGender(e) {
    this.setState({
      dobInput: {
        userAge: this.state.dobInput.userAge,
        userGender: e.target.value,
        userDOB: this.state.dobInput.userDOB
      }
    });
  }
  updateFormDOB(e) {
    this.setState({
      dobInput: {
        userAge: this.state.dobInput.userAge,
        userGender: this.state.dobInput.userGender,
        userDOB: e.target.value
      }
    });
  }

  deathClock(){
    if(this.state.userClock.ss === 0){
      this.setState({
        userClock: {ss: 60 - 1}
      })
      if(this.state.userClock.ss === 0){
        this.setState({
          userClock: {mm : 60 - 1 }
        })
        if(this.state.userClock.mm === 0){
          this.setState({
            userClock: {hh: 24 - 1}
          })
          if(this.state.userClock.hh === 0){
            this.setState({
              userClock: {DD: 30 - 1}
            })
            if(this.state.userClock.DD === 0){
              this.setState({
                userClock: {MM: 12 - 1}
              })
              if(this.state.userClock.MM === 0){
                this.setState({
                  userClock: {YY: this.state.userClock.YY - 1}
                })
              }
            } else{
              this.setState({
                userClock: {MM: this.state.userClock.MM - 1}})
              }
          } else{
            this.setState({
              userClock: {DD: this.state.userClock.DD - 1}})
            }
        } else{
          this.setState({
            userClock: {hh: this.state.userClock.hh - 1}})
          }
      }else{
        this.setState({
          userClock: {mm: this.state.userClock.mm - 1}})
        }
    } else{
      this.setState({
        userClock: {ss: this.state.userClock.ss - 1}})
      }
    }



  searchGooglePlaces() {
    AjaxAdapter.googleSearch(this.state.searchTerms)
    .then((data) => {
      this.setState({
        googleSearch: data.results
      })
    })
  }
  handleSearchSubmit() {
    this.searchGooglePlaces()
  }
  handleSearchInput(e) {
    this.setState({
      searchTerms: e.target.value
    })
  }
  handleDOBSubmit() {
    AjaxAdapter.saveDOB(this.state.dobInput)
    .then(this.updateUserData())
  }
  handleAddClick(details) {
    AjaxAdapter.addToBucket(details, this.state.userProfile.id).then(() => this.getBucket())
  }
  handleCompleteClick(id) {
    AjaxAdapter.completeEvent(id).then(() => this.getBucket())
  }
  handleDeleteClick(id) {
    AjaxAdapter.deleteEvent(id).then(() => this.getBucket())
  }
  updateUserData() {
    AjaxAdapter.getUserData().then((data) => {
      this.setState({
        userProfile: {
          id: data.userProfile.id,
          email: data.userProfile.email,
          name: data.userProfile.name,
          bday: data.userProfile.bday,
          age: data.userProfile.age,
          profile_img: data.userProfile.profile_img,
          death: data.userProfile.death
        }
      })
    })
  }
  getBucket() {
    AjaxAdapter.getBucket(this.state.userProfile.id)
    .then((data) => {
      this.setState({
        bucket: data
      })
    })
  }
  componentDidMount() {
    this.updateUserData();
    this.getBucket();
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Header
          userProfile={this.state.userProfile.profile_img}
          userName={this.state.userProfile.name}
          />
        </div>

        <BucketDisplay ref='bucket'
          handleCompleteClick={(pEvent) => this.handleCompleteClick(pEvent)}
          handleDeleteClick={(dEvent) => this.handleDeleteClick(dEvent)}
          handleToggleDrawer={event => this.handleToggleDrawer(event)}
          consoleLogCheck={event => this.consoleLogCheck(event)}
          bucket={this.state.bucket}
          />

        <UserInfo
          dob={this.state.userProfile.bday}
          updateFormAge={event => this.updateFormAge(event)}
          updateFormGender={event => this.updateFormGender(event)}
          updateFormDOB={event => this.updateFormDOB(event)}
          handleDOBSubmit={() => this.handleDOBSubmit()}
          />

        <Search
          handleSearchSubmit={() => this.handleSearchSubmit()}
          handleSearchInput={(event) => this.handleSearchInput(event)}
        />

        <Time
          death={this.state.userProfile.death}
        />

        <DisplayListItems
          handleAddClick={(gEvent) => this.handleAddClick(gEvent)}
          userId={this.state.userProfile.id}
          googleSearch={this.state.googleSearch}
          />
      </div>
    );
  }
}

export default App;
