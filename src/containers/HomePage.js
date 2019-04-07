import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { searchChildAction, selectChildAction, checkChildInAction, checkChildOutAction } from '../actions/childrenActions';
import ChildrenPage from '../components/ChildrenPage';
import '../styles/style.css';

export class HomePage extends Component {
  constructor() {
    super();
    // this.handleSearch = this.handleSearch.bind(this);
    // this.handleClearSearch = this.handleClearSearch.bind(this);
    this.handleSelectChild = this.handleSelectChild.bind(this);
    // this.handleTextChange = this.handleTextChange.bind(this);
    // this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleCheckIn = this.handleCheckIn.bind(this);
    this.state = { 
      pickupTime: ''
    };
  }

  componentDidMount() {
    this.props.dispatch(searchChildAction(''));
  }

  handleSelectChild(selectedChild) {
    if(this.props.children !== 0){
      this.props.dispatch(selectChildAction(selectedChild));
    }
  }

  // handleTextChange(event){
  //   event.preventDefault();
  //   this.setState({ textNew: this.query.value });
  // }

  // handleSearch(event) {
  //   event.preventDefault();
  //   this.setState({ textSubmitted: this.state.textNew });
  //   if (this.query !== null) {
  //     this.props.dispatch(searchChildAction(this.query.value));
  //   }
  // }

  // handleKeyPress(target) {
  //   if(target.charCode===13){
  //     this.setState({ textSubmitted: this.state.textNew });
  //     if (this.query !== null) {
  //       this.props.dispatch(searchChildAction(this.query.value));
  //     }    
  //   } 
  // }

  // handleClearSearch(event) {
  //   event.preventDefault();
  //   if (this.query !== null) {
  //       this.props.dispatch(searchChildAction(''));
  //       this.query.value = '';
  //   }
  // }

  handleCheckIn(selectedChild, pickupTime) {
    if(this.props.children !== 0){
      this.props.dispatch(checkChildInAction(selectedChild, pickupTime));
    }
  }

  handleCheckOut(selectedChild) {
    if(this.props.children !== 0){
      this.props.dispatch(checkChildOutAction(selectedChild));
    }
  }

  render() {

    const { children, selectedChild } = this.props;

    // const disabledButton = (
    //   <input
    //     type="submit"
    //     className="btn btn-sec"
    //     value="Search Library"
    //   />
    // );
    
    console.log('children', children);

    return (
      <div className="container-fluid">
        { children ? <div className="row">
            <ChildrenPage
              children={children}
              selectedChild={selectedChild}
              onhandleSelectChild={this.handleSelectChild}
              onhandleCheckIn={this.handleCheckIn}
              onhandleCheckOut={this.handleCheckOut}
            />
          </div> : 'loading ....' }
      </div>
    );
  }
}

HomePage.propTypes = {
  children: PropTypes.array,
  selectedChild: PropTypes.object,
  dispatch: PropTypes.func.isRequired
};

/* Subscribe component to redux store and merge the state into component\s props */
const mapStateToProps = ({ children }) => ({
  children: children[0],
  selectedChild: children.selectedChild
});

/* connect method from react-router connects the component with redux store */
export default connect(mapStateToProps)(HomePage);
