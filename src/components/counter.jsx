import React, {Component} from "react";

class Counter extends Component {
    componentDidUpdate(prevProps,prevState){
        console.log('prevProps',prevProps);
        console.log('prevState',prevState);
    };

    componentWillUnmount(){
        console.log("Counter - UnMount");
    }

    render(){
        console.log('Counter - Rendered')
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-mm">Add</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-mm m-2">Delete</button>
            </div>
        );
    }
    getBadgeClasses() {
        let classes = "btn m-2 btn-sm btn-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {value}=this.props.counter;
        return value === 0 ? "Zero" : value;
    }
}

export default Counter;
