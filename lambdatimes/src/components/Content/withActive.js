import React from 'react';

const withActive = ComponentOne => ComponentTwo => {
    return class extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                active: false
            };
        }
        componentDidMount(){
            if(this.props.tab === this.props.selectedTab){
                this.setState({active: true});
            } else{
                this.setState({active: false});
            }
        }
        render(){
            if(this.state.active){
                return <ComponentOne onClick={() => {
                    /* Replace this dummy click handler function with your selectTabHandler function from props 
                     you'll need to pass the `tab` in as an argument to this handler. */
                     this.props.changeSelected(this.props.tab)
                  }}>
                    {this.props.tab.toUpperCase()}
                  </ComponentOne>
            } else {
                return<ComponentTwo 
                   onClick={() => {
                    /* Replace this dummy click handler function with your selectTabHandler function from props 
                     you'll need to pass the `tab` in as an argument to this handler. */
                     this.props.changeSelected(this.props.tab)
                  }}>
                  {this.props.tab.toUpperCase()}
                  </ComponentTwo>
            }
        }
    }

} 
export default withActive;